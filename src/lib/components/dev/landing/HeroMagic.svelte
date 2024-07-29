<script lang="ts">
  import AnimatedExample from "$lib/magicui/text-animations/AnimatedGradientText/AnimatedExample.svelte";
  import * as Card from "$lib/components/ui/card/index";
  import * as Carousel from "$lib/components/ui/carousel/index";
  import type { CarouselAPI } from "$lib/components/ui/carousel/context";
  import OribtingExample from "$lib/magicui/components/orbitingCircles/OribtingExample.svelte";
  import AnimatedBeamMultipleInput from "$lib/magicui/components/AnimatedBeam/examples/AnimatedBeamMultipleInput.svelte";
  import DockExample1 from "$lib/magicui/components/DockClaude/example/DockExample1.svelte";
  import MarqueExample from "$lib/magicui/components/Marquee/example/MarqueExample.svelte";
  import MeteorsExample from "$lib/magicui/SpecialEffects/Meteors/MeteorsExample.svelte";
  import RippleExample from "$lib/magicui/backgrounds/Ripple/examples/RippleExample.svelte";
  import SkewGridExample from "$lib/magicui/backgrounds/GridPattern/examples/SkewGridExample.svelte";
  import AnimatedShinyTextExample from "$lib/magicui/text-animations/AnimatedShinyText/AnimatedShinyTextExample.svelte";

  let carouselApi: CarouselAPI;
  let activeCarouselItemId = 0;
  function setActiveCarouselItem(index: number) {
    carouselApi.scrollTo(index);
    activeCarouselItemId = index;
  }
  $: {
    if (carouselApi) {
      carouselApi.on("select", (e) => {
        activeCarouselItemId = carouselApi.selectedScrollSnap();
      });
    }
  }
  let comps = [
    {
      id: 0,
      comp: OribtingExample,
      title: "Orbiting Circles",
      link: "/magic/orbiting-circles",
    },
    {
      id: 1,
      comp: AnimatedBeamMultipleInput,
      title: "Animated Beam",
      link: "/magic/animated-beam",
    },
    {
      id: 2,
      comp: DockExample1,
      title: "Dock Menu",
      link: "/magic/dock",
    },
    {
      id: 3,
      comp: MarqueExample,
      title: "Marquee",
      link: "/magic/marquee",
    },
    {
      id: 4,
      comp: MeteorsExample,
      title: "Meteors",
      link: "/magic/meteors",
    },
    {
      id: 5,
      comp: RippleExample,
      title: "Ripple",
      link: "/magic/ripple",
    },
    {
      id: 6,
      comp: SkewGridExample,
      title: "Grid Pattern",
      link: "/magic/grid-pattern",
    },
    {
      id: 7,
      comp: AnimatedShinyTextExample,
      title: "Animated Shiny Text",
      link: "/magic/animated-shiny-text",
    },
    {
      id: 8,
      comp: AnimatedExample,
      title: "Animated Gradient Text",
      link: "/magic/animated-gradient-text",
    },
  ];
</script>

<div
  class="px-2 py-6 md:py-12 flex justify-center items-center flex-col gap-5 bg-black"
>
  <div>
    <h1 class="pl-2 text-center font-bold text-xl md:text-4xl">
      Svelte Magic UI Components
    </h1>
  </div>
  <Carousel.Root
    opts={{
      loop: true,
    }}
    bind:api={carouselApi}
    class="w-full md:max-w-4xl"
  >
    <Carousel.Content>
      {#each comps as item, i (i)}
        <Carousel.Item>
          <div class="">
            <Card.Root class="bg-black overflow-hidden">
              <Card.Content
                class="flex overflow-hidden relative h-[30rem]  md:h-[30rem] w-full items-center justify-center p-6"
              >
                <a
                  href={item.link}
                  class="absolute bottom-0 right-0 border-t z-50 pl-4 border-l rounded-tl-3xl bg-[#070707] p-3 flex items-center gap-1 hover:underline underline-offset-2 text-zinc-400 hover:text-zinc-100 transition-all duration-150 text-sm font-medium"
                  >{item.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-external-link"
                    ><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    /></svg
                  >
                </a>
                <svelte:component this={item.comp} />
              </Card.Content>
            </Card.Root>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <div class="flex space-x-2 w-full items-center p-2 h-fit">
      {#each comps as _, idx}
        <button
          on:click={() => {
            setActiveCarouselItem(idx);
          }}
          class="rounded-full aspect-square w-3.5 {idx === activeCarouselItemId
            ? 'bg-zinc-300'
            : ' border border-white/30'}"
        ></button>
      {/each}
    </div>
  </Carousel.Root>
</div>
