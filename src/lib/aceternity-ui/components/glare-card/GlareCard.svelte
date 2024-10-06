<script lang="ts">
  import { cn } from "$lib/utils";
  import svelte from "./svelte.svg"; // change this svg path to your own svg path

  let _class;
  export { _class as class };
  let refElement: HTMLElement;
  let isPointerInside = false;
  let changeX = 0;
  let state = {
    glare: {
      x: 50,
      y: 50,
    },
    background: {
      x: 50,
      y: 50,
    },
    rotate: {
      x: 0,
      y: 0,
    },
  };

  const updateStyles = () => {
    if (refElement) {
      let { background, rotate, glare } = state;
      refElement.style.setProperty("--m-x", `${glare.x}%`);
      refElement.style.setProperty("--m-y", `${glare.y}%`);
      refElement.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.style.setProperty("--r-y", `${rotate.y}deg`);
      refElement.style.setProperty("--bg-x", `${background.x}%`);
      refElement.style.setProperty("--bg-y", `${background.y}%`);
    }
  };

  const handlePointerMove = (event) => {
    const rotateFactor = 0.4;
    const rect = event.currentTarget.getBoundingClientRect();
    const position = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    const percentage = {
      x: (100 / rect.width) * position.x,
      y: (100 / rect.height) * position.y,
    };
    const delta = {
      x: percentage.x - 50,
      y: percentage.y - 50,
    };

    state.background.x = 50 + percentage.x / 4 - 12.5;
    state.background.y = 50 + percentage.y / 3 - 16.67;
    state.rotate.x = -(delta.x / 3.5) * rotateFactor;
    state.rotate.y = (delta.y / 2) * rotateFactor;
    state.glare.x = percentage.x;
    state.glare.y = percentage.y;

    updateStyles();
  };

  const handlePointerEnter = () => {
    isPointerInside = true;
    setTimeout(() => {
      if (isPointerInside) {
        refElement.style.setProperty("--duration", "0s");
      }
    }, 300);
  };

  const handlePointerLeave = () => {
    isPointerInside = false;
    refElement.style.removeProperty("--duration");
    refElement.style.setProperty("--r-x", "0deg");
    refElement.style.setProperty("--r-y", "0deg");
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  style="
  --m-x:50%;
  --m-y:50%;
  --r-x:0deg;
  --r-y:0deg;
  --bg-x:50%;
  --bg-y:50%;
  --duration:300ms;
  --foil-size:100%;
  --opacity:0;
  --radius:48px;
  --easing:ease;
  --transition: var(--duration) var(--easing);
  "
  class="relative isolate [contain:layout_style] [perspective:600px] transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-transform w-[320px] [aspect-ratio:17/21]"
  bind:this={refElement}
  on:mousemove={handlePointerMove}
  on:mouseenter={handlePointerEnter}
  on:mouseleave={handlePointerLeave}
>
  <div
    class=" h-full grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] rounded-[var(--radius)] border border-slate-800 hover:[--opacity:0.6] hover:[--duration:200ms] hover:[--easing:linear] hover:filter-none overflow-hidden"
  >
    <div
      class="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))]"
    >
      <div class={cn("h-full w-full bg-slate-950", _class)}>
        <slot />
      </div>
    </div>
    <div
      class="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_1px_0_round_var(--radius))] opacity-[var(--opacity)] transition-opacity transition-background duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(255,255,255,0)_90%)]"
    ></div>
    <!-- pass :  --foil-svg : url({svelte}) below inside style -->
    <div
      class="w-full h-full grid [grid-area:1/1] mix-blend-color-dodge opacity-[var(--opacity)] will-change-background transition-opacity [clip-path:inset(0_0_1px_0_round_var(--radius))] [background-blend-mode:hue_hue_hue_overlay] [background:var(--pattern),_var(--rainbow),_var(--diagonal),_var(--shade)] relative after:content-[''] after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] after:bg-[inherit] after:mix-blend-exclusion after:[background-size:var(--foil-size),_200%_400%,_800%,_200%] after:[background-position:center,_0%_var(--bg-y),_calc(var(--bg-x)*_-1)_calc(var(--bg-y)*_-1),_var(--bg-x)_var(--bg-y)] after:[background-blend-mode:soft-light,_hue,_hard-light]"
      style="--step: 5%;
      --pattern: var(--foil-svg) center/100% no-repeat;
      --rainbow: repeating-linear-gradient( 0deg,rgb(255,119,115) calc(var(--step) * 1),rgba(255,237,95,1) calc(var(--step) * 2),rgba(168,255,95,1) calc(var(--step) * 3),rgba(131,255,247,1) calc(var(--step) * 4),rgba(120,148,255,1) calc(var(--step) * 5),rgb(216,117,255) calc(var(--step) * 6),rgb(255,119,115) calc(var(--step) * 7) ) 0% var(--bg-y)/200% 700% no-repeat;
      --diagonal: repeating-linear-gradient( 128deg,#0e152e 0%,hsl(180,10%,60%) 3.8%,hsl(180,10%,60%) 4.5%,hsl(180,10%,60%) 5.2%,#0e152e 10%,#0e152e 12% ) var(--bg-x) var(--bg-y)/300% no-repeat;--shade: radial-gradient( farthest-corner circle at var(--m-x) var(--m-y),rgba(255,255,255,0.1) 12%,rgba(255,255,255,0.15) 20%,rgba(255,255,255,0.25) 120% ) var(--bg-x) var(--bg-y)/300% no-repeat; 
      background-blend-mode: hue, hue, hue, overlay;"
    ></div>
  </div>
</div>

<style>
  :global(:root) {
    --foil-svg: url('./svelte.svg');
  }
</style>
