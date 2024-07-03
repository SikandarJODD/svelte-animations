<script>
  import { Motion, useMotionValue, useTransform } from "svelte-motion";
  let x = useMotionValue(0);
  let background = useTransform(
    x,
    [-120, 0, 120],
    ["#a0d", "rgba(0,0,0,0)", "#0bf"]
  );
</script>

<!-- Color Interpolation -->
<Motion
  style={{
    background,
  }}
  let:motion
>
  <div
    class="w-[400px] h-[250px] border border-dashed flex justify-center items-center rounded-3xl"
    use:motion
  >
    <Motion
      style={{
        x: x,
      }}
      drag="x"
      dragConstraints={{ right: 0, left: 0 }}
      whileTap={{ cursor: "grabbing" }}
      let:motion
    >
      <div class="w-32 h-32 text-black rounded-full bg-white cursor-grab flex justify-center items-center select-none" use:motion>
        Drag me
      </div>
    </Motion>
  </div>
</Motion>
