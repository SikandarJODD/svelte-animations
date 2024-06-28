<script>
  import { Motion, useMotionValue, useMotionTemplate } from "svelte-motion";
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  let background = useMotionTemplate`
						radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.4), transparent 80%)
					`;
</script>

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
      <h3 class="text-xl font-semibold text-neutral-200">Luxe</h3>
      <p class="text-sm leading-[1.5] text-neutral-400">
        Explore the new website that simplifies the creation of sophisticated
        dark mode components.
      </p>
    </div>
  </div>
</div>
