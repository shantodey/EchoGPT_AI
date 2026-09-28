"use client";

import React, { createContext, useContext, useState } from "react";

export type StudioTab = "image-studio" | "video-studio" | "compare";

export interface HistorySession {
  id: string;
  title: string;
  timestamp: string;
  prompt: string;
  model: string;
  aspectRatio: string;
  imageUrl: string;
}

export const demoHistorySessions: HistorySession[] = [
  {
    id: "1",
    title: "JavaScript Interview Answers",
    timestamp: "10 mins ago",
    prompt: "A futuristic cyberpunk programmer desk with JavaScript code hologram",
    model: "Nano Banana 2 Lite",
    aspectRatio: "16:9",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "UI Redesign Request",
    timestamp: "45 mins ago",
    prompt: "Modern sleek AI studio interface mockup, dark aesthetic, clean glassmorphism",
    model: "Nano Banana 2",
    aspectRatio: "3:2",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Accordion dotted border fix",
    timestamp: "2 hours ago",
    prompt: "Clean minimal geometric graphic with dotted lines and glowing nodes",
    model: "GPT Image",
    aspectRatio: "1:1",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "বাংলা পিডিএফ ঠিক করা",
    timestamp: "Yesterday",
    prompt: "Vintage calligraphy manuscript in Bengali script with gold foil lettering",
    model: "Nano Banana 2 Lite",
    aspectRatio: "4:3",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "Psycho Pass Episode Location",
    timestamp: "Yesterday",
    prompt: "Cyberpunk dystopian anime city rooftop surveillance tower in heavy rain",
    model: "Nano Banana 2",
    aspectRatio: "16:9",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    title: "ধর্ম গবেষণা প্রতিবেদন",
    timestamp: "2 days ago",
    prompt: "Ancient library archives with towering stone arches and sunbeams through stained glass",
    model: "GPT Image",
    aspectRatio: "3:2",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "7",
    title: "Reconnect GitHub Branch",
    timestamp: "3 days ago",
    prompt: "Digital network tree with glowing branching connections in deep space",
    model: "Nano Banana 2 Lite",
    aspectRatio: "1:1",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "8",
    title: "Outlast Trials Unlock Status",
    timestamp: "4 days ago",
    prompt: "Atmospheric abandoned asylum corridor with flickering emergency green lamps",
    model: "Nano Banana 2",
    aspectRatio: "16:9",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "9",
    title: "Postman API Testing",
    timestamp: "5 days ago",
    prompt: "Astronaut launching a high tech rocket into orbit from clean futuristic platform",
    model: "Nano Banana 2 Lite",
    aspectRatio: "3:2",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "10",
    title: "Admin Module Tasks",
    timestamp: "1 week ago",
    prompt: "Executive modern dashboard visualization on ultra-wide curved display",
    model: "GPT Image",
    aspectRatio: "16:9",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "11",
    title: "EWU BSc CSE খরচ",
    timestamp: "1 week ago",
    prompt: "Modern university campus building with students walking across green quad",
    model: "Nano Banana 2 Lite",
    aspectRatio: "4:3",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "12",
    title: "Internship Form Guidance",
    timestamp: "2 weeks ago",
    prompt: "Clean Scandinavian work desk with leather notebook, coffee and morning light",
    model: "Nano Banana 2 Lite",
    aspectRatio: "3:2",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "13",
    title: "LinkedIn Banner Rewrite",
    timestamp: "2 weeks ago",
    prompt: "Abstract minimalist gradient banner with subtle 3D fluid glass waves",
    model: "Nano Banana 2",
    aspectRatio: "16:9",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "14",
    title: "প্রকল্প নির্বাচন যাচাই",
    timestamp: "3 weeks ago",
    prompt: "Architectural blueprint spread out on pine drafting table with brass compass",
    model: "GPT Image",
    aspectRatio: "4:3",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

interface StudioContextType {
  activeTab: StudioTab;
  setActiveTab: (tab: StudioTab) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  isHistoryOpen: boolean;
  toggleHistory: () => void;
  selectedSessionId: string | null;
  selectSession: (session: HistorySession) => void;
  activeSession: HistorySession | null;
}

const StudioContext = createContext<StudioContextType>({
  activeTab: "image-studio",
  setActiveTab: () => {},
  isSidebarOpen: true,
  setIsSidebarOpen: () => {},
  toggleSidebar: () => {},
  isHistoryOpen: true,
  toggleHistory: () => {},
  selectedSessionId: "2",
  selectSession: () => {},
  activeSession: demoHistorySessions[1],
});

export function StudioProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<StudioTab>("image-studio");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(true);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>("2");
  const [activeSession, setActiveSession] = useState<HistorySession | null>(
    demoHistorySessions[1]
  );

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleHistory = () => setIsHistoryOpen((prev) => !prev);

  const selectSession = (session: HistorySession) => {
    setSelectedSessionId(session.id);
    setActiveSession(session);
    setActiveTab("image-studio");
  };

  return (
    <StudioContext.Provider
      value={{
        activeTab,
        setActiveTab,
        isSidebarOpen,
        setIsSidebarOpen,
        toggleSidebar,
        isHistoryOpen,
        toggleHistory,
        selectedSessionId,
        selectSession,
        activeSession,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
}

export function useStudio() {
  return useContext(StudioContext);
}
