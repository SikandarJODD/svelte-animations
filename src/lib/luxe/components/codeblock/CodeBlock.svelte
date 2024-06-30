<script>
  import Code from "./Code.svelte";
  import CopyCode from "./CopyCode.svelte";
  import GradientLine from "./GradientLine.svelte";

  export let code = "";
  export let fileName = "";
</script>

<div class="p-4 relative rounded-xl bg-background border border-border">
  <div class="absolute top-4 right-4 z-10">
    <CopyCode {code} />
  </div>
  <GradientLine />
  {#if fileName.length > 0}
    <div class="absolute left-4 top-4">
      <span class="text-sm dark:text-neutral-400">{fileName}</span>
    </div>
  {/if}
  <div class="relative overflow-x-auto pt-10">
    <Code {code} />
  </div>
</div>
