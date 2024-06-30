<script>
  import { Motion, useMotionTemplate, useMotionValue } from "svelte-motion";
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  let background = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(51, 51, 51, 0.4), transparent 80%)`;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mousemove={(e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }}
  class="group relative max-w-[350px] w-full overflow-hidden rounded-xl bg-neutral-950"
>
  <div
    class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
  />
  <Motion
    style={{
      background,
    }}
    let:motion
  >
    <div
      use:motion
      class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
    ></div>
  </Motion>
  <div
    class="relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5"
  >
    <div class="space-y-2">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="https://i.pinimg.com/564x/c3/5c/30/c35c30d5bb21d2392c3daa0abd8a5440.jpg"
        alt="Product image"
        height={10}
        width={10}
        class="rounded-xl h-52 w-full object-cover opacity-75"
      />
      <div class="flex flex-row items-center justify-between pt-2">
        <h3 class="text-xl font-semibold text-neutral-200">Luxe</h3>
        <p class="text-[13px] text-neutral-300 select-none">$249.00</p>
      </div>
      <p class="text-sm leading-[1.5] text-neutral-400 pb-3">
        Library of dark mode components to illuminate your applications with
        elegance and sophistication.
      </p>
      <button
        class="inline-flex items-center justify-center gap-1 text-sm py-3 px-4 font-semibold bg-white text-black rounded-lg duration-300 hover:bg-white/70 w-full"
      >
        Sponsor Now
      </button>
    </div>
  </div>
</div>
