"use client";

import { Home, History, Sparkles } from "lucide-react";
import { useStudio } from "./studio-context";

export function MobileNav() {
  const { activeTab, setActiveTab, loadHistory, showHistory } = useStudio();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-border bg-background/95 backdrop-blur md:hidden">
      <button onClick={() => setActiveTab("image-studio")}className={`flex flex-col items-center gap-1 transition-colors 
        ${activeTab === "image-studio" && !showHistory? "text-foreground font-medium": "text-muted-foreground" }`}>
        <Home className="h-5 w-5" />
        <span className="text-[10px]">Studio</span>
      </button>

      <button onClick={loadHistory} className={`flex flex-col items-center gap-1 transition-colors 
        ${showHistory ? "text-foreground font-medium" : "text-muted-foreground"}`}>
        <History className="h-5 w-5" />
        <span className="text-[10px]">History</span>
      </button>

      <button onClick={() => setActiveTab("video-studio")} className={`flex flex-col items-center gap-1 transition-colors 
        ${activeTab === "video-studio" ? "text-foreground font-medium" : "text-muted-foreground"}`}>
        <Sparkles className="h-5 w-5" />
        <span className="text-[10px]">Video</span>
      </button>
    </nav>
  );
}
