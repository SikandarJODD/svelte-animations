<script>
  import { onMount } from "svelte";
  import { blur, fly, scale } from "svelte/transition";

  export let text = "";

  const colors = [
    "rgb(131, 179, 32)",
    "rgb(47, 195, 106)",
    "rgb(42, 169, 210)",
    "rgb(4, 112, 202)",
    "rgb(107, 10, 255)",
    "rgb(183, 0, 218)",
    "rgb(218, 0, 171)",
    "rgb(230, 64, 92)",
    "rgb(232, 98, 63)",
    "rgb(249, 129, 47)",
  ];

  let currentColors = [...colors];
  let count = 0;

  function shuffleColors() {
    currentColors = [...colors].sort(() => Math.random() - 0.5);
    count++;
  }

  onMount(() => {
    const interval = setInterval(shuffleColors, 5000);
    return () => clearInterval(interval);
  });
</script>

<!-- you can try out transtions : blur, scale ... -->
{#key count}
  <span>
    {#each text.split("") as char, index}
      <span
        in:fly|global={{ x: 10, delay: index * 40 }}
        class="inline-block whitespace-pre font-sans tracking-[-11px]"
        style="color: {currentColors[index % currentColors.length]};"
      >
        {char}
      </span>
    {/each}
  </span>
{/key}
