<script lang="ts">
    import { cn } from "$lib/utils";
  
    export let img: string;
    export let name: string;
    export let username: string;
    export let body: string;
  </script>
  
  <figure
    class={cn(
      "relative w-64 cursor-pointer overflow-hidden rounded-2xl border p-4",
      // light styles
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      // dark styles
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
  >
    <div class="flex flex-row items-center gap-2">
      <img class="rounded-full" width="32" height="32" alt="" src={img} />
      <div class="flex flex-col">
        <!-- svelte-ignore a11y-structure -->
        <figcaption class="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
        <p class="text-xs font-medium dark:text-white/40">{username}</p>
      </div>
    </div>
    <blockquote class="mt-2 text-sm">{body}</blockquote>
  </figure>
  