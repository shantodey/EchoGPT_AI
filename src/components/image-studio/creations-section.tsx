"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { EmptyState } from "./empty-state";
import { useStudio } from "./studio-context";
import { Sparkles } from "lucide-react";

export function CreationsSection() {
  const { activeSession } = useStudio();

  if (!activeSession) {
    return <EmptyState />;
  }

  return (
    <section className="space-y-4 pt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold text-foreground">Current Creation</h2>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full font-medium">
            {activeSession.model}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">{activeSession.timestamp}</span>
      </div>

      <Card className="group relative overflow-hidden rounded-2xl border border-border bg-card p-0 shadow-sm">
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-muted">
          <Image src={activeSession.imageUrl} alt={activeSession.prompt} fill sizes="(max-width: 768px) 100vw, 672px" className="object-cover transition-transform duration-300 group-hover:scale-105" priority/>
          <div className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur text-[10px] font-semibold px-2 py-0.5 rounded-md border border-border">
            {activeSession.aspectRatio}
          </div>
        </div>

        <div className="p-3.5 space-y-1.5">
          <p className="text-xs text-foreground font-medium leading-relaxed">
            `{activeSession.prompt}` 
          </p>
          <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t border-border/40">
            <span className="flex items-center gap-1 font-mono">
              <Sparkles className="h-3 w-3" />
              {activeSession.model}
            </span>
            <span>{activeSession.timestamp}</span>
          </div>
        </div>
      </Card>
    </section>
  );
}
