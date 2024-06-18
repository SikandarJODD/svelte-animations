<script>
  import Box from "../dev/ExamplesRoute/Box.svelte";
  import HeadingOne from "../dev/ExamplesRoute/tags/HeadingOne.svelte";
  import Para from "../dev/ExamplesRoute/tags/Para.svelte";
  import ExampleLinkEffect from "../examples/ExampleLinkEffect.svelte";
  import ExampleLinkMovingEffect from "../examples/ExampleLinkMovingEffect.svelte";
</script>

<div>
  <HeadingOne>Link Effect</HeadingOne>
  <Para
    >Hover over the links to see the image effect, Try Various Aniamtions like Blur, Scale, Fade etc
  </Para>
</div>
<Box>
  <ExampleLinkEffect></ExampleLinkEffect>
</Box>
<div>
  <HeadingOne>Link Hover Effect</HeadingOne>
  <Para>Hover over the links to see image Moving as Per Mouse move</Para>
</div>
<Box>
  <div class="flex">
    hello i would love to try this <ExampleLinkMovingEffect
    ></ExampleLinkMovingEffect> and see weather it works <ExampleLinkMovingEffect
    ></ExampleLinkMovingEffect>
  </div>
</Box>
