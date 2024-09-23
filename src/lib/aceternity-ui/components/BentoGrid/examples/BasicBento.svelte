<script>
  import BentoGrid from "../BentoGrid.svelte";
  import BentoGridItem from "../BentoGridItem.svelte";
  import BentoSkeleton from "./BentoSkeleton.svelte";

  // Icons, you can use any icon library you like
  import IconArrowWaveRightUp  from "$lib/svg/tabler/arrow-wave-right-up.svg";
  import IconBoxAlignRightFilled  from "$lib/svg/tabler/box-align-right.svg";
  import IconBoxAlignTopLeft  from "$lib/svg/tabler/box-align-top-left.svg";
  import IconClipboardCopy  from "$lib/svg/tabler/clipboard-copy.svg";
  import IconFileBroken  from "$lib/svg/tabler/file-broken.svg";
  import IconSignature  from "$lib/svg/tabler/signature.svg";
  import IconTableColumn  from "$lib/svg/tabler/table-column.svg";

  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: BentoSkeleton, // Scroll down to see the BentoSkeleton.svelte component
      icon: IconClipboardCopy,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: BentoSkeleton,
      icon: IconFileBroken,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: BentoSkeleton,
      icon: IconSignature,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: BentoSkeleton,
      icon: IconTableColumn,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: BentoSkeleton,
      icon: IconArrowWaveRightUp,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: BentoSkeleton,
      icon: IconBoxAlignTopLeft,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: BentoSkeleton,
      icon: IconBoxAlignRightFilled,
    },
  ];
  //    icon class="h-4 w-4 text-neutral-500"
</script>

<BentoGrid class="max-w-4xl mx-auto">
  {#each items as item, i}
    <BentoGridItem
      title={item.title}
      description={item.description}
      class={i === 3 || i === 6 ? "md:col-span-2" : ""}
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
