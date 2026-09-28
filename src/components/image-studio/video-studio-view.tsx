import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Video, Sparkles, Play, Sliders } from "lucide-react";
import { useState } from "react";

export function VideoStudioView() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-2 py-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-foreground mb-1">
          <Video className="h-6 w-6" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/30 text-foreground">
          <Sparkles className="h-3 w-3" /> PRO FEATURE
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">  Video Studio </h1>
        <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
          Transform your text descriptions or still images into cinema-grade AI motion videos.
        </p>
      </div>

      <Card className="w-full rounded-2xl border border-border shadow-sm p-4 space-y-4 bg-card">
        <Textarea
          placeholder="Describe the scene and camera motion (e.g. drone flyover through foggy pine forest...)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[100px] resize-none border-0 shadow-none focus-visible:ring-0 text-sm p-0 bg-transparent placeholder:text-muted-foreground/70"
        />

        <div className="flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5 rounded-lg">
              <Sliders className="h-3.5 w-3.5" /> 5s Duration
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5 rounded-lg">
              1080p Full HD
            </Button>
          </div>

          <Button size="sm" className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/80 h-8 px-4 rounded-lg">
            <Play className="h-3.5 w-3.5 fill-current" />
            Generate Video
          </Button>
        </div>
      </Card>

      <div className="pt-4 space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Featured Community Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="overflow-hidden border border-border bg-card group relative aspect-video">
            <Image src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" alt="Cyberpunk rain video"  fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover"/>
            <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="h-10 w-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 z-10 bg-background/90 text-[11px] px-2 py-0.5 rounded backdrop-blur">
              Cyberpunk Alley • 4K 60fps
            </div>
          </Card>

          <Card className="overflow-hidden border border-border bg-card group relative aspect-video">
            <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Nature drone shot"  fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover" />
            <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="h-10 w-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 z-10 bg-background/90 text-[11px] px-2 py-0.5 rounded backdrop-blur">
              Alpine Lake Sunset • Drone Orbit
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
