"use client";

import Image from "next/image";
import { useState } from "react";
import logoImg from "@/app/Asset/logo.png";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Lightbulb, Code, PenTool, ArrowRight, MessageSquare, ImageIcon, Paperclip, Mic, ArrowUp, ChevronDown} from "lucide-react";
import {  DropdownMenu,  DropdownMenuContent,DropdownMenuItem,  DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { useStudio } from "./studio-context";

const suggestionCards = [
  {
    icon: FileText,
    title: "Summarize this article",
    description: "Give me a clear and concise summary of the key points.",
    prompt: "Summarize this article with a clear and concise breakdown of the key points.",
  },
  {
    icon: Lightbulb,
    title: "Explain a complex topic",
    description: "Break down this concept in simple terms with examples.",
    prompt: "Explain this complex topic in simple terms with intuitive examples.",
  },
  {
    icon: Code,
    title: "Help me with coding",
    description: "Fix this bug, improve the code, or explain how it works.",
    prompt: "Help me with coding: review this snippet, fix bugs, and optimize performance.",
  },
  {
    icon: PenTool,
    title: "Creative ideas",
    description: "Give me ideas for content, projects, or anything creative.",
    prompt: "Give me 10 innovative and creative ideas for an AI-powered project.",
  },
];

export function ChatWelcomeView() {
  const { setActiveTab } = useStudio();
  const [inputMessage, setInputMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState("GPT-4o Mini");

  return (
    <div className="flex flex-1 flex-col items-center justify-between min-h-[calc(100vh-5rem)] max-w-3xl mx-auto px-4 py-8">
      {/* Top / Center Greeting */}
      <div className="w-full flex flex-col items-center text-center mt-6 md:mt-10">
        <div className="relative mb-3 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-muted/60 border border-border/80 flex items-center justify-center p-2.5 shadow-sm">
            <Image  src={logoImg}  alt="EchoGPT"  width={48}  height={48}  className="object-contain"  priority
            />
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground"> EchoGPT</h1>
        <p className="text-xl md:text-2xl font-medium tracking-tight text-foreground/80 mt-1">  How can I help you today?</p>

        {/* 2x2 Suggestion Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mt-8 md:mt-10">
          {suggestionCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Card  key={i}  onClick={() => setInputMessage(card.prompt)}  className="group relative flex items-start gap-3.5 p-4 rounded-2xl border border-border/80 
              bg-card hover:bg-accent/40 hover:border-border transition-all duration-200 cursor-pointer text-left shadow-none">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted/80 text-foreground/80 group-hover:text-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0 pr-6">
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5 line-clamp-2">
                    {card.description}
                  </p>
                </div>
                <ArrowRight className="absolute right-4 bottom-4 h-4 w-4 text-muted-foreground/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Card>
            );
          })}
        </div>
      </div>

      {/* Bottom Input Area */}
      <div className="w-full flex flex-col items-center mt-10 space-y-2">
        {/* Usage pill indicator */}
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/80 font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
          <span>Free plan</span>
          <span>•</span>
          <span>12/20 messages used</span>
        </div>

        <div className="w-full rounded-2xl border border-border bg-card shadow-sm p-2 transition-all focus-within:ring-1 focus-within:ring-ring">
          <div className="flex items-center justify-between gap-2 px-1 pb-2">
            <div className="flex items-center gap-1.5">
              <button type="button" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-muted text-foreground transition-colors shadow-none">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Chat</span>
              </button>
              <button type="button" onClick={() => setActiveTab("image-studio")}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                <ImageIcon className="h-3.5 w-3.5" />
                <span>Image</span>
              </button>
            </div>

            {/* Model dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 gap-1 px-2.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  >
                    <span>{selectedModel}</span>
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  </Button>
                }
              />
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={() => setSelectedModel("GPT-4o Mini")}>
                  GPT-4o Mini
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedModel("GPT-4o")}>
                  GPT-4o
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedModel("Claude 3.5 Sonnet")}>
                  Claude 3.5 Sonnet
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Prompt text row */}
          <div className="flex items-center gap-2 px-2 pb-1">
            <button  type="button"  className="text-muted-foreground hover:text-foreground p-1 transition-colors rounded-lg"  title="Attach file">
              <Paperclip className="h-4 w-4" />
            </button>

            <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder="Ask anything..."
              className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground/70 outline-none border-none py-1"/>

            <button type="button" className="text-muted-foreground hover:text-foreground p-1 transition-colors rounded-lg" title="Voice input">
              <Mic className="h-4 w-4" />
            </button>

            <Button size="icon" disabled={!inputMessage.trim()} className="h-7 w-7 rounded-full bg-foreground text-background hover:bg-foreground/90 disabled:opacity-30
             disabled:cursor-not-allowed">
              <ArrowUp className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
