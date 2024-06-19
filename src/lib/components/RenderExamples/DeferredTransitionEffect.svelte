<script>
  import Box from "../dev/ExamplesRoute/Box.svelte";
  import HeadingOne from "../dev/ExamplesRoute/tags/HeadingOne.svelte";
  import Para from "../dev/ExamplesRoute/tags/Para.svelte";
  import ExampleDeferredTransition from "../examples/ExampleDeferredTransition.svelte";
</script>

<div>
  <HeadingOne>Deferred transitions</HeadingOne>
  <Para>
    simple example of deferred transitions. When you click on the button, it
    will show the content with a transition effect.
  </Para>
</div>

<Box>
    <ExampleDeferredTransition />
</Box>
