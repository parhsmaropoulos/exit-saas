import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase";

interface SubmissionData {
  toolName: string;
  githubUrl: string;
  description: string;
  saasEquivalent: string;
  category: string;
  submitterEmail: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: SubmissionData = await request.json();

    // Validate required fields
    const requiredFields = [
      "toolName",
      "githubUrl",
      "description",
      "saasEquivalent",
      "category",
      "submitterEmail",
    ];
    for (const field of requiredFields) {
      if (!body[field as keyof SubmissionData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate GitHub URL format
    const githubRegex = /^https?:\/\/(www\.)?github\.com\/[\w-]+\/[\w.-]+\/?$/;
    if (!githubRegex.test(body.githubUrl)) {
      return NextResponse.json(
        { error: "Invalid GitHub URL format" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.submitterEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Fetch GitHub repo info to validate it exists and get stars
    const repoPath = body.githubUrl
      .replace(/^https?:\/\/(www\.)?github\.com\//, "")
      .replace(/\/$/, "");
    let githubData = null;

    try {
      const githubResponse = await fetch(
        `https://api.github.com/repos/${repoPath}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Exit-Saas-Submission",
          },
        }
      );

      if (githubResponse.ok) {
        githubData = await githubResponse.json();
      }
    } catch {
      // GitHub API call failed, continue without GitHub data
      console.warn("Failed to fetch GitHub data for:", repoPath);
    }

    const supabase = createServerSupabaseClient();

    // Check if tool already exists or was already submitted
    const { data: existingTool } = await supabase
      .from("tool_submissions")
      .select("id")
      .eq("github_url", body.githubUrl)
      .single();

    if (existingTool) {
      return NextResponse.json(
        { error: "This tool has already been submitted" },
        { status: 409 }
      );
    }

    // Insert submission
    // const { data, error } = await supabase
    //   .from('tool_submissions')
    //   .insert({
    //     tool_name: body.toolName,
    //     github_url: body.githubUrl,
    //     description: body.description,
    //     saas_equivalent: body.saasEquivalent,
    //     category: body.category,
    //     submitter_email: body.submitterEmail,
    //     github_stars: githubData?.stargazers_count || null,
    //     status: 'pending',
    //   })
    //   .select()
    //   .single();

    // if (error) {
    //   console.error('Supabase error:', error);
    //   return NextResponse.json(
    //     { error: 'Failed to save submission' },
    //     { status: 500 }
    //   );
    // }

    return NextResponse.json(
      {
        message: "Tool submitted successfully",
        submission: {
          // id: data.id,
          // toolName: data.tool_name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
