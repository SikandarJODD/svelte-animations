<script>
  export let tab, selected;
</script>

<button
  id={`shift-tab-${tab}`}
  on:mouseenter
  on:click
  class={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
    selected === tab ? " bg-neutral-800 text-neutral-100" : "text-neutral-400"
  }`}
>
  <span>
    <slot></slot>
  </span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
    class={`transition-transform ${selected === tab ? "rotate-180" : ""}`}
    ><path d="m6 9 6 6 6-6" /></svg
  >
</button>
