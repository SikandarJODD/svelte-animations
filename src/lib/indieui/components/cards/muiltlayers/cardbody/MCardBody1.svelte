<script>
  import { cn } from "$lib/utils";

  let card = {
    title: "Coding is Fun",
    desc: '"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie',
  };
  let className = "";
  export { className as class };
</script>

<div class={cn(className)}>
  <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
    {card.title}
  </h3>
  <p class="text-gray-700 dark:text-gray-400">{card.desc}</p>
</div>
