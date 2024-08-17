<script>
  // Scroll below to see the original Component file
  import ShineBorder from "../ShineBorder.svelte";
</script>

<div class="flex justify-center items-center w-full min-h-52">
  <!-- Add Border colors in array of strings  -->
  <ShineBorder
    class="text-center text-2xl font-bold capitalize"
    color={["#FF057A", "#0883FF"]}
  >
    Svelte is Fun
  </ShineBorder>
</div>
