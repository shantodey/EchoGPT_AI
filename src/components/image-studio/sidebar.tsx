"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import logoImg from "@/app/Asset/logo.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Plus, Image as ImageIcon, Video, GitCompare, History, Zap, ChevronDown, LogOut, Settings, User, PanelLeftClose, ChevronRight, SquarePen, MoreHorizontal, Share2 } from "lucide-react";
import { useStudio, StudioTab, demoHistorySessions } from "./studio-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export function Sidebar({ isMobile = false }: { isMobile?: boolean }) {
  const {
    activeTab,
    setActiveTab,
    isSidebarOpen,
    toggleSidebar,
    isHistoryOpen,
    toggleHistory,
    selectedSessionId,
    selectSession,
  } = useStudio();

  if (!isMobile && !isSidebarOpen) {
    return null;
  }

  return (
    <aside
      className={`${isMobile
        ? "flex h-full w-full flex-col"
        : "hidden w-64 shrink-0 border-r border-border bg-sidebar md:flex md:flex-col transition-all duration-200"
        }`}
    >
      {/* Header & Logo with Desktop Close Sidebar toggle */}
      <div className="flex h-14 items-center justify-between px-4">
        <Link href="/image-studio" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image src={logoImg} alt="EchoGPT Logo" width={24} height={24} className="rounded-lg object-contain" />
          <span className="text-xl font-semibold tracking-tight">EchoGPT</span>
        </Link>

        {!isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-8 w-8 text-muted-foreground hover:text-foreground" title="Close sidebar">
            <PanelLeftClose className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* New Chat */}
      <div className="px-3 pb-2">
        <Button onClick={() => setActiveTab("image-studio")} className="w-full justify-start gap-2 bg-primary text-primary-foreground hover:bg-primary/80 font-medium">
          <Plus className="h-4 w-4" />
          New Chat
        </Button>
      </div>

      {/* Main Nav */}
      <div className="px-2 py-1 space-y-0.5">
        <Button
          variant="ghost"
          onClick={() => setActiveTab("image-studio")}
          className={`w-full justify-start gap-2.5 h-9 text-sm font-normal rounded-lg transition-colors ${activeTab === "image-studio"
            ? "bg-primary/60 text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-border/50"
            }`}
        >
          <ImageIcon className="h-4 w-4 shrink-0" />
          <span className="flex-1 text-left">Image Studio</span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => setActiveTab("video-studio")}
          className={`w-full justify-start gap-2.5 h-9 text-sm font-normal rounded-lg transition-colors ${activeTab === "video-studio"
            ? "bg-primary/60 text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-border/50"
            }`}
        >
          <Video className="h-4 w-4 shrink-0" />
          <span className="flex-1 text-left">Video Studio</span>
          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
            PRO
          </span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => setActiveTab("compare")}
          className={`w-full justify-start gap-2.5 h-9 text-sm font-normal rounded-lg transition-colors ${activeTab === "compare"
            ? "bg-primary/60 text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-border/50"
            }`}
        >
          <GitCompare className="h-4 w-4 shrink-0" />
          <span className="flex-1 text-left">Compare</span>
        </Button>
      </div>

      {/* History / Recents Section like Chativity / ChatGPT */}
      <div className="flex-1 flex flex-col min-h-0 px-2 pt-2">
        <div className="flex items-center justify-between px-2 py-1 text-xs font-semibold text-muted-foreground">
          <button
            onClick={toggleHistory}
            className="flex items-center gap-1.5 hover:text-foreground transition-colors group cursor-pointer"
          >
            <History className="h-3.5 w-3.5" />
            <span>Recents</span>
            {isHistoryOpen ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab("image-studio")}
              title="New Creation"
              className="p-1 hover:text-foreground rounded"
            >
              <SquarePen className="h-3.5 w-3.5" />
            </button>
            <button
              title="More options"
              className="p-1 hover:text-foreground rounded"
            >
              <MoreHorizontal className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* History Item List */}
        {isHistoryOpen && (
          <div className="flex-1 overflow-y-auto space-y-0.5 pr-1 mt-1 text-xs">
            {demoHistorySessions.map((session) => {
              const isSelected = selectedSessionId === session.id;
              return (
                <button
                  key={session.id}
                  onClick={() => selectSession(session)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors truncate block ${isSelected
                    ? "bg-muted/80 text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-border/40"
                    }`}
                  title={session.title}
                >
                  {session.title}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="px-3 pt-2">
        <Separator className="mb-3" />
      </div>

      {/* Upgrade card */}
      <div className="mx-3 mb-3 rounded-xl border border-border bg-background/60 p-3">
        <div className="flex items-start gap-2">
          <Zap className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium leading-tight">Upgrade to Pro</p>
            <p className="text-xs text-muted-foreground leading-snug mt-0.5">  More models, faster generation.  </p>
          </div>
          <Button variant="ghost" size="icon" className="h-5 w-5 shrink-0 text-muted-foreground">
            <ChevronDown className="h-3 w-3 -rotate-90" />
          </Button>
        </div>
      </div>

      {/* User menu */}
      <div className="px-3 pb-3">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" className="w-full justify-start gap-2 h-9 text-sm font-normal">
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/126257294?v=4" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-semibold shrink-0"></div>
                <span className="flex-1 text-left truncate">Shanto Dey</span>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem> <Share2 className="h-4 w-4 mr-2" /> Share </DropdownMenuItem>
            <DropdownMenuItem><User className="h-4 w-4 mr-2" /> Profile </DropdownMenuItem>
            <DropdownMenuItem> <Settings className="h-4 w-4 mr-2" /> Settings </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive"> <LogOut className="h-4 w-4 mr-2" />  Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
