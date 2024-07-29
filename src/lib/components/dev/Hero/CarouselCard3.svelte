<script lang="ts">
  import InputGradientBorder from "$lib/luxe/inputs/InputGradientBorder.svelte";
  import InputSpotlightBorder from "$lib/luxe/inputs/InputSpotlightBorder.svelte";
  import * as Card from "$lib/components/ui/card/index";
  import * as Carousel from "$lib/components/ui/carousel/index";
  import type { CarouselAPI } from "$lib/components/ui/carousel/context";
  import InputPulseBorder from "$lib/luxe/inputs/InputPulseBorder.svelte";
  import BadgeAnimatedBorder from "$lib/luxe/badge/BadgeAnimatedBorder.svelte";
  import BadgeBackgroundShine from "$lib/luxe/badge/BadgeBackgroundShine.svelte";
  import BadgeRotateBorder from "$lib/luxe/badge/BadgeRotateBorder.svelte";

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
      title: "Badge Animated Border",
      comp: BadgeAnimatedBorder,
      link: "/luxe/badge-animated-border",
    },
    {
      id: 1,
      title: "Badge Background Shine",
      comp: BadgeBackgroundShine,
      link: "/luxe/badge-background-shine",
    },
    {
      id: 2,
      title: "Badge Rotate Shine",
      comp: BadgeRotateBorder,
      link: "/luxe/badge-rotate-shine",
    },
    {
      id: 3,
      title: "Input Pulse Border",
      comp: InputPulseBorder,
      link: "/luxe/input-pulse-border",
    },
    {
      id: 3,
      title: "Input Spotlight Border",
      comp: InputSpotlightBorder,
      link: "/luxe/input-spotlight-border",
    },
    {
      id: 3,
      title: "Input Gradient Border",
      comp: InputGradientBorder,
      link: "/luxe/input-gradient-border",
    },
  ];
</script>

<Carousel.Root
  opts={{
    loop: true,
  }}
  bind:api={carouselApi}
  class="h-full w-full p-3"
>
  <Carousel.Content class="h-44 md:h-52">
    {#each comps as comp, i (i)}
      <Carousel.Item class="">
        <div class="p-1 h-full">
          <Card.Root class="h-full">
            <Card.Content
              class="relative h-full w-full flex items-center justify-center p-6"
            >
              <a
                href={comp.link}
                class="absolute top-2.5 flex items-center gap-1 hover:underline underline-offset-2 text-zinc-300"
                >{comp.title}
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
              <svelte:component this={comp.comp} />
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
