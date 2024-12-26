<script lang="ts">
  import { cn } from "$lib/utils";
  let _class: string = "";
  export { _class as class };
  export let duration = "2000ms";
  export let rippleColor = "#fff";

  let buttonRipples: Array<{
    x: number;
    y: number;
    size: number;
    key: number;
  }> = [];

  let createRipple = (event: MouseEvent) => {
    const button = event.currentTarget as HTMLButtonElement;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    let newRipple = { x, y, size, key: Date.now() };

    buttonRipples = [...buttonRipples, newRipple];

    // Remove the ripple after 2 seconds
    // This is to prevent memory leaks
    setTimeout(() => {
      buttonRipples = buttonRipples.filter(
        (ripple) => ripple.key !== newRipple.key
      );
    }, parseInt(duration));
  };
</script>

<button
  on:click={createRipple}
  {...$$restProps}
  class={cn(
    "relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 bg-background px-4 py-2 text-center text-primary",
    _class
  )}
>
  <div class="relative z-10">
    <slot>Ripple</slot>
  </div>
  <span class="pointer-events-none absolute inset-0">
    {#each buttonRipples as ripple}
      <span
        class="absolute animate-rippling rounded-full bg-background opacity-30"
        style="
          width: {ripple.size}px;
          height: {ripple.size}px;
          top: {ripple.y}px;
          left: {ripple.x}px;
          background-color: {rippleColor};
          transform : scale(0);
        "
      />
    {/each}
  </span>
</button>
