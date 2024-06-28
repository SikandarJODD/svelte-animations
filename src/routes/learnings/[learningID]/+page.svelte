<script>
  import { page } from "$app/stores";
  import HeadingOne from "$lib/components/dev/tags/HeadingOne.svelte";
  import Para from "$lib/components/dev/tags/Para.svelte";
  import { motionLearnings } from "$lib/framer-motion/MotionsLearnings";

  $: exampleID = $page.params.learningID;
  $: singlePage = motionLearnings.filter(
    (example) => example.id === Number(exampleID)
  )[0];
</script>

<svelte:head>
  <title>
    Svelte  | {singlePage.name}
  </title>
  <meta name="description" content={singlePage.desc} />
  <meta
    property="og:title"
    content="Svelte Framer Motion | {singlePage.name}"
  />
  <meta property="og:description" content={singlePage.desc} />
  <meta property="og:image" content={singlePage.image} />
  <meta property="og:site_name" content="Svelte Animations Examples" />
  <meta property="og:url" content="https://animation-svelte.vercel.app" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Svelte Framer Motion | {singlePage.name}"
  />
  <meta name="twitter:description" content={singlePage.desc} />
  <meta name="twitter:image" content={singlePage.image} />
  <meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>
<div>
  <HeadingOne>
    {singlePage.name}
  </HeadingOne>
  <Para>
    {singlePage.desc}
  </Para>
  <div>
    {#if singlePage}
      <svelte:component this={singlePage.component} />
    {/if}
  </div>
</div>
