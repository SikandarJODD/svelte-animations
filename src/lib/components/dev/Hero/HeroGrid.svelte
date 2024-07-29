<script>
  import { cn } from "$lib/utils";
  import CarouselCard2 from "./CarouselCard2.svelte";
  import CarouselCard3 from "./CarouselCard3.svelte";
  import CarouselCard1 from "./CarouselCard1.svelte";

  let cells = [
    {
      id: 1,
      comp: CarouselCard1,
    },
    {
      id: 2,
      comp: CarouselCard2,
    },
    {
      id: 3,
      comp: CarouselCard3,
    },
  ];
</script>

<div class="bg-black">
  <div class="w-full px-2 md:max-w-5xl mx-auto py-6 space-y-4">
    <div>
      <h1 class="pl-2 text-center font-bold text-xl md:text-3xl">
        Svelte Luxe Components
      </h1>
    </div>
    <div class="w-full">
      <div class="grid grid-cols-1 md:grid-cols-6 gap-2">
        {#each cells as item, i}
          <div
            class={cn(
              "p-1 rounded-lg h-72 ",
              i == 0 && "md:col-span-3 md:row-span-4 md:h-full",
              i == 1 && "md:col-span-3",
              i == 2 && "md:col-span-3 md:row-span-3"
            )}
          >
            <div
              class="size-full overflow-auto rounded-lg border  text-xl"
            >
              <svelte:component this={item.comp} />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
