"use client";

import Link from "next/link";
import { Github, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">
                  S
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Exit-Saas<span className="text-primary">.io</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Helping teams discover open-source alternatives to expensive SaaS
              tools. Calculate your savings and take control of your software
              stack.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://github.com/parhsmaropoulos/exit-saas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              {/* <a
                href="https://twitter.com/saasexit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#tools"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Browse All Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/submit"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Submit a Tool
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#tools"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Communication
                </Link>
              </li>
              <li>
                <Link
                  href="/#tools"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Project Management
                </Link>
              </li>
              <li>
                <Link
                  href="/#tools"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/#tools"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  DevTools
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate-disclosure"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Exit-Saas.io. Open source and free
            forever.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
              for the open-source community
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
