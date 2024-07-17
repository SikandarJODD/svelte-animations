<script>
  import { cn } from "$lib/utils";

  let cells = [1, 2, 3, 4, 5, 6];
</script>

<div>
  <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
    {#each cells as item, i}
      <div
        class={cn(
          "p-1 rounded-lg h-32",
          i == 2 && "col-span-2",
          i == 3 && "col-span-2"
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
