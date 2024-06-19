<script>
    import { cubicOut } from "svelte/easing";
    import { crossfade } from "svelte/transition";
    import { scale,fade,fly } from "svelte/transition";
    import Button from "$lib/components/ui/button/button.svelte";
    let layout = "layouta";
  
    let [send, receive] = crossfade({
      duration: 500,
    });
  </script>
  
  <div class="flex justify-center items-center h-[80vh]">
    {#if layout === "layouta"}
      <div
        class="w-fit bg-lime-100 p-4 rounded-3xl layouta mainDiv"
        in:receive={{ key: "mainDiv" }}
        out:send={{ key: "mainDiv" }}
      >
        <img
          src="https://i.pinimg.com/736x/24/c9/22/24c9221d572bcb3949dbae40140a4948.jpg"
          alt="Saturn Art"
          class="w-56 h-56 rounded-2xl"
        />
        <div class="mt-2 px-2 flex flex-col">
          <h1
            class="font-bold text-lg heading"
            in:receive={{ key: "heading" }}
            out:send={{ key: "heading" }}
          >
            Saturn Art
          </h1>
          <p
            class="text-xs para"
            in:receive={{ key: "para" }}
            out:send={{ key: "para" }}
          >
            Hello Saturn, welcome to our Website
          </p>
        </div>
      </div>
    {:else if layout === "layoutb"}
      <div
        class="w-fit bg-lime-100 p-4 rounded-3xl layoutb flex gap-4 mainDiv"
        in:receive={{ key: "mainDiv" }}
        out:send={{ key: "mainDiv" }}
      >
        <img
          src="https://i.pinimg.com/736x/24/c9/22/24c9221d572bcb3949dbae40140a4948.jpg"
          alt="Saturn Art"
          class="w-64 h-64 rounded-2xl"
        />
        <div class="mt-2 px-2 flex flex-col">
          <h1
            class="font-bold text-2xl heading"
            in:receive={{ key: "heading" }}
            out:send={{ key: "heading" }}
          >
            Saturn Art
          </h1>
          <p
            class=" text-md w-60 para"
            in:receive={{ key: "para" }}
            out:send={{ key: "para" }}
          >
            Hello Saturn, welcome to our Website
          </p>
        </div>
      </div>
    {/if}
  </div>
  <div class="h-[20vh] flex justify-center items-center gap-3">
    <Button
      size="sm"
      variant="outline"
      on:click={() => {
        layout = "layouta";
      }}>Small</Button
    >
    <Button
      size="sm"
      variant="outline"
      on:click={() => {
        layout = "layoutb";
      }}>Medium</Button
    >
  </div>
  
  <style>
    .layouta,
    .layoutb {
      position: absolute;
    }
  </style>
  