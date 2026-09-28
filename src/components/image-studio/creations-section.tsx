"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { EmptyState } from "./empty-state";
import { useStudio } from "./studio-context";
import { Sparkles } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio"
export function CreationsSection() {
  const { activeSession } = useStudio();

  if (!activeSession) {
    return <EmptyState />;
  }

  return (
<section className="space-y-3 pt-2">
  {/* হেডার পার্ট */}
  <div className="flex items-center justify-between max-w-sm mx-auto">
    <div className="flex items-center gap-2">
      <h2 className="text-xs font-semibold text-foreground">Current Creation</h2>
      <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full font-medium">
        {activeSession.model}
      </span>
    </div>
    <span className="text-[10px] text-muted-foreground">{activeSession.timestamp}</span>
  </div>

  {/* কার্ডের সাইজ ছোট (max-w-sm) এবং সেন্টারে (mx-auto) আনা হয়েছে */}
  <Card className="group relative overflow-hidden rounded-xl border border-border bg-card p-0 shadow-sm max-w-sm mx-auto">
    <AspectRatio ratio={16 / 9} className="w-full bg-muted relative">
      <Image 
        src={activeSession.imageUrl} 
        alt={activeSession.prompt} 
        fill
        className="object-cover grayscale dark:brightness-20"
      />
      <div className="absolute top-1.5 right-1.5 z-10 bg-background/80 backdrop-blur text-[9px] font-semibold px-1.5 py-0.5 rounded-md border border-border">
        {activeSession.aspectRatio}
      </div>
    </AspectRatio>

    <div className="p-2.5 space-y-1">
      <p className="text-[11px] text-foreground font-medium leading-tight">
        {activeSession.prompt}
      </p>
      <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/40">
        <span className="flex items-center gap-1 font-mono">
          <Sparkles className="h-2.5 w-2.5" />
          {activeSession.model}
        </span>
        <span>{activeSession.timestamp}</span>
      </div>
    </div>
  </Card>
</section>
  );
}
