<script>
  import FloatingDockDesktop from "$lib/aceternity-ui/components/floating-dock/FloatingDockDesktop.svelte";
  import {
    Dessert,
    GitBranch,
    Home,
    House,
    LampDesk,
    NotebookPen,
    Twitch,
  } from "lucide-svelte";

  const items = [
    {
      title: "Home",
      icon: Home,
      href: "#",
    },

    {
      title: "Products",
      icon: Dessert,
      href: "#",
    },
    {
      title: "Components",
      icon: LampDesk,
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: House,
      href: "#",
    },
    {
      title: "Changelog",
      icon: NotebookPen,
      href: "#",
    },

    {
      title: "Twitter",
      icon: Twitch,
      href: "#",
    },
    {
      title: "GitHub",
      icon: GitBranch,
      href: "#",
    },
  ];
  //   icon class : h-full w-full text-neutral-500 dark:text-neutral-300
</script>

<div class='flex justify-center items-center h-screen'>
  <FloatingDockDesktop {items} />
</div>
