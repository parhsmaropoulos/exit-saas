import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase";

// GET - Fetch all submissions
export async function GET() {
  try {
    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase
      .from("tool_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch submissions" },
        { status: 500 }
      );
    }

    return NextResponse.json({ submissions: data || [] });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PATCH - Update submission status (approve/reject)
export async function PATCH(request: NextRequest) {
  return NextResponse.json({ submissions: [] });
  // try {
  //   const body = await request.json();
  //   const { id, action, notes } = body;

  //   if (!id || !action) {
  //     return NextResponse.json(
  //       { error: 'Missing required fields: id and action' },
  //       { status: 400 }
  //     );
  //   }

  //   if (!['approve', 'reject'].includes(action)) {
  //     return NextResponse.json(
  //       { error: 'Invalid action. Must be "approve" or "reject"' },
  //       { status: 400 }
  //     );
  //   }

  //   const supabase = createServerSupabaseClient();

  //   // Get the submission first
  //   const { data: submission, error: fetchError } = await supabase
  //     .from('tool_submissions')
  //     .select('*')
  //     .eq('id', id)
  //     .single();

  //   if (fetchError || !submission) {
  //     return NextResponse.json(
  //       { error: 'Submission not found' },
  //       { status: 404 }
  //     );
  //   }

  //   if (submission.status && submission.status !== 'pending') {
  //     return NextResponse.json(
  //       { error: 'Submission has already been reviewed' },
  //       { status: 400 }
  //     );
  //   }

  //   const newStatus = action === 'approve' ? 'approved' : 'rejected';

  //   // If approving, also add to the main tools table
  //   if (action === 'approve') {
  //     // Fetch additional GitHub data
  //     let githubData = null;
  //     try {
  //       const repoPath = submission.github_url
  //         .replace(/^https?:\/\/(www\.)?github\.com\//, '')
  //         .replace(/\/$/, '');

  //       const githubResponse = await fetch(`https://api.github.com/repos/${repoPath}`, {
  //         headers: {
  //           'Accept': 'application/vnd.github.v3+json',
  //           'User-Agent': 'Exit-Saas-Admin',
  //         },
  //       });

  //       if (githubResponse.ok) {
  //         githubData = await githubResponse.json();
  //       }
  //     } catch (error) {
  //       console.warn('Failed to fetch GitHub data:', error);
  //     }

  //     // Insert into main tools table
  //     const { error: insertError } = await supabase
  //       .from('tools')
  //       .insert({
  //         name: submission.tool_name,
  //         description: submission.description,
  //         github_url: submission.github_url,
  //         category: submission.category,
  //         saas_equivalent: submission.saas_equivalent,
  //         stars: githubData?.stargazers_count || submission.github_stars || 0,
  //         last_commit: githubData?.pushed_at || new Date().toISOString(),
  //         self_host_difficulty: 5, // Default middle difficulty, can be adjusted later
  //         docker_ready: true, // Default to true, can be verified later
  //       });

  //     if (insertError) {
  //       console.error('Failed to insert tool:', insertError);
  //       // Check if it's a duplicate
  //       if (insertError.code === '23505') {
  //         return NextResponse.json(
  //           { error: 'This tool already exists in the directory' },
  //           { status: 409 }
  //         );
  //       }
  //       return NextResponse.json(
  //         { error: 'Failed to add tool to directory' },
  //         { status: 500 }
  //       );
  //     }
  //   }

  //   // Update submission status
  //   const { error: updateError } = await supabase
  //     .from('tool_submissions')
  //     .update({
  //       status: newStatus,
  //       reviewer_notes: notes || null,
  //       reviewed_at: new Date().toISOString(),
  //     })
  //     .eq('id', id);

  //   if (updateError) {
  //     console.error('Update error:', updateError);
  //     return NextResponse.json(
  //       { error: 'Failed to update submission status' },
  //       { status: 500 }
  //     );
  //   }

  //   return NextResponse.json({
  //     message: `Submission ${newStatus} successfully`,
  //     status: newStatus,
  //   });
  // } catch (error) {
  //   console.error('PATCH error:', error);
  //   return NextResponse.json(
  //     { error: 'Internal server error' },
  //     { status: 500 }
  //   );
  // }
}
