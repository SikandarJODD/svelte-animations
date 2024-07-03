<script>
  import { Motion, M } from "svelte-motion";
</script>

<svg
  width={200}
  height={200}
  class="bg-white rounded-3xl"
  stroke="#70f"
  stroke-width={20}
  stroke-linecap="round"
  fill="transparent"
>
  <M.path />
  <Motion
    isSVG={true}
    animate={{
      d: [
        "M 40,40 Q 160,40 160,160",
        "M 160,40 Q 100,100 40,160",
        "M 160,160 Q 100,160 40,160",
        "M 160,40 Q 100,160 40,40",
        "M 160,40 Q 100,40 40,40",
        "M 40,40 Q 160,40 160,160",
      ],
    }}
    transition={{
      repeat: Infinity,
      ease: "easeInOut",
      duration: 6,
      times: [0, 0.16, 0.33, 0.5, 0.66, 0.83],
    }}
    let:motion
  >
    <path d="M 40,40 Q 160,40 160,160" use:motion />
  </Motion>
</svg>
