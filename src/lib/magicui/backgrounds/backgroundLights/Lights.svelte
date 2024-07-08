<script lang="ts">
  import { cn } from "$lib/utils";

  let className: any = "";
  
  export { className as class };
</script>

<div class={cn("w-full h-full overflow-hidden", className)}>
  <div
    style="background:conic-gradient(from 180deg at 50% 50%,var(--blue-500) 0deg,var(--cyan-400) 180deg,var(--yellow-400) 1turn); filter:blur(75px); opacity:20%;"
    class="w-full h-full relative bottom-[-200px] "
  />
</div>
