'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const saasNames = [
  'Slack',
  'Jira',
  'Stripe',
  'Notion',
  'Asana',
  'HubSpot',
  'Salesforce',
  'Zendesk',
  'Intercom',
  'Mailchimp',
];

export function AnimatedPlaceholder() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % saasNames.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center">
      <span className="text-muted-foreground">Find an open-source alternative to </span>
      <span className="relative ml-1 inline-block min-w-[120px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={saasNames[currentIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 text-primary font-semibold"
          >
            {saasNames[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
