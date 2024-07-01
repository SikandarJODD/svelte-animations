<script>
  import MainSidebar from "$lib/components/dev/tags/MainSidebar.svelte";
  import SideNav from "$lib/components/dev/tags/SideNav.svelte";
  import { animationExamples } from "$lib/examples/AnimationsExamples";
</script>

<MainSidebar>
  <slot></slot>
</MainSidebar>

<!-- <SideNav examplesList={animationExamples}>
  <slot></slot>
</SideNav> -->
