<script>
  import BentoGrid from "../../BentoGrid.svelte";
  import BentoGridItem from "../../BentoGridItem.svelte";

  import IconClipboardCopy  from "$lib/svg/tabler/clipboard-copy.svg";
  import IconFileBroken  from "$lib/svg/tabler/file-broken.svg";
  import IconSignature  from "$lib/svg/tabler/signature.svg";
  import IconTableColumn  from "$lib/svg/tabler/table-column.svg";
  import TwoColumnSkeleton from "./TwoColumnSkeleton.svelte";

  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: TwoColumnSkeleton,
      className: "md:col-span-2",
      icon: IconClipboardCopy,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: TwoColumnSkeleton,
      className: "md:col-span-1",
      icon: IconFileBroken,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: TwoColumnSkeleton,
      className: "md:col-span-1",
      icon: IconSignature,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: TwoColumnSkeleton,
      className: "md:col-span-2",
      icon: IconTableColumn,
    },
  ];
  //  Icon class="h-4 w-4 text-neutral-500"
</script>

<BentoGrid class="max-w-4xl mx-auto md:auto-rows-[20rem]">
  {#each items as item, i}
    <BentoGridItem
      title={item.title}
      description={item.description}
      class={item.className}
    >
      <div slot="header">
        <svelte:component this={item.header} />
      </div>
      <div slot="icon">
        <img src={item.icon} alt="svg_icons" class="h-4 w-4 text-neutral-500" />
      </div>
    </BentoGridItem>
  {/each}
</BentoGrid>
