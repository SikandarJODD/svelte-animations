<script>
  import { page } from "$app/stores";
  import { allExamples } from "$lib/components/RenderExamples/allexamples";
  import HeadingOne from "$lib/components/dev/ExamplesRoute/tags/HeadingOne.svelte";
  import Para from "$lib/components/dev/ExamplesRoute/tags/Para.svelte";
  import { allLearning } from "$lib/components/learnings/components/page/allLearning";

  $: exampleID = $page.params.learningID;
  $: singlePage = allLearning.filter(
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
