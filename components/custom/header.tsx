import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconPlayCard,
  IconPlayerPlay,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Play Store",
      icon: (
        <IconPlayerPlay className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://play.google.com/store/apps/details?id=com.clg",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/yogeshvas",
    },
    {
      title: "Feedback",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://forms.gle/kEW7YaXWASrMQYQS6",
    },
  ];
  return (
    <div className="flex items-center justify-center mt-10 w-full">
      <FloatingDock mobileClassName="" items={links} />
    </div>
  );
}
