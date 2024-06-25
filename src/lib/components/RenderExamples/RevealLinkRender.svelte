<script>
  import HeadingOne from "../dev/ExamplesRoute/tags/HeadingOne.svelte";
  import Para from "../dev/ExamplesRoute/tags/Para.svelte";
  import RevealLinkExample from "../learnings/components/examples/RevealLinkExample.svelte";
  import Badge from "../ui/badge/badge.svelte";
</script>

<div>
  <HeadingOne>Reveal Link Effect</HeadingOne>
  <Para>Hover the Link to see the effect</Para>
  <Badge variant="outline" class="border-primary mt-1.5">Svelte-Motion</Badge>
</div>
<div class="mt-4 ">
  <RevealLinkExample></RevealLinkExample>
</div>
