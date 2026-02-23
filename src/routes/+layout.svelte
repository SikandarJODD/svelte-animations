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
  import { Button } from "$lib/components/ui/button";
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
  class="sticky top-0 z-[120] border-b border-emerald-400/40 bg-gradient-to-r from-emerald-600/25 via-emerald-500/20 to-emerald-600/25 px-3 py-2 backdrop-blur-md dark:border-emerald-400/20 dark:from-emerald-500/20 dark:via-emerald-400/15 dark:to-emerald-500/20"
>
  <div
    class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-xs sm:text-sm"
  >
    <HoverCard.Root openDelay={120} closeDelay={150}>
      <HoverCard.Trigger
        class="cursor-help font-semibold text-emerald-900 underline underline-offset-4 dark:text-emerald-200"
      >
        New Svelte 5 Animations
      </HoverCard.Trigger>
      <HoverCard.Content align="center" class="w-[20rem] z-[500] text-left">
        <div class="space-y-3 text-xs sm:text-sm">
          <p class="font-semibold text-zinc-900 dark:text-zinc-100">
            New Svelte 5 Feature Highlights
          </p>
          <ol
            class="list-decimal space-y-2 pl-5 text-zinc-700 dark:text-zinc-300"
          >
            <li>Install components instantly with the Shadcn Svelte CLI.</li>
            <li>Includes built-in support for both light and dark themes.</li>
            <li>
              Includes new components such as
              <a
                class="text-zinc-700 underline underline-offset-2 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                href="https://sv-animations.vercel.app/magic/docs/components/dither-shader"
                target="_blank"
                rel="noreferrer"
              >
                Dither Shader
              </a>
              <a
                class="text-zinc-700 underline underline-offset-2 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                href="https://sv-animations.vercel.app/magic/docs/components/pixel-image"
                target="_blank"
                rel="noreferrer"
              >
                Pixel Image
              </a>
              <a
                class="text-zinc-700 underline underline-offset-2 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                href="https://sv-animations.vercel.app/magic/docs/components/text-animate"
                target="_blank"
                rel="noreferrer"
              >
                Text Animate
              </a>
            </li>
            <li>Provides first-class, fully typed TypeScript support.</li>
            <li>
              Built for Svelte 5 on top of <span
                class="font-mono bg-muted rounded-xs px-1">motion-sv</span
              >.
            </li>
          </ol>
          <div class="flex items-center gap-2 pt-1">
            <Button
              href="https://sv-animations.vercel.app"
              target="_blank"
              rel="noreferrer"
              size="sm"
              variant="success"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-1.5 size-4 inline-block"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                />
              </svg>
              Preview
            </Button>
            <Button
              href="https://github.com/SikandarJODD/animations"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              size="sm"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="none"
                class="size-4 mr-1.5 inline-block"
                ><path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="#ffff"
                /></svg
              >
              GitHub
            </Button>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
    <span class="text-emerald-900/90 dark:text-neutral-100"
      >Includes Dither Shader, Pixel Image, Line Shadow Text, and Text Animate.</span
    >
    <a
      class="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-900 dark:text-emerald-200 dark:hover:text-emerald-100"
      href="https://sv-animations.vercel.app"
      target="_blank"
      rel="noreferrer"
    >
      Preview
    </a>
    <a
      class="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-900 dark:text-emerald-200 dark:hover:text-emerald-100"
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
