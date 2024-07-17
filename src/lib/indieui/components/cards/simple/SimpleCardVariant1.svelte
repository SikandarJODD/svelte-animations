<script lang="ts">
  import { cn } from "$lib/utils";
  import Container from "./Container.svelte";

  let card = {
    title: "Svelte is Vibe",
    desc: "Svelte is javascript framework that is easy to learn and use. ",
  };
  let className: any = "p-6";
  export { className as class };
</script>

<div>
  <Container>
    <div class="p-3 w-full flex justify-center items-center">
      <div class={cn("text-left", className)}>
        <h3 class="text-lg font-bold mb-1 text-gray-900 dark:text-gray-200">
          {card.title}
        </h3>
        <p class="text-gray-700 dark:text-gray-400">{card.desc}</p>
      </div>
    </div>
  </Container>
</div>
