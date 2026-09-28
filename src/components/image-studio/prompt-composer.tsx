"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, ImageIcon, Sparkles, RatioIcon, Layers2 } from "lucide-react";
import { useStudio } from "./studio-context";

export function PromptComposer() {
  const { activeSession } = useStudio();
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState<string | null>("3:2");
  const [model, setModel] = useState<string | null>("nano-banana-2-lite");

  useEffect(() => {
    if (activeSession) {
      setPrompt(activeSession.prompt);
      setAspectRatio(activeSession.aspectRatio || "3:2");
    }
  }, [activeSession]);

  return (
    <Card className="w-full rounded-2xl border border-border shadow-sm overflow-hidden bg-card">
      {/* Textarea */}
      <Textarea id="prompt-input" placeholder="Describe the image you want to create..." value={prompt} onChange={(e) => setPrompt(e.target.value)}
        className="min-h-[96px] resize-none border-0 shadow-none focus-visible:ring-0 text-sm px-4 pt-4 bg-transparent placeholder:text-muted-foreground/70"
      />

      {/* Top action row: + | image | generate */}
      <div className="flex items-center justify-between px-3 pb-2">
        <Button variant="ghost"  size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" aria-label="Add attachment">
          <Plus className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2">
          <Button  variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" aria-label="Upload image">
            <ImageIcon className="h-4 w-4" />
          </Button>

          <Button id="generate-btn" size="sm" className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/80 font-medium h-8 px-3 rounded-lg">
            <Sparkles className="h-3.5 w-3.5" />
            Generate
          </Button>
        </div>
      </div>

      <Separator />

      {/* Bottom controls row */}
      <div className="flex items-center gap-2 px-3 py-2 flex-wrap">
        {/* Aspect ratio */}
        <Select value={aspectRatio} onValueChange={setAspectRatio}>
          <SelectTrigger id="aspect-ratio"className="h-7 w-auto gap-1.5 border-border text-xs font-medium rounded-lg px-2.5 bg-transparent hover:bg-muted/60">
            <RatioIcon className="h-3.5 w-3.5 text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3:2">3:2</SelectItem>
            <SelectItem value="1:1">1:1</SelectItem>
            <SelectItem value="2:3">2:3</SelectItem>
            <SelectItem value="16:9">16:9</SelectItem>
            <SelectItem value="4:3">4:3</SelectItem>
          </SelectContent>
        </Select>

        {/* Image count */}
        <Select defaultValue="1">
          <SelectTrigger  id="image-count"  className="h-7 w-auto gap-1.5 border-border text-xs font-medium rounded-lg px-2.5 bg-transparent hover:bg-muted/60">
            <Layers2 className="h-3.5 w-3.5 text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
          </SelectContent>
        </Select>

        {/* Model selector */}
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger id="model-selector" className="h-7 w-auto gap-1.5 border-border text-xs font-medium rounded-lg px-2.5 bg-transparent hover:bg-muted/60">
            <Sparkles className="h-3 w-3 text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nano-banana-2-lite">Nano Banana 2 Lite</SelectItem>
            <SelectItem value="nano-banana-2">Nano Banana 2</SelectItem>
            <SelectItem value="gpt-image">GPT Image</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
}
