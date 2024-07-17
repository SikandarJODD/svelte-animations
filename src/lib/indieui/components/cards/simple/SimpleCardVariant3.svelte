<script>
  import CardBody3 from "./CardBody3.svelte";
  import { cn } from "$lib/utils";
  let card = {
    title: "Everything is Luck",
    desc: "I am a great believer in luck, and I find the harder I work the more I have of it.",
  };
  let className = "p-6";
  export { className as class };
</script>

<CardBody3>
  <div class={cn("text-left", className)}>
    <h3 class="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
      {card.title}
    </h3>
    <p class="text-gray-700 dark:text-gray-300">
      {card.desc}
    </p>
  </div>
</CardBody3>
