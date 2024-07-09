<script lang="ts">
  import { cn } from "$lib/utils";

  let className: any = "";
  export { className as class };

  let card = {
    title: "Svelte is Vibe",
    description: "Svelte is fun and easy to learn.",
  };
</script>

<div class={cn("text-left", className)}>
  <h3
    class="text-lg  font-bold  text-gray-900 dark:text-gray-100"
  >
    {card.title}
  </h3>
  <p class="text-gray-700 dark:text-gray-400">
    {card.description}
  </p>
</div>
