<script>
  import AuroraText from "$lib/magicui/text-animations/AuroraText/AuroraText.svelte";
</script>

<div class="h-screen w-full flex items-center justify-center ">
  <h1 class="text-4xl font-bold tracking-tighter md:text-5xl lg:text-9xl">
    Ship <AuroraText class='pr-3'>Svelte</AuroraText>
  </h1>
</div>

<!-- <div class="h-[40rem] w-full flex items-center justify-center ">
  <PinContainer
    title="/ui.aceternity.com"
    href="https://twitter.com/mannupaaji"
  >
    <div
      class="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] "
    >
      <h3 class="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
        Aceternity UI
      </h3>
      <div class="text-base !m-0 !p-0 font-normal">
        <span class="text-slate-500 ">
          Customizable Tailwind CSS and Framer Motion Components.
        </span>
      </div>
      <div
        class="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
      />
    </div>
  </PinContainer>
</div> -->

<!-- <script>
  import { Box, Lock, Search, Settings, Sparkles, Wand } from "lucide-svelte";
  import GlowingEffect from "./GlowingEffect.svelte";

  const items = [
    {
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
      icon: Box,
      title: "Do things the right way",
      description: `Running out of copy so I'll write anything.`,
    },
    {
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
      icon: Settings,
      title: "The best AI code editor ever.",
      description: `Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me.`,
    },
    {
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
      icon: Wand,
      title: "Svelte Aceternity UI",
      description: `Cool Animations compoennts for your Svelte projects.`,
    },
    {
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
      icon: Sparkles,
      title: "Sponsor my work",
      description: `Inspired from the best, made for the best.`,
    },
    {
      area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
      icon: Search,
      title: "Svelte 4 only",
      description: `Build using Svelte 4 and Svelte Motion.`,
    },
  ];
</script>

<ul
  class="grid grid-cols-1 mt-32 max-w-6xl mx-auto grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2"
>
  {#each items as item}
    <li class="min-h-[14rem] list-none {item.area}">
      <div
        class="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3"
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div
          class="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6"
        >
          <div class="relative flex flex-1 flex-col justify-between gap-3">
            <div class="w-fit rounded-lg border border-gray-600 p-2">
              <svelte:component
                this={item.icon}
                class="h-4 w-4 text-black dark:text-neutral-400"
              />
            </div>
            <div class="space-y-3">
              <h3
                class="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white"
              >
                {item.title}
              </h3>
              <h2
                class="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400"
              >
                {item.description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  {/each}
</ul> -->
