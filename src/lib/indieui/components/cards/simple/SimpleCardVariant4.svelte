<script>
  import { cn } from "$lib/utils";

  let card = {
    title: "Hello Developers",
    desc: "Life is good when you are a developer.",
  };
  let className = "p-8 dark:bg-zinc-900/30";
  export { className as class };
</script>

<div>
  <div
    class="border-[0.5px] border-zinc-400 dark:border-white/70 relative shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)]"
  >
    <div class={cn("text-left", className)}>
      <h3 class="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
        {card.title}
      </h3>
      <p class="text-gray-700 dark:text-gray-300">
        {card.desc}
      </p>
    </div>
  </div>
</div>
