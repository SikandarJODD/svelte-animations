<script>
  import BentoGrid from "../../BentoGrid.svelte";
  import BentoGridItem from "../../BentoGridItem.svelte";

  import IconBoxAlignRightFilled  from "$lib/svg/tabler/box-align-right.svg";
  import IconClipboardCopy  from "$lib/svg/tabler/clipboard-copy.svg";
  import IconFileBroken  from "$lib/svg/tabler/file-broken.svg";
  import IconSignature  from "$lib/svg/tabler/signature.svg";
  import IconTableColumn  from "$lib/svg/tabler/table-column.svg";


  import SkeletonOne from "./SkeletonOne.svelte";
  import SkeletonTwo from "./SkeletonTwo.svelte";
  import SkeletonThree from "./SkeletonThree.svelte";
  import SkeletonFour from "./SkeletonFour.svelte";
  import SkeletonFive from "./SkeletonFive.svelte";
  import { cn } from "$lib/utils";

  const items = [
    {
      title: "AI Content Generation",
      description: "Experience the power of AI in generating unique content.",
      header: SkeletonOne,
      className: "md:col-span-1",
      icon: IconClipboardCopy,
    },
    {
      title: "Automated Proofreading",
      description: "Let AI handle the proofreading of your documents.",
      header: SkeletonTwo,
      className: "md:col-span-1",
      icon: IconFileBroken,
    },
    {
      title: "Contextual Suggestions",
      description: "Get AI-powered suggestions based on your writing context.",
      header: SkeletonThree,
      className: "md:col-span-1",
      icon: IconSignature,
    },
    {
      title: "Sentiment Analysis",
      description: "Understand the sentiment of your text with AI analysis.",
      header: SkeletonFour,
      className: "md:col-span-2",
      icon: IconTableColumn,
    },

    {
      title: "Text Summarization",
      description: "Summarize your lengthy documents with AI technology.",
      header: SkeletonFive,
      className: "md:col-span-1",
      icon: IconBoxAlignRightFilled,
    },
  ];
  //   icon class="h-4 w-4 text-neutral-500"
</script>

<BentoGrid class="max-w-4xl mx-auto md:auto-rows-[20rem]">
  {#each items as item}
    <BentoGridItem
      title={item.title}
      class={cn("[&>p:text-lg]", item.className)}
    >
      <div slot="header">
        <svelte:component this={item.header} />
      </div>

      <p slot="description" class="text-neutral-500 text-sm">
        {item.description}
      </p>
      <div slot="icon">
        <img src={item.icon} alt="svg_icons" class="h-4 w-4 text-neutral-500" />
      </div>
    </BentoGridItem>
  {/each}
</BentoGrid>
