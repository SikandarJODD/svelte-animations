<script lang="ts">
  import { spring } from "svelte/motion";
  import { fade } from "svelte/transition";
  import * as Avatar from "$lib/components/ui/avatar";

  let width = spring(120);
  let height = spring(30);
  let rounded = spring(50);
  let isChanged = false;

  let animationElement = (node: HTMLElement) => {
    let changeSize = () => {
      width.set(230);
      height.set(145);
      rounded.set(20);
      isChanged = true;
    };
    let originalSize = () => {
      width.set(120);
      height.set(30);
      rounded.set(50);
      isChanged = false;
    };

    node.addEventListener("mouseenter", changeSize);
    node.addEventListener("mouseleave", originalSize);
    return {
      destroy() {
        node.removeEventListener("mouseenter", changeSize);
        node.removeEventListener("mouseleave", originalSize);
      },
    };
  };
  let avatars = [
    {
      src: "https://i.pinimg.com/564x/ea/8b/06/ea8b06307f2f6f0a6f6041d3f492d013.jpg",
      alt: "bhide",
      fallback: "SM",
      name: "Saloni",
    },
    {
      src: "https://i.pinimg.com/564x/40/98/2a/40982a8167f0a53dedce3731178f2ef5.jpg",
      alt: "aditya",
      fallback: "AK",
      name: "Aditya",
    },
  ];
</script>

<div class="flex justify-center items-center ">
  <div
    id="animationElement"
    use:animationElement
    class="border border-primary flex rounded-lg flex-col items-center"
    style="width: {$width}px; height:{$height}px; border-radius: {$rounded}px;"
  >
    {#if isChanged}
      <div class="relative w-full p-2.5">
        <div in:fade={{ duration: 600 }}>
          {#each avatars as { src, alt, fallback, name }}
            <div
              class="m-1 p-1 hover:bg-gray-200/80 rounded-full border border-primary flex gap-3 items-center justify-between"
            >
              <Avatar.Root>
                <Avatar.Image {src} {alt} />
                <Avatar.Fallback>{fallback}</Avatar.Fallback>
              </Avatar.Root>
              <h4 class="text-lg font-mono mr-4">{name}</h4>
            </div>
          {/each}
        </div>
      </div>
    {:else}
      <div
        in:fade={{
          duration: 500,
          delay: 200,
        }}
        class="h-full flex justify-center items-center"
      >
        Friends
      </div>
    {/if}
  </div>
</div>
