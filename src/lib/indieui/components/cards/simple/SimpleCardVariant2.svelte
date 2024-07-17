<script>
  import { cn } from "$lib/utils";
  import CardContainer2 from "./CardContainer2.svelte";

  let card = {
    title: "Be Happy",
    desc: "Life is a shipwreck, but we must not forget to sing in the lifeboats.",
  };
  let className = "";
  export { className as class };
</script>

<CardContainer2>
  <div class="p-4 w-full flex justify-center items-center">
    <div class={cn("text-left", className)}>
      <h3 class="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
        {card.title}
      </h3>
      <p class="text-gray-700 dark:text-gray-300">
        {card.desc}
      </p>
    </div>
  </div>
</CardContainer2>
