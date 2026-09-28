"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import logoImg from "@/app/Asset/logo.png";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub,
  DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Plus, Image as ImageIcon, Video, GitCompare, History, Zap, ChevronDown, LogOut, Settings, User,
  PanelLeftClose, ChevronRight, SquarePen, MoreHorizontal, Share2, CircleQuestionMark, Code, Newspaper, LifeBuoy, MessageCircle
} from "lucide-react";
import { useStudio, demoHistorySessions } from "./studio-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Sidebar({ isMobile = false }: { isMobile?: boolean }) {
  const {
    activeTab,
    setActiveTab,
    isSidebarOpen,
    toggleSidebar,
    isHistoryOpen,
    toggleHistory,
    selectedSessionId,
    selectSession
  } = useStudio();

  if (!isMobile && !isSidebarOpen) {
    return null;
  }

  return (
    <aside className={`${isMobile ? "flex h-full w-full flex-col bg-[rgb(252,251,250)]" :
      "hidden w-68.5 h-screen shrink-0 border-r border-border bg-sidebar md:flex md:flex-col transition duration-200"}`}>
      {/* Header & Logo */}
      <div className="flex h-14 shrink-0 items-center justify-between px-4">
        <Link href="/image-studio" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image src={logoImg} alt="EchoGPT Logo" width={24} height={24} className="rounded-lg object-contain" />
          <span className="text-xl font-semibold tracking-tight">EchoGPT</span>
        </Link>

        {!isMobile && (
          <Button  variant="ghost"  size="icon"  onClick={toggleSidebar}
            className="h-8 w-8 text-muted-foreground hover:text-foreground"  title="Close sidebar">
            <PanelLeftClose className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Top Action Items & Main Navigation */}
      <div className="px-3 space-y-2 shrink-0">
        <Button onClick={() => setActiveTab("image-studio")}
          className="w-full justify-start gap-2 bg-[#efefef] text-primary-foreground hover:bg-primary/90 font-medium h-9 rounded-lg shadow-sm">
          <Plus className="h-4 w-4" />
          <span>New Chat</span>
        </Button>

        {/* Main Nav */}
        <nav className="space-y-0.5">
          <Button  variant="ghost"  onClick={() => setActiveTab("image-studio")}
            className={`w-full justify-start gap-2.5 h-9 text-sm font-normal rounded-lg transition-colors ${activeTab === "image-studio"
              ? "bg-accent text-accent-foreground font-medium"
              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}>
            <ImageIcon className="h-4 w-4 shrink-0" />
            <span className="flex-1 text-left">Image Studio</span>
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-muted text-muted-foreground">PRO</span>
          </Button>

          <Button  variant="ghost"  onClick={() => setActiveTab("video-studio")}
            className={`w-full justify-start gap-2.5 h-9 text-sm font-normal rounded-lg transition-colors ${activeTab === "video-studio"
              ? "bg-accent text-accent-foreground font-medium"
              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}>
            <Video className="h-4 w-4 shrink-0" />
            <span className="flex-1 text-left">Video Studio</span>
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-muted text-muted-foreground">PRO</span>
          </Button>

          <Button variant="ghost" onClick={() => setActiveTab("compare")}
            className={`w-full justify-start gap-2.5 h-9 text-sm font-normal rounded-lg transition-colors ${activeTab === "compare"
              ? "bg-accent text-accent-foreground font-medium"
              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}>
            <GitCompare className="h-4 w-4 shrink-0" />
            <span className="flex-1 text-left">Compare</span>
          </Button>
        </nav>
      </div>

      {/* History / Recents Section (Takes remaining height and scrolls internally) */}
      <div className="flex-1 flex flex-col min-h-0 px-3 pt-4">
        <div className="flex items-center justify-between px-2 pb-2 text-xs font-semibold text-muted-foreground shrink-0">
          <button onClick={toggleHistory} className="flex items-center gap-1.5 hover:text-foreground transition-colors group cursor-pointer">
            <History className="h-3.5 w-3.5" />
            <span>Recents</span>
            {isHistoryOpen ? ( <ChevronDown className="h-3 w-3" />) : (  <ChevronRight className="h-3 w-3" />)}
          </button>

          <div className="flex items-center gap-1">
            <button  onClick={() => setActiveTab("image-studio")}  title="New Creation"  className="p-1 hover:text-foreground rounded transition-colors">
              <SquarePen className="h-3.5 w-3.5" />
            </button>
            <button  title="More options"  className="p-1 hover:text-foreground rounded transition-colors">
              <MoreHorizontal className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {isHistoryOpen && (
          <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2.5 py-2">
            {demoHistorySessions.map((session) => {
              const isSelected = selectedSessionId === session.id;
              return (
                <button  key={session.id}  onClick={() => selectSession(session)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors truncate block shrink-0 ${isSelected
                    ? "bg-accent text-accent-foreground font-medium"  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"    }`}
                  title={session.title}>
                  {session.title}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="shrink-0 pt-2 pb-3 px-3 mt-auto space-y-3 bg-sidebar border-t border-border/40">
        {/* Upgrade to Pro Card */}
        <div className="group relative rounded-xl border border-border/60 bg-gradient-to-b from-card to-muted/20 p-3 shadow-xs transition-all hover:border-border hover:bg-accent/40 cursor-pointer">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Zap className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold leading-none text-foreground">
                  Upgrade to Pro
                </p>
              </div>
              <p className="text-[11px] text-muted-foreground leading-tight mt-1 truncate">
                More models, faster generation.
              </p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/70 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
          </div>
        </div>

        {/* User Menu */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" className="w-full justify-start gap-2.5 h-10 px-2 text-sm font-normal rounded-lg">
                  <Avatar className="h-7 w-7">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/126257294?v=4" />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <span className="flex-1 text-left truncate font-medium">Shanto Dey</span>
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                </Button>
              }>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem><User className="h-4 w-4 mr-2" /> Profile</DropdownMenuItem>
              <DropdownMenuItem><Share2 className="h-4 w-4 mr-2" /> Share</DropdownMenuItem>
              <DropdownMenuItem><Settings className="h-4 w-4 mr-2" /> Settings</DropdownMenuItem>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger><LifeBuoy className="h-4 w-4 mr-2" /> Help & Support</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem><CircleQuestionMark className="h-4 w-4 mr-2" /> Support</DropdownMenuItem>
                    <DropdownMenuItem><Newspaper className="h-4 w-4 mr-2" /> Newsletter</DropdownMenuItem>
                    <DropdownMenuItem><MessageCircle className="h-4 w-4 mr-2" /> Discord</DropdownMenuItem>
                    <DropdownMenuItem><Code className="h-4 w-4 mr-2" /> API Platform</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut className="h-4 w-4 mr-2" /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </aside>
  );
}