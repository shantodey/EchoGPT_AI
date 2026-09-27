import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import logo from '@/app/Asset/logo.png'
import { PanelLeft, Search } from "lucide-react";
export default function Home() {
  return (
    <>
      <aside>
        <Sheet>
          <SheetTrigger>
            <div className="grid ">
              <div>
                <Image src={logo} alt="Logo" className=" h-5 w-5" />
                <h2>
                  EchoGPT</h2>
              </div>
              <div className="flex justify-around">
                <Search />
                <PanelLeft />
              </div>
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>This action cannot be undone.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </aside>
      <main>

      </main>
    </>

  );
}
