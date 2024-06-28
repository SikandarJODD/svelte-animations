<script>
  import CardComment from "./../../lib/luxe/cards/CardComment.svelte";
  import CardBackgroundShine from "./../../lib/luxe/cards/CardBackgroundShine.svelte";
  import CardAnimatedBorder from "$lib/luxe/cards/CardAnimatedBorder.svelte";
  import CardHoverEffect from "$lib/luxe/cards/CardHoverEffect.svelte";
  import CardProduct from "$lib/luxe/cards/CardProduct.svelte";
  import CardRevealedPointer from "$lib/luxe/cards/CardRevealedPointer.svelte";
  //   Important Color : #09090b
</script>

<div
  class="flex justify-center items-center min-h-screen dark:bg-[#09090b] gap-5 flex-col"
>
  <CardProduct />
  <CardRevealedPointer />
</div>
