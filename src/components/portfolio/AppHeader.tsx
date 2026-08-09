import { ToggleSidebar } from "@/components/client/portfolio/ToggleSidebar";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { MobileNav } from "@/components/client/MobileNav";

export const AppHeader = () => {
  return (
    <header className="relative w-full bg-brand-primary-deep-dark top-0 flex justify-between items-center text-[12px] z-55">
      <div></div>
      <div className="hidden md:flex border p-1 my-1 border-brand-border rounded-2xl gap-1 min-w-sm justify-center">
        <Icon icon={"iconamoon:search"} className="text-[16px]" />
        <span>amanpathak.devwork</span>
      </div>

      <div className="px-4 my-1 flex items-center gap-2">
        <ToggleSidebar />
      </div>
    </header>
  );
};
