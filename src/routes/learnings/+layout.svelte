<script>
	import { motionLearnings } from '$lib/framer-motion/MotionsLearnings';
  import { page } from "$app/stores";
  import Navbar from "$lib/components/dev/Navbar/Navbar.svelte";
  import SideNav from "$lib/components/dev/tags/SideNav.svelte";
  $: routeID = $page.url.pathname.split("/");
  $: console.log(routeID);
  let pageWidth = 0;
</script>
<!-- <svelte:window bind:innerWidth={pageWidth} /> -->
<!-- {#if pageWidth > 1023 && routeID[1] === "learnings"}
  <Navbar />
{:else if routeID[1] === ""}
  <Navbar />
{/if} -->

<SideNav examplesList={motionLearnings}>
  <slot></slot>
</SideNav>
