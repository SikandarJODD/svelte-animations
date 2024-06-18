<script>
  import { allExamples } from "$lib/components/RenderExamples/allexamples";
  import { page } from "$app/stores";
  $: exampleID = $page.params.exampleID;
  $: singlePage = allExamples.filter(
    (example) => example.id === Number(exampleID)
  );
</script>

<svelte:component this={singlePage[0].component} />
