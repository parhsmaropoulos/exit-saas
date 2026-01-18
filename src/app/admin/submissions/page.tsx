'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  CheckCircle,
  XCircle,
  Clock,
  ExternalLink,
  Github,
  Star,
  Loader2,
  RefreshCw,
  Lock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface Submission {
  id: string;
  tool_name: string;
  github_url: string;
  description: string;
  saas_equivalent: string;
  category: string;
  submitter_email: string;
  github_stars: number | null;
  status: 'pending' | 'approved' | 'rejected';
  reviewer_notes: string | null;
  created_at: string;
}

export default function AdminSubmissionsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

  // Simple password auth (you should replace this with proper auth in production)
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
      fetchSubmissions();
    } else {
      setAuthError('Invalid password');
    }
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/submissions');
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.submissions);
      }
    } catch (error) {
      console.error('Failed to fetch submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id: string, action: 'approve' | 'reject', notes?: string) => {
    setActionLoading(id);
    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action, notes }),
      });

      if (response.ok) {
        fetchSubmissions();
      } else {
        const data = await response.json();
        alert(data.error || 'Action failed');
      }
    } catch (error) {
      console.error('Action failed:', error);
      alert('Action failed');
    } finally {
      setActionLoading(null);
    }
  };

  const filteredSubmissions = submissions.filter((s) => {
    if (filter === 'all') return true;
    return s.status === filter;
  });

  const statusCounts = {
    pending: submissions.filter((s) => s.status === 'pending').length,
    approved: submissions.filter((s) => s.status === 'approved').length,
    rejected: submissions.filter((s) => s.status === 'rejected').length,
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Admin Access</h1>
              <p className="text-muted-foreground mt-1">Enter password to continue</p>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={authError ? 'border-destructive' : ''}
              />
              {authError && (
                <p className="text-sm text-destructive">{authError}</p>
              )}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Tool Submissions</h1>
            <p className="text-muted-foreground mt-1">Review and manage submitted tools</p>
          </div>
          <Button variant="outline" onClick={fetchSubmissions} disabled={loading}>
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`p-4 rounded-xl border transition-all ${
              filter === 'all' ? 'bg-primary/10 border-primary' : 'bg-card border-border hover:border-primary/50'
            }`}
          >
            <div className="text-2xl font-bold text-foreground">{submissions.length}</div>
            <div className="text-sm text-muted-foreground">Total</div>
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`p-4 rounded-xl border transition-all ${
              filter === 'pending' ? 'bg-yellow-500/10 border-yellow-500' : 'bg-card border-border hover:border-yellow-500/50'
            }`}
          >
            <div className="text-2xl font-bold text-yellow-500">{statusCounts.pending}</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`p-4 rounded-xl border transition-all ${
              filter === 'approved' ? 'bg-green-500/10 border-green-500' : 'bg-card border-border hover:border-green-500/50'
            }`}
          >
            <div className="text-2xl font-bold text-green-500">{statusCounts.approved}</div>
            <div className="text-sm text-muted-foreground">Approved</div>
          </button>
          <button
            onClick={() => setFilter('rejected')}
            className={`p-4 rounded-xl border transition-all ${
              filter === 'rejected' ? 'bg-red-500/10 border-red-500' : 'bg-card border-border hover:border-red-500/50'
            }`}
          >
            <div className="text-2xl font-bold text-red-500">{statusCounts.rejected}</div>
            <div className="text-sm text-muted-foreground">Rejected</div>
          </button>
        </div>

        {/* Submissions List */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="text-center py-20 bg-card border border-border rounded-xl">
            <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No {filter !== 'all' ? filter : ''} submissions found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSubmissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Main Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {submission.tool_name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Alternative to <span className="text-foreground">{submission.saas_equivalent}</span>
                        </p>
                      </div>
                      <Badge
                        variant={
                          submission.status === 'approved'
                            ? 'default'
                            : submission.status === 'rejected'
                            ? 'destructive'
                            : 'secondary'
                        }
                        className={
                          submission.status === 'approved'
                            ? 'bg-green-500/20 text-green-500'
                            : submission.status === 'pending'
                            ? 'bg-yellow-500/20 text-yellow-500'
                            : ''
                        }
                      >
                        {submission.status === 'pending' && <Clock className="w-3 h-3 mr-1" />}
                        {submission.status === 'approved' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {submission.status === 'rejected' && <XCircle className="w-3 h-3 mr-1" />}
                        {submission.status}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm">{submission.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <Badge variant="outline">{submission.category}</Badge>
                      {submission.github_stars !== null && (
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          {submission.github_stars.toLocaleString()} stars
                        </span>
                      )}
                      <a
                        href={submission.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:underline"
                      >
                        <Github className="w-4 h-4" />
                        View Repository
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      Submitted by {submission.submitter_email} on{' '}
                      {new Date(submission.created_at).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Actions */}
                  {submission.status === 'pending' && (
                    <div className="flex flex-row lg:flex-col gap-2">
                      <Button
                        onClick={() => handleAction(submission.id, 'approve')}
                        disabled={actionLoading === submission.id}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        {actionLoading === submission.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Approve
                          </>
                        )}
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => {
                          const notes = prompt('Rejection reason (optional):');
                          handleAction(submission.id, 'reject', notes || undefined);
                        }}
                        disabled={actionLoading === submission.id}
                      >
                        {actionLoading === submission.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>

                {submission.reviewer_notes && (
                  <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Reviewer notes:</span> {submission.reviewer_notes}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
