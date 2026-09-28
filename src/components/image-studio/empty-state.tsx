"use client";

import { ImageIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyState({ onShowDemo }: { onShowDemo?: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-16 text-center">
      <div className="relative">
        <ImageIcon className="h-14 w-14 text-muted-foreground/30" strokeWidth={1} />
        <Sparkles className="absolute -top-2 -right-2 h-5 w-5 text-muted-foreground/50" />
      </div>
      <div className="space-y-1">
        <p className="text-base font-semibold text-foreground">No images yet</p>
        <p className="text-sm text-muted-foreground">
          Start by describing what you want to create.
        </p>
      </div>
      {onShowDemo && (
        <Button variant="outline" size="sm" onClick={onShowDemo} className="mt-1 text-sm font-medium rounded-lg">
          Load recent history
        </Button>
      )}
    </div>
  );
}
