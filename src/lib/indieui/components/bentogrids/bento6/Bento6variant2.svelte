<script>
  import { cn } from "$lib/utils";

  let cells = [1, 2, 3, 4, 5,6];
</script>

<div class='w-full'>
  <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
    {#each cells as item, i}
      <div
        class={cn(
          "p-1 rounded-lg min-h-40",
          i === 0 && "row-span-2 h-full",
          i === 2 && "row-span-2 h-full"
        )}
      >
        <div
          class="size-full rounded-lg flex items-center justify-center bg-zinc-200 dark:bg-zinc-900 text-xl"
        >
          <!-- {item} -->
        </div>
      </div>
    {/each}
  </div>
</div>
