<script>
  // Button from shadn-svelte
  import Button from "$lib/components/ui/button/button.svelte";
  import CoolMode from "../CoolMode.svelte";
</script>

<div class="relative justify-center">
  <CoolMode
    options={{
      particle:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/747px-Svelte_Logo.svg.png",

    }}
  >
    <Button variant='secondary'>Svelte is Love</Button>
  </CoolMode>
</div>
