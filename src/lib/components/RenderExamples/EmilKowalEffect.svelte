<script>
  import ExampleEmilKowal from "./../examples/ExampleEmilKowal.svelte";
  import Box from "../dev/ExamplesRoute/Box.svelte";
  import HeadingOne from "../dev/ExamplesRoute/tags/HeadingOne.svelte";
  import Para from "../dev/ExamplesRoute/tags/Para.svelte";
</script>

<div>
  <HeadingOne>Emil Kowal Amazing Effect</HeadingOne>
  <Para>
    This Effects is Inspired from Emil Kowal. I tried to replicate the effect
    using Svelte Spring and Blur.
    <br />
    Ring button is one <span class="text-blue-500/70">only once</span> click
  </Para>
</div>

<Box>
  <ExampleEmilKowal />
</Box>
