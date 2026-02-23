<script>
  import "../app.css";
  import "./global.css";
  import { ModeWatcher } from "mode-watcher";
  import { setMode } from "mode-watcher";
  import * as HoverCard from "$lib/components/ui/hover-card";

  import NewNavbar from "$lib/components/dev/Navbar/NewNavbar.svelte";
  let pageWidth = 0;
  import "./carbon.css";
  import { onMount } from "svelte";
  // import Banner from "$lib/components/dev/Navbar/Banner.svelte";
  // import { page } from "$app/stores";
  onMount(() => {
    setMode("dark");
  });
</script>

<svelte:window bind:innerWidth={pageWidth} />
<ModeWatcher />
<!-- {#if $page.url.pathname === "/"}
  <Banner />
{/if} -->
<div
  class="sticky top-0 z-[120] border-b border-emerald-300/30 bg-emerald-500/15 px-3 py-2 backdrop-blur-md"
>
  <div
    class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-xs sm:text-sm"
  >
    <HoverCard.Root openDelay={120} closeDelay={150}>
      <HoverCard.Trigger
        class="font-semibold text-emerald-300 underline decoration-dotted underline-offset-4 cursor-help"
      >
        New Svelte 5 Animations
      </HoverCard.Trigger>
      <HoverCard.Content class="w-[20rem] z-[500] text-left">
        <div class="space-y-3 text-xs sm:text-sm">
          <div>
            <p class="font-semibold text-emerald-300">
              Install via shadcn-svelte CLI
            </p>
          </div>
          <div>
            <p class="font-semibold text-emerald-300">New Components</p>
            <div class="mt-1 flex flex-wrap gap-x-2 gap-y-1">
              <a
                class="text-emerald-200 underline underline-offset-2 hover:text-emerald-100"
                href="https://sv-animations.vercel.app/magic/docs/components/dither-shader"
                target="_blank"
                rel="noreferrer"
              >
                Dither Shader
              </a>
              <a
                class="text-emerald-200 underline underline-offset-2 hover:text-emerald-100"
                href="https://sv-animations.vercel.app/magic/docs/components/pixel-image"
                target="_blank"
                rel="noreferrer"
              >
                Pixel Image
              </a>
              <a
                class="text-emerald-200 underline underline-offset-2 hover:text-emerald-100"
                href="https://sv-animations.vercel.app/magic/docs/components/text-animate"
                target="_blank"
                rel="noreferrer"
              >
                Text Animate
              </a>
            </div>
          </div>
          <div>
            <p class="font-semibold text-emerald-300">Fully TypeScript</p>
            <p class="text-emerald-100/90">
              Components are typed and ready for Svelte + TypeScript projects.
            </p>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
    <span class="text-emerald-100/90"
      >Includes Dither Shader, Pixel Image, Line Shadow Text, and Text Animate.</span
    >
    <a
      class="font-medium text-emerald-200 underline underline-offset-2 hover:text-emerald-100"
      href="https://sv-animations.vercel.app"
      target="_blank"
      rel="noreferrer"
    >
      Preview
    </a>
    <a
      class="font-medium text-emerald-200 underline underline-offset-2 hover:text-emerald-100"
      href="https://github.com/SikandarJODD/animations"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  </div>
</div>
<NewNavbar />
<div>
  <slot />
</div>
