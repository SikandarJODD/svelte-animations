<script>
  import { cn } from "$lib/utils";

  let card = {
    title: "Gradient Card",
    desc: "Life is good when you are a developer.",
  };
  let className = "p-8";
  export { className as class };
</script>

<div class={cn("text-left", className)}>
  <h3 class="text-lg mb-1 font-bold text-gray-900 dark:text-gray-100">
    {card.title}
  </h3>
  <p class="text-gray-700 dark:text-gray-300">
    {card.desc}
  </p>
</div>
