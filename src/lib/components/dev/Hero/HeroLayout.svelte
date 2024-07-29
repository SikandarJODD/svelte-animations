<script>
  // Inspired from Bento 4 : Variant 4 - https://animation-svelte.vercel.app/in/bento-4
  import * as Resizable from "$lib/components/ui/resizable/index";
  import CarouselCard2 from "./CarouselCard2.svelte";
  import CarouselCard3 from "./CarouselCard3.svelte";
  import CraouselCard1 from "./CraouselCard1.svelte";
  let innerWidth = 0;
  $: showPaneOne = innerWidth > 768 ? true : false;
</script>

<svelte:window bind:innerWidth />

<div
  class="w-full h-[92vh] px-2 py-4 md:py-14 flex justify-center items-center bg-black"
>
  <Resizable.PaneGroup
    direction="horizontal"
    class="max-w-5xl rounded-lg border"
  >
    {#if showPaneOne}
      <Resizable.Pane defaultSize={50} class="h-full">
        <CraouselCard1 />
      </Resizable.Pane>
      <Resizable.Handle withHandle={true} />
    {/if}
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
