<script>
  import { allExamples } from "$lib/components/RenderExamples/allexamples";
  import { page } from "$app/stores";
  $: exampleID = $page.params.exampleID;
  $: singlePage = allExamples.filter(
    (example) => example.id === Number(exampleID)
  );
  $: console.log(exampleID, singlePage, "singlePage");
</script>

<svelte:head>
  <title>{singlePage[0].name}</title>
  <meta name="description" content={singlePage[0].desc} />
  
</svelte:head>
<svelte:component this={singlePage[0].component} />
