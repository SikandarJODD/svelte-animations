<script>
  import { Motion, AnimatePresence } from "svelte-motion";
  import Card from "./Card.svelte";
  let index = 0;
  $: mint = index + 1;
</script>

<Motion let:motion>
  <div
    use:motion
    class="w-64 h-64 relative bg-gray-700/40 rounded-lg flex justify-center items-center"
  >
    <AnimatePresence initial={false} let:item list={[{ key: index }]}>
      <Card bind:index={mint} frontCard={false} />
      <Card bind:index drag="x" frontCard={true} />
    </AnimatePresence>
  </div>
</Motion>
