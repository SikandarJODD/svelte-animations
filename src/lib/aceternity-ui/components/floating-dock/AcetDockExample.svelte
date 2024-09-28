<script>
  import FloatingDockDesktop from "$lib/aceternity-ui/components/floating-dock/FloatingDockDesktop.svelte";
  import { Home, FolderPen, Mic, Award, Trash2, Share } from "lucide-svelte";
  import FloatingDockMobile from "./FloatingDockMobile.svelte";

  const items = [
    {
      title: "Home",
      icon: Home,
      href: "#",
    },
    {
      title: "Speak",
      icon: Mic,
      href: "#",
    },
    {
      title: "Add Folder",
      icon: FolderPen,
      href: "#",
    },
    {
      title: "Awards",
      icon: Award,
      href: "#",
    },

    {
      title: "Share",
      icon: Share,
      href: "#",
    },
    {
      title: "Delete",
      icon: Trash2,
      href: "#",
    },
  ];
  //   icon class : h-full w-full text-neutral-500 dark:text-neutral-300
</script>

<div class="flex justify-center items-center h-[30rem] relative">
  <FloatingDockDesktop {items} />
  <FloatingDockMobile {items} />
</div>
