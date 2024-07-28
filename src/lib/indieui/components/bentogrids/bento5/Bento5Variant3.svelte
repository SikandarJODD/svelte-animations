<script>
  import { cn } from "$lib/utils";

  let cells = [1, 2, 3, 4, 5];
</script>

<div class='w-full'>
  <div class="grid sm:grid-cols-2 md:grid-cols-9 gap-2">
    {#each cells as item, i}
      <div
        class={cn(
          "p-1 rounded-lg h-36",
          i == 0 && "md:col-span-5",
          i == 1 && "md:col-span-4",
          i > 1 && "md:col-span-3"
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
