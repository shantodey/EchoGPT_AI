import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History, Download, Sparkles, Trash2, ArrowUpRight } from "lucide-react";

export interface HistoryItem {
  id: string;
  prompt: string;
  model: string;
  aspectRatio: string;
  createdAt: string;
  imageUrl: string;
}

export const demoHistoryItems: HistoryItem[] = [
  {
    id: "1",
    prompt: "A futuristic cyberpunk metropolis at sunset with neon reflections on wet glass streets, ultra-realistic 8k",
    model: "Nano Banana 2",
    aspectRatio: "16:9",
    createdAt: "10 mins ago",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    prompt: "Serene alpine mountain lake surrounded by pine forest during golden hour with mist rising from waters",
    model: "Nano Banana 2 Lite",
    aspectRatio: "3:2",
    createdAt: "2 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    prompt: "Minimalist modern architecture villa in Scandinavian fjord, dusk lighting, ambient cozy interior glow",
    model: "GPT Image",
    aspectRatio: "4:3",
    createdAt: "Yesterday",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    prompt: "Whimsical cute baby dragon resting on ancient mystical leather book with glowing runes, soft studio lighting",
    model: "Nano Banana 2 Lite",
    aspectRatio: "1:1",
    createdAt: "3 days ago",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
  },
];

export function HistoryView() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-xl font-bold tracking-tight">Generation History</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Review your past AI creations, prompts, and settings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {demoHistoryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden border border-border bg-card group flex flex-col justify-between">
            <div className="relative aspect-[3/2] overflow-hidden bg-muted">
              <Image src={item.imageUrl} alt={item.prompt} fill  sizes="(max-width: 768px) 100vw, 320px"  className="object-cover transition-transform duration-300 group-hover:scale-105"/>
              <div className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur text-[10px] font-semibold px-2 py-0.5 rounded-full border border-border">
                {item.aspectRatio}
              </div>
            </div>

            <div className="p-3.5 space-y-2">
              <p className="text-sm line-clamp-2 font-medium leading-snug text-foreground">
                {item.prompt}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t border-border/50">
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Sparkles className="h-3 w-3" />
                  {item.model}
                </span>
                <span>{item.createdAt}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
