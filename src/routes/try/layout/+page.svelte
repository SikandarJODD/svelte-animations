<script>
  import LayoutGrid from "$lib/aceternity-ui/components/layout-grid/LayoutGrid.svelte";
  import SkeletonFour from "./SkeletonFour.svelte";
  import SkeletonOne from "./SkeletonOne.svelte";
  import SkeletonThree from "./SkeletonThree.svelte";
  import SkeletonTwo from "./SkeletonTwo.svelte";
  let cards = [
    {
      id: 1,
      content: SkeletonOne,
      class: "md:col-span-2",
      thumbnail:
        "https://i.pinimg.com/736x/fe/48/a1/fe48a154f8578c2fd8ba0226bbb9a272.jpg",
    },
    {
      id: 2,
      content: SkeletonTwo,
      class: "col-span-1",
      thumbnail:
        "https://i.pinimg.com/564x/a8/86/86/a88686f3c6a17621f65561d2a94d6768.jpg",
    },
    {
      id: 3,
      content: SkeletonThree,
      class: "col-span-1",
      thumbnail:
        "https://i.pinimg.com/564x/22/27/4a/22274a50da113c7c6b7323e0e7a96c50.jpg",
    },
    {
      id: 4,
      content: SkeletonFour,
      class: "md:col-span-2",
      thumbnail:
        "https://i.pinimg.com/564x/e4/0d/8b/e40d8bbbb4deb19c9f0fcf2009dd3559.jpg",
    },
  ];
</script>

<div class="flex justify-center items-center h-screen">
  <div class="h-[70%] w-[50%]">
    <LayoutGrid {cards} />
  </div>
</div>
