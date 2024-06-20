<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import { crossfade } from "svelte/transition";
    let layout = "layout-a";
  
    const [send, receive] = crossfade({
      duration: 500,
    });
  </script>
  
  <div class="h-[20vh] flex justify-center items-center gap-2">
    <Button
      size="sm"
      variant="secondary"
      on:click={() => (layout = "layout-a")}
      class="border border-primary">Layout A</Button
    >
    <Button
      size="sm"
      variant="secondary"
      on:click={() => (layout = "layout-b")}
      class="border border-primary">Layout B</Button
    >
  </div>
  <div class="flex justify-center items-center h-[80vh]">
    {#if layout === "layout-a"}
      <div class="layout-a">
        <div class="flex flex-col justify-center items-center gap-3 h-fit w-fit">
          <div
            class="box w-44 h-44 bg-orange-200 rounded-xl"
            in:receive={{ key: "box" }}
            out:send={{ key: "box" }}
          ></div>
          <div class="text-center">
            <h1
              class="text-xl font-bold heading"
              in:receive={{ key: "heading" }}
              out:send={{ key: "heading" }}
            >
              Coding is fun
            </h1>
            <p
              class="para"
              in:receive={{ key: "para" }}
              out:send={{ key: "para" }}
            >
              svelte is fun to work with
            </p>
          </div>
        </div>
      </div>
    {:else if layout === "layout-b"}
      <div class='layout-b'>
        <div class=" flex gap-3 h-fit w-fit">
          <div
            class="box w-44 h-44 bg-orange-200 rounded-xl"
            in:receive={{ key: "box" }}
            out:send={{ key: "box" }}
          ></div>
          <div>
            <h1
              class="text-xl font-bold heading"
              in:receive={{ key: "heading" }}
              out:send={{ key: "heading" }}
            >
              Coding is fun
            </h1>
            <p
              class="para"
              in:receive={{ key: "para" }}
              out:send={{ key: "para" }}
            >
              svelte is fun to work with
            </p>
          </div>
        </div>
      </div>
    {/if}
  </div>
  