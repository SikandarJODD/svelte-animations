<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable";
  let num = 0;
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";
  const [send, receive] = crossfade({
    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      };
    },
  });
  let nums = [0, 1, 2, 3];
</script>

<div class="flex justify-center items-center h-screen">
  <div class="h-[60%] w-[50%]">
    <Resizable.PaneGroup direction="horizontal" class=" rounded-lg border">
      <Resizable.Pane
        defaultSize={50}
        collapsible={true}
        onResize={(a, b) => {
          console.log(a, b, "c");
          num = a;
        }}
      >
        <div class="flex h-full items-center justify-center p-6">
          {#if num < 50}
            <div class="grid grid-cols-2 gap-2">
              {#each nums as _, i (i)}
                <div
                  in:receive={{ key: i }}
                  out:send={{ key: i }}
                  animate:flip
                  class="h-20 w-20 rounded-lg bg-gray-200"
                ></div>
              {/each}
            </div>
          {/if}
          {#if num >= 50}
            <div class="grid grid-cols-4 gap-2">
              {#each nums as _, i (i)}
                <div
                  in:receive={{ key: i }}
                  out:send={{ key: i }}
                  animate:flip
                  class="h-20 w-20 rounded-lg bg-gray-200"
                ></div>
              {/each}
            </div>
          {/if}
        </div>
      </Resizable.Pane>
      <Resizable.Handle withHandle={true} />
      <Resizable.Pane defaultSize={50}>
        <Resizable.PaneGroup direction="vertical">
          <Resizable.Pane defaultSize={25}>
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Two</span>
            </div>
          </Resizable.Pane>
          <Resizable.Handle withHandle={true} />
          <Resizable.Pane defaultSize={75}>
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Three</span>
            </div>
          </Resizable.Pane>
        </Resizable.PaneGroup>
      </Resizable.Pane>
    </Resizable.PaneGroup>
  </div>
</div>
