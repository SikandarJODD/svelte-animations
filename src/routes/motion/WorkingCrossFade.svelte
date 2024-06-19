<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import { crossfade } from "svelte/transition";
    let layout = "layouta";
  
    const [send, receive] = crossfade({
      duration: 500,
    });
  </script>
  
  <div class="h-[20vh] flex justify-center items-center gap-2">
    <Button
      size="sm"
      variant="secondary"
      on:click={() => (layout = "layouta")}
      class="border border-primary">Layout A</Button
    >
    <Button
      size="sm"
      variant="secondary"
      on:click={() => (layout = "layoutb")}
      class="border border-primary">Layout B</Button
    >
  </div>
  <div class="flex justify-center items-center h-[80vh]">
    {#if layout === "layouta"}
      <div class="layouta">
        <div
          class="div1 box"
          in:receive={{ key: "div1" }}
          out:send={{ key: "div1" }}
        ></div>
        <div
          class="div2 box"
          in:receive={{ key: "div2" }}
          out:send={{ key: "div2" }}
        ></div>
        <div
          class="div3 box"
          in:receive={{ key: "div3" }}
          out:send={{ key: "div3" }}
        ></div>
      </div>
    {/if}
    {#if layout === "layoutb"}
      <div class="layoutb">
        <div
          class="div1 box"
          in:receive={{ key: "div1" }}
          out:send={{ key: "div1" }}
        ></div>
        <div
          class="div2 box"
          in:receive={{ key: "div2" }}
          out:send={{ key: "div2" }}
        ></div>
        <div
          class="div3 box"
          in:receive={{ key: "div3" }}
          out:send={{ key: "div3" }}
        ></div>
      </div>
    {/if}
  </div>
  
  <style>
    /* During transition, both layouts are part of the DOM temporarily. By setting position absolute they are basically just drawn on top of each other. */
    .layouta,
    .layoutb {
      position: absolute;
      
    }
    /*     .layouta, .layoutb {
          position: absolute;
      } */
    .layouta {
      display: grid;
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(2, 100px);
      grid-column-gap: 5px;
      grid-row-gap: 5px;
    }
    .layouta > .box {
      background-color: #f49595;
      border-radius: 20px;
    }
  
    .layouta > .div1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .layouta > .div2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .layouta > .div3 {
      grid-area: 2 / 2 / 3 / 3;
    }
    .layoutb {
      display: grid;
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(2, 100px);
      grid-column-gap: 5px;
      grid-row-gap: 5px;
    }
    .layoutb > .box {
      background-color: #f49595;
      border-radius: 20px;
    }
    .layoutb > .div1 {
      grid-area: 1 / 1 / 2 / 3;
    }
    .layoutb > .div2 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .layoutb > .div3 {
      grid-area: 2 / 2 / 3 / 3;
    }
  </style>
  