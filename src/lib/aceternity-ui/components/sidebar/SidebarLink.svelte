<script lang="ts">
  import { vopen } from "./svelteContent";
  import {  slide } from "svelte/transition";

  interface Links {
    label: string;
    href: string;
    icon: any;
  }

  export let link: Links;
</script>

<a
  href={link.href}
  class="flex items-center justify-start gap-2 group/sidebar py-2"
>
  <div>
    <svelte:component this={link.icon} strokeWidth={1.3} />
  </div>
  {#if $vopen}
    <div in:slide={{ axis: "x" }}>
      <span
        class="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </span>
    </div>
  {/if}
</a>
