<script>
  import { Motion } from "svelte-motion";
</script>

<Motion
  let:motion
  initial={{ backgroundPosition: "200% 0" }}
  animate={{ backgroundPosition: "-200% 0" }}
  transition={{
    repeat: Infinity,
    duration: 2,
    ease: "linear",
  }}
>
  <h1
    use:motion
    class="bg-[linear-gradient(110deg,#404040,35%,#fff,50%,#404040,75%,#404040)] bg-[length:200%_100%] bg-clip-text text-base font-medium text-transparent"
  >
    <slot>Generating Code..</slot>
  </h1>
</Motion>
