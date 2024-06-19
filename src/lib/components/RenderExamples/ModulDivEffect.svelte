<script>
  import Box from "../dev/ExamplesRoute/Box.svelte";
  import HeadingOne from "../dev/ExamplesRoute/tags/HeadingOne.svelte";
  import Para from "../dev/ExamplesRoute/tags/Para.svelte";
  import ExampleCrossfade from "../examples/ExampleCrossfade.svelte";
</script>

<div>
  <HeadingOne>Div Modul Effect</HeadingOne>
  <Para>This effect is based on <span>crossfade</span> in Svelte</Para>
  <p>
    Inspired from
    <a
      href="https://www.modul.so"
      class="text-primary underline underline-offset-2"
      target="_blank">Modul.so</a
    >
  </p>
</div>
<Box minHeight={500}>
  <ExampleCrossfade />
</Box>
