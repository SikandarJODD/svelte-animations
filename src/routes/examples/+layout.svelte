<script>
  import { allExamples } from "$lib/components/RenderExamples/allexamples";
  import SideNav from "$lib/components/dev/ExamplesRoute/SideNav.svelte";
</script>

<SideNav examplesList={allExamples}>
  <slot></slot>
</SideNav>
