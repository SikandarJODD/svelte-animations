<script>
  import { cn } from "$lib/utils";

  let cells = [1, 2, 3, 4];
</script>

<div class="w-full">
  <div class="grid md:grid-cols-6 gap-2">
    {#each cells as item, i}
      <div
        class={cn(
          "p-1 rounded-lg h-32",
          i == 0 && "md:col-span-4 md:row-span-4 md:h-full",
          i == 1 && "md:col-span-2",
          i == 2 && "md:col-span-2 md:row-span-3",
          i == 3 && "md:col-span-6"
        )}
      >
        <div
          class="size-full rounded-lg flex justify-center items-center bg-zinc-200 dark:bg-zinc-900 text-xl"
        >
          <!-- {item} -->
        </div>
      </div>
    {/each}
  </div>
</div>
