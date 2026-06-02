import { Zap } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import NavHeader from "@/components/ui/nav-header";

const DottedBackground = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="100%"
    width="100%"
    className="pointer-events-none absolute inset-0 z-0"
  >
    <defs>
      <pattern patternUnits="userSpaceOnUse" height="30" width="30" id="dottedGrid">
        <circle fill="hsl(var(--foreground) / 0.3)" r="1" cy="2" cx="2"></circle>
      </pattern>
    </defs>
    <rect fill="url(#dottedGrid)" height="100%" width="100%"></rect>
  </svg>
);

const GlassButtonDemo = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-white p-10">
      <DottedBackground />
      <div className="z-10 w-full max-w-5xl">
        <NavHeader />
      </div>
      <div className="z-10 text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-950">
          Glass Button
        </h1>
        <p className="mt-3 text-slate-600">
          shadcn-style folder structure • Tailwind • TypeScript
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <GlassButton size="sm">Small</GlassButton>
          <GlassButton size="default" contentClassName="flex items-center gap-2">
            <span>Generate</span>
            <Zap className="h-5 w-5" />
          </GlassButton>
          <GlassButton size="lg">Submit</GlassButton>
          <GlassButton size="icon" aria-label="Generate">
            <Zap className="h-5 w-5" />
          </GlassButton>
        </div>
      </div>
    </div>
  );
};

export default GlassButtonDemo;
