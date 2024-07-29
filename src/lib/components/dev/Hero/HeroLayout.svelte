<script lang="ts">
  // Inspired from Bento 4 : Variant 4 - https://animation-svelte.vercel.app/in/bento-4
  import * as Resizable from "$lib/components/ui/resizable/index";
  import CarouselCard2 from "./CarouselCard2.svelte";
  import CarouselCard3 from "./CarouselCard3.svelte";
  import CraouselCard1 from "./CarouselCard1.svelte";

  
</script>


<div
  class="w-full h-[92vh] px-2 py-4 md:py-14 flex flex-col justify-center items-center bg-gradient-to-b from-black to-background"
>
  <div class="flex flex-col gap-3">
    <div>
      <h1 class="text-xl font-bold md:text-3xl">Svelte Luxe Component</h1>
    </div>
    <Resizable.PaneGroup
      direction="horizontal"
      class="max-w-5xl rounded-lg border"
    >
      <Resizable.Pane
        defaultSize={50}
        class="h-full"
      >
        <CraouselCard1 />
      </Resizable.Pane>
      <Resizable.Handle withHandle={true} />
      <Resizable.Pane defaultSize={50} class="h-full">
        <Resizable.PaneGroup direction="vertical">
          <Resizable.Pane defaultSize={60} class="h-full">
            <CarouselCard2 />
          </Resizable.Pane>
          <Resizable.Handle withHandle={true} />
          <Resizable.Pane defaultSize={50} class="h-full">
            <CarouselCard3 />
          </Resizable.Pane>
        </Resizable.PaneGroup>
      </Resizable.Pane>
    </Resizable.PaneGroup>
  </div>
</div>
