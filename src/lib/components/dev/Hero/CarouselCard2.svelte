<script lang="ts">
  import * as Card from "$lib/components/ui/card/index";
  import * as Carousel from "$lib/components/ui/carousel/index";
  import type { CarouselAPI } from "$lib/components/ui/carousel/context";
  import ButtonAnimatedBorder from "$lib/luxe/buttons/ButtonAnimatedBorder.svelte";
  import ButtonBackgroundShine from "$lib/luxe/buttons/ButtonBackgroundShine.svelte";
  import ButtonRotateBorder from "$lib/luxe/buttons/ButtonRotateBorder.svelte";
  import ButtonSuccess from "$lib/luxe/buttons/ButtonSuccess.svelte";
  import ButtonLoading from "$lib/luxe/buttons/ButtonLoading.svelte";
  import ButtonDestructive from "$lib/luxe/buttons/ButtonDestructive.svelte";

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
      title: "Button Animated Border",
      comp: ButtonAnimatedBorder,
    },
    {
      id: 1,
      title: "Button Background Shine",
      comp: ButtonBackgroundShine,
    },
    {
      id: 2,
      title: "Button Rotate Border",
      comp: ButtonRotateBorder,
    },
    {
      id: 3,
      title: " Button Loading",
      comp: ButtonLoading,
    },
    {
      id: 4,
      title: " Button Destructive",
      comp: ButtonDestructive,
    },
    {
      id: 5,
      title: " Button Success",
      comp: ButtonSuccess,
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
  <Carousel.Content class="h-52 md:h-64">
    {#each comps as comp, i (i)}
      <Carousel.Item class="h-full">
        <div class="p-1 h-full">
          <Card.Root class="h-full">
            <Card.Content
              class="relative h-full w-full flex items-center justify-center p-6"
            >
              <a
                href="/"
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
