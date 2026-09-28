"use client";

import { Sidebar } from "@/components/image-studio/sidebar";
import { Topbar } from "@/components/image-studio/topbar";
import { StudioHeader } from "@/components/image-studio/studio-header";
import { PromptComposer } from "@/components/image-studio/prompt-composer";
import { CreationsSection } from "@/components/image-studio/creations-section";
import { MobileNav } from "@/components/image-studio/mobile-nav";
import { VideoStudioView } from "@/components/image-studio/video-studio-view";
import { CompareView } from "@/components/image-studio/compare-view";
import { ChatWelcomeView } from "@/components/image-studio/chat-welcome-view";
import { StudioProvider, useStudio } from "@/components/image-studio/studio-context";

function StudioContent() {
  const { activeTab } = useStudio();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto pb-20 md:pb-8">
          {activeTab === "welcome" && <ChatWelcomeView />}

          {activeTab !== "welcome" && (
            <div className="mx-auto w-full max-w-2xl px-4 md:px-6 py-4">
              {activeTab === "image-studio" && (
                <>
                  <StudioHeader />
                  <PromptComposer />
                  <div className="mt-8">
                    <CreationsSection />
                  </div>
                </>
              )}

              {activeTab === "video-studio" && <VideoStudioView />}
              {activeTab === "compare" && <CompareView />}
            </div>
          )}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  );
}

export default function ImageStudioPage() {
  return (
    <StudioProvider>
      <StudioContent />
    </StudioProvider>
  );
}
