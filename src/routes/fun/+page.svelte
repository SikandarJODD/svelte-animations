<script lang="ts">
  import { Motion, useAnimation, animate } from "svelte-motion";
  import {
    LayoutGridIcon,
    TrashIcon,
    Building2,
    UserCircleIcon,
    ChevronRightIcon,
    BellIcon,
  } from "lucide-svelte";
  import { cn } from "$lib/utils";

  //  List Items
  let items = [
    { icon: UserCircleIcon, name: "Profile" },
    { icon: LayoutGridIcon, name: "Your applications" },
    { icon: Building2, name: "Teams" },
    { icon: BellIcon, name: "Notifications" },
    {
      icon: TrashIcon,
      name: "Remove account",
      customStyle:
        "!text-red-500 hover:bg-red-500/10 focus-visible:text-red-500 focus-visible:bg-red-500/10 focus-visible:border-red-500/10",
    },
  ];
  let svgControls = useAnimation();
  let isOpen = false;

  //  Ui List
  let list = {
    visible: {
      clipPath: "inset(0% 0% 0% 0% round 12px)",
      transition: {
        type: "spring",
        bounce: 0,
      },
    },
    hidden: {
      clipPath: "inset(10% 50% 90% 50% round 12px)",
      transition: {
        duration: 0.3,
        type: "spring",
        bounce: 0,
      },
    },
  };
  //  Li Items
  let variants = {
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        delay: i * 0.15,
      },
    }),
    hidden: {
      opacity: 0,
      scale: 0.3,
      filter: "blur(20px)",
    },
  };
</script>

<div class="flex justify-center items-center h-screen">
  <nav class={cn("max-w-[200px] w-full mx-auto space-y-2")}>
    <Motion
      whileTap={{
        scale: 0.97,
      }}
      let:motion
    >
      <button
        use:motion
        on:click={() => (isOpen = !isOpen)}
        class="bg-neutral-900 border border-neutral-800 max-w-[300px] w-full flex items-center justify-between p-2.5 rounded-xl outline-none"
      >
        <span class="text-sm font-medium text-neutral-300">Settings</span>
        <div style=" transformOrigin: '50% 55%'">
          <Motion animate={svgControls} let:motion>
            <svg
              use:motion
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-neutral-400 mt-0.5"
              ><path
                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
              /><circle cx="12" cy="12" r="3" /></svg
            >
          </Motion>
        </div>
      </button>
      <Motion
        animate={isOpen ? "visible" : "hidden"}
        variants={list}
        initial="hidden"
        let:motion
      >
        <ul
          use:motion
          class={cn(
            "absolute z-[1] max-w-[200px] w-full space-y-3 p-2.5 bg-neutral-900 border border-neutral-800 rounded-xl",
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          {#each items as item, i}
            <Motion
              custom={i + 1}
              {variants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              let:motion
            >
              <li use:motion>
                <a
                  href="/"
                  class={cn(
                    "group flex items-center gap-2 rounded-md border border-transparent text-neutral-400 hover:text-neutral-300 focus-visible:text-neutral-300 focus-visible:border-neutral-800 focus-visible:outline-none",
                    item?.customStyle
                  )}
                >
                  <svelte:component
                    this={item.icon}
                    size={16}
                    strokeWidth={1.4}
                  />
                  <span class="flex items-center gap-1 text-sm font-medium">
                    {item.name}
                    <ChevronRightIcon
                      size={12}
                      class="-translate-x-1 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all"
                    />
                  </span>
                </a>
              </li>
            </Motion>
          {/each}
        </ul>
      </Motion>
    </Motion>
  </nav>
</div>
