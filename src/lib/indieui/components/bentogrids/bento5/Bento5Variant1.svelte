<script>
  import { cn } from "$lib/utils";

  let cells = [1, 2, 3, 4, 5];
</script>

<div>
  <div class="grid md:grid-cols-4 gap-2">
    {#each cells as item, i}
      <div
        class={cn(
          "p-1 rounded-lg h-32",
          i == 0 && "md:col-start-1",
          i == 1 && "md:col-span-2",
          i == 2 && "md:col-start-4",
          i > 2 && "md:col-span-2"
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
