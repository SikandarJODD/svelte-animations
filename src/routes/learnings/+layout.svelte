<script>
  import SideNav from "$lib/components/dev/ExamplesRoute/SideNav.svelte";
  import { allLearning } from "$lib/components/learnings/components/page/allLearning";
  import { page } from "$app/stores";
  import Navbar from "$lib/components/dev/Navbar/Navbar.svelte";
  $: routeID = $page.url.pathname.split("/");
  $: console.log(routeID);
  let pageWidth = 0;
</script>
<svelte:window bind:innerWidth={pageWidth} />
{#if pageWidth > 1023 && routeID[1] === "learnings"}
  <Navbar />
{:else if routeID[1] === ""}
  <Navbar />
{/if}

<SideNav examplesList={allLearning}>
  <slot></slot>
</SideNav>
