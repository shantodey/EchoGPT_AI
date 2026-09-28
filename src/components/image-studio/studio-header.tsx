import { Sparkles } from "lucide-react";

export function StudioHeader() {
  return (
    <div className="flex flex-col items-center gap-2 py-8 text-center">
      <Sparkles className="h-7 w-7 text-muted-foreground mb-1" />
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Image Studio
      </h1>
      <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
        Turn your ideas into stunning images with AI.
        <br />
        Just describe what you want, choose the settings, and let the magic
        happen.
      </p>
    </div>
  );
}
