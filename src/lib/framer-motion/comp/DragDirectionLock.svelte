<script>
  import Box from "$lib/components/dev/tags/Box.svelte";
  import { Motion } from "svelte-motion";
</script>

<Box cls="bg-slate-800 flex text-black" minHeight={450}>
  <Motion
    let:motion
    drag={true}
    dragDirectionLock
    dragConstraints={{
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    }}
    dragTransition={{
      bounceStiffness: 600,
      bounceDamping: 20,
    }}
    dragElastic={0.5}
    whileTap={{
      cursor: "grabbing",
    }}
    ><div class="box relative" use:motion>
      <div class="absolute top-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6" /></svg
        >
      </div>
      <div class="absolute bottom-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg
        >
      </div>
      <div class='absolute right-1'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg
        >
      </div>
      <div class='absolute left-1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
      </div> Drag
    </div></Motion
  >
</Box>
