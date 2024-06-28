<script>
  import Box from "$lib/components/dev/tags/Box.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Motion } from "svelte-motion";
  let i = 0;
</script>

<Box cls='flex flex-col gap-10 bg-slate-900'>
  {#key i}
    <Motion
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 2,
      }}
      let:motion><div class="box" use:motion></div></Motion
    >
  {/key}
  <div>
    <Button
      on:click={() => (i += 1)}
      variant="outline"
      class="bg-gray-700/30 border-white/30 text-white"
      size="sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-rotate-ccw"
        ><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path
          d="M3 3v5h5"
        /></svg
      >
    </Button>
  </div>
</Box>
