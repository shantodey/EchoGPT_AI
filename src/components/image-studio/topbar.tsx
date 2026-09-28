"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { Menu, Sun, Moon, User, PanelLeftOpen } from "lucide-react";
import { useTheme } from "next-themes";
import { useStudio } from "./studio-context";
import logoImg from "@/app/Asset/logo.png";
const emptySubscribe = () => () => {};

export function Topbar() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { isSidebarOpen, toggleSidebar } = useStudio();
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,  
    () => false  
  );

  const isDark = isMounted ? (resolvedTheme || theme) === "dark" : false;
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-background/80 backdrop-blur px-4 md:px-6">
      <div className="flex items-center gap-3 md:hidden">
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            }
          />
          <SheetContent side="left" className="w-60 p-0 bg-sidebar">
            <Sidebar isMobile={true} />
          </SheetContent>
        </Sheet>

        <Link href="/image-studio" className="flex items-center gap-2">
          <Image src={logoImg} alt="EchoGPT Logo" width={24} height={24} className="rounded-lg object-contain"/>
          <span className="text-sm font-semibold">EchoGPT</span>
        </Link>
      </div>
      <div className="hidden md:flex md:items-center">
        {!isSidebarOpen && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-8 w-8 text-muted-foreground hover:text-foreground" title="Open sidebar">
            <PanelLeftOpen className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8 text-muted-foreground hover:text-foreground" title={`Switch to ${isDark ? "light" : "dark"} mode`}>
          {isDark ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="outline" size="sm" className="hidden md:flex h-8 text-sm font-medium">
          Sign In
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 md:hidden">
          <User className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}