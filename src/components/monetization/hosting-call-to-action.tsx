'use client';

import { motion } from 'framer-motion';
import { Rocket, Server, CheckCircle, ArrowRight, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HostingCallToActionProps {
  toolName: string;
}

export function HostingCallToAction({ toolName }: HostingCallToActionProps) {
  const referralUrl = process.env.NEXT_PUBLIC_DO_REFERRAL || 'https://m.do.co/c/your-referral-code';

  const benefits = [
    'Deploy in under 5 minutes',
    '$200 free credits for 60 days',
    'No credit card required to start',
    'Automatic backups included',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0080FF] to-[#0066CC] p-1"
    >
      {/* Inner content with slight transparency for depth */}
      <div className="relative rounded-xl bg-gradient-to-br from-[#0080FF]/95 to-[#0066CC]/95 p-6 md:p-8">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Ready to Switch?
              </h3>
              <p className="text-white/80 text-lg">
                Deploy <span className="font-semibold text-white">{toolName}</span> on DigitalOcean in 1-click
              </p>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 text-white/90"
              >
                <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                <span className="text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Credit highlight */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center shrink-0">
              <Gift className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-white font-semibold">Get $200 in Free Credits</p>
              <p className="text-white/70 text-sm">New users receive $200 credit valid for 60 days</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="w-full bg-white hover:bg-gray-100 text-[#0066CC] font-bold text-lg h-14 shadow-lg shadow-black/20"
            onClick={() => window.open(referralUrl, '_blank')}
          >
            <Server className="w-5 h-5 mr-2" />
            Deploy {toolName} Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Trust text */}
          <p className="text-center text-white/60 text-xs mt-4">
            Trusted by 600,000+ developers worldwide. Cancel anytime.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
