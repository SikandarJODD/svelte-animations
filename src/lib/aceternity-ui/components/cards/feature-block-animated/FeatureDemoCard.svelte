<script>
  import Card from "./Card.svelte";
  import CardDesc from "./CardDesc.svelte";
  import CardSkeletonContainer from "./CardSkeletonContainer.svelte";
  import CardTitle from "./CardTitle.svelte";
  import FeatureSkeleton from "./FeatureSkeleton.svelte";
</script>

<Card>
  <CardSkeletonContainer>
    <FeatureSkeleton />
  </CardSkeletonContainer>
  <CardTitle>Damn good card</CardTitle>
  <CardDesc>
    A card that showcases a set of tools that you use to create your product.
  </CardDesc>
</Card>
