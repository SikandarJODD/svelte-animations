<script>
  import { cn } from "$lib/utils";

  let className = "";
  export { className as class };
  let card = {
    title: "The Godfather",
    desc: "A man who doesn’t spend time with his family can never be a real man.",
  };
</script>

<div class={cn("px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-left", className)}>
  <h3 class="text-lg font-bold tracking-tighter mt-3 mb-1">
    {card.title}
  </h3>
  <p class="text-sm leading-5">{card.desc}</p>
</div>
