<script>
  import { cn } from "$lib/utils";
  import CardBody5 from "./CardBody5.svelte";
</script>

<div>
  <!--  inner card  -->
  <div
    class="border-[0.5px] border-zinc-300 rounded-sm p-2 dark:border-zinc-800"
  >
    <div
      class={cn(
        "border rounded-sm ",
        // light mode
        " from-white bg-gradient-to-br to-zinc-200/60 border-zinc-300 shadow-[2px_0_8px_rgba(0,_0,_0,_0.15)]",
        // dark mode
        "dark:from-zinc-950 dark:to-zinc-900/60 bg-gradient-to-br  dark:border-zinc-900/50 dark:shadow-inner"
      )}
    >
      <!-- Can Paste Any code here -->
      <CardBody5 />
    </div>
  </div>
</div>
