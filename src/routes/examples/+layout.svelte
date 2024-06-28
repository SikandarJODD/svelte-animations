<script>
  import SideNav from "$lib/components/dev/tags/SideNav.svelte";
  import { animationExamples } from "$lib/examples/AnimationsExamples";
</script>

<SideNav examplesList={animationExamples}>
  <slot></slot>
</SideNav>
