'use client';

import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SubmitToolForm() {
  return (
    <div className="text-center py-12">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <Clock className="w-10 h-10 text-primary" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-3">
        Coming Soon
      </h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        We&apos;re working on the tool submission feature.
        Check back soon to submit your favorite open-source alternatives!
      </p>
      <Link href="/">
        <Button variant="outline">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

/*
// =============================================================================
// ORIGINAL FORM CODE - Uncomment when ready to enable submissions
// =============================================================================

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Link as LinkIcon,
  FileText,
  Tag,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Category } from '@/types/database';

const CATEGORIES: Category[] = [
  'CRM',
  'Analytics',
  'DevTools',
  'Communication',
  'Project Management',
  'Marketing',
  'Finance',
  'Storage',
  'Security',
  'Other',
];

interface FormData {
  toolName: string;
  githubUrl: string;
  description: string;
  saasEquivalent: string;
  category: Category;
  submitterEmail: string;
}

interface FormErrors {
  toolName?: string;
  githubUrl?: string;
  description?: string;
  saasEquivalent?: string;
  category?: string;
  submitterEmail?: string;
}

export function SubmitToolForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState<FormData>({
    toolName: '',
    githubUrl: '',
    description: '',
    saasEquivalent: '',
    category: 'Other',
    submitterEmail: '',
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.toolName.trim()) {
      newErrors.toolName = 'Tool name is required';
    }

    if (!formData.githubUrl.trim()) {
      newErrors.githubUrl = 'GitHub URL is required';
    } else if (!formData.githubUrl.match(/^https?:\/\/(www\.)?github\.com\/[\w-]+\/[\w.-]+\/?$/)) {
      newErrors.githubUrl = 'Please enter a valid GitHub repository URL';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }

    if (!formData.saasEquivalent.trim()) {
      newErrors.saasEquivalent = 'SaaS equivalent is required';
    }

    if (!formData.submitterEmail.trim()) {
      newErrors.submitterEmail = 'Email is required';
    } else if (!formData.submitterEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.submitterEmail = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-tool', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit tool');
      }

      setIsSuccess(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Thank You for Your Submission!
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          We&apos;ll review your tool and add it to our directory if it meets our criteria.
          You&apos;ll receive an email notification once it&apos;s approved.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={() => router.push('/')}>
            Back to Home
          </Button>
          <Button onClick={() => {
            setIsSuccess(false);
            setFormData({
              toolName: '',
              githubUrl: '',
              description: '',
              saasEquivalent: '',
              category: 'Other',
              submitterEmail: '',
            });
          }}>
            Submit Another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitError && (
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-destructive">Submission Failed</p>
            <p className="text-sm text-muted-foreground">{submitError}</p>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <Tag className="w-4 h-4 text-muted-foreground" />
          Tool Name *
        </label>
        <Input
          placeholder="e.g., Coolify, Plausible, Mattermost"
          value={formData.toolName}
          onChange={(e) => handleChange('toolName', e.target.value)}
          className={errors.toolName ? 'border-destructive' : ''}
        />
        {errors.toolName && (
          <p className="text-sm text-destructive">{errors.toolName}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <Github className="w-4 h-4 text-muted-foreground" />
          GitHub Repository URL *
        </label>
        <Input
          placeholder="https://github.com/username/repository"
          value={formData.githubUrl}
          onChange={(e) => handleChange('githubUrl', e.target.value)}
          className={errors.githubUrl ? 'border-destructive' : ''}
        />
        {errors.githubUrl && (
          <p className="text-sm text-destructive">{errors.githubUrl}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <FileText className="w-4 h-4 text-muted-foreground" />
          Description *
        </label>
        <textarea
          placeholder="Brief description of what the tool does and its main features..."
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          rows={3}
          className={`w-full px-3 py-2 bg-background border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none ${
            errors.description ? 'border-destructive' : 'border-input'
          }`}
        />
        {errors.description && (
          <p className="text-sm text-destructive">{errors.description}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <LinkIcon className="w-4 h-4 text-muted-foreground" />
          SaaS Equivalent *
        </label>
        <Input
          placeholder="e.g., Heroku, Slack, Google Analytics"
          value={formData.saasEquivalent}
          onChange={(e) => handleChange('saasEquivalent', e.target.value)}
          className={errors.saasEquivalent ? 'border-destructive' : ''}
        />
        <p className="text-xs text-muted-foreground">
          What paid SaaS product does this tool replace?
        </p>
        {errors.saasEquivalent && (
          <p className="text-sm text-destructive">{errors.saasEquivalent}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <Layers className="w-4 h-4 text-muted-foreground" />
          Category *
        </label>
        <select
          value={formData.category}
          onChange={(e) => handleChange('category', e.target.value as Category)}
          className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          Your Email *
        </label>
        <Input
          type="email"
          placeholder="you@example.com"
          value={formData.submitterEmail}
          onChange={(e) => handleChange('submitterEmail', e.target.value)}
          className={errors.submitterEmail ? 'border-destructive' : ''}
        />
        <p className="text-xs text-muted-foreground">
          We&apos;ll notify you when your submission is reviewed
        </p>
        {errors.submitterEmail && (
          <p className="text-sm text-destructive">{errors.submitterEmail}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Submit Tool for Review
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you confirm that the tool is open-source and self-hostable.
      </p>
    </form>
  );
}
*/
