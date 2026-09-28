"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitCompare, Sparkles } from "lucide-react";
import { Select, SelectContent, SelectItem , SelectTrigger, SelectValue} from "@/components/ui/select";
import { useState } from "react";
import Image from "next/image";

export function CompareView() {
const [modelA, setModelA] = useState<string | null>("nano-banana-2-lite");
  const [modelB, setModelB] = useState<string | null>("gpt-image");

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-2 py-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-foreground mb-1">
          <GitCompare className="h-6 w-6" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground"> Model Comparison </h1>
        <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
          Compare outputs from different generative models side-by-side on the exact same prompt and seed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Model A */}
        <Card className="border border-border p-4 space-y-3 bg-card rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Model A</span>
            <Select value={modelA} onValueChange={setModelA}>
              <SelectTrigger className="h-8 text-xs font-medium w-40 rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nano-banana-2-lite">Nano Banana 2 Lite</SelectItem>
                <SelectItem value="nano-banana-2">Nano Banana 2</SelectItem>
                <SelectItem value="gpt-image">GPT Image</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="aspect-square rounded-xl overflow-hidden bg-muted relative">
            <Image src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" alt="Model A output" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover"/>
            <div className="absolute bottom-2 left-2 z-10 bg-background/90 text-[11px] px-2 py-0.5 rounded backdrop-blur">
              Speed: 1.2s • Step count: 24
            </div>
          </div>
        </Card>

        {/* Model B */}
        <Card className="border border-border p-4 space-y-3 bg-card rounded-2xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Model B</span>
            <Select value={modelB} onValueChange={setModelB}>
              <SelectTrigger className="h-8 text-xs font-medium w-40 rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nano-banana-2-lite">Nano Banana 2 Lite</SelectItem>
                <SelectItem value="nano-banana-2">Nano Banana 2</SelectItem>
                <SelectItem value="gpt-image">GPT Image</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="aspect-square rounded-xl overflow-hidden bg-muted relative">
            <Image  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"  alt="Model B output"  fill  sizes="(max-width: 768px) 100vw, 320px"  className="object-cover"/>
            <div className="absolute bottom-2 left-2 z-10 bg-background/90 text-[11px] px-2 py-0.5 rounded backdrop-blur">
              Speed: 3.8s • Step count: 50
            </div>
          </div>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/80 rounded-xl px-5">
          <Sparkles className="h-4 w-4" /> Run Side-by-Side Test
        </Button>
      </div>
    </div>
  );
}
