'use client'

// import { HeroContent } from './hero-content';
// import { CenteredSeparator } from "@/components/ui/centered-separator";
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { ActionButton } from '@/components/ui/action-button';
import { CenteredSeparator } from '@/components/ui/centered-separator';

export function HeroSection() {
  const isMobile = useIsMobile();

  const scrollToSection = (id: string) => { 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center gap-16 p-20">
          <CenteredSeparator />
          <div className="container mx-auto h-full flex items-center justify-center p-10">
            <motion.div
              className="max-w-4xl px-4 md:px-0 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-black mb-6 text-foreground`}>
                Strategic Communications
                {/* Add a space before the break for mobile */}
                {' '}
                {/* Responsive line break: hidden on mobile, visible on md+ */}
                <br className="hidden md:block" />
                for High-Stakes Situations
              </h1>
              <p className={`${isMobile ? 'text-lg' : 'text-xl'} mb-8 text-muted-foreground`}>
                When reputation matters most, global leaders from startups to Fortune 500 companies trust CoPilot Agency for strategic communications and crisis management. Available 24/7 for immediate response.
              </p>
              <div className={`${isMobile ? 'flex flex-col space-y-4' : 'flex justify-center space-x-4'}`}>
                <ActionButton 
                  variant="primary" 
                  showIcon 
                  className={isMobile ? 'w-full justify-center' : ''}
                  onClick={() => scrollToSection('contact')} 
                >
                  Schedule Consultation
                </ActionButton>
              </div>
            </motion.div>
          </div>
          <CenteredSeparator />
        </div>
      </section>
    </>
  );
}