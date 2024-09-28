<script>
  import FollowPointerCard from "./FollowPointerCard.svelte";

  const blogContent = {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Manu Arora",
    date: "29th October, 2024",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcss grid and React.",
    image:
      "https://i.pinimg.com/564x/52/61/24/526124d9d8c8550e942c181eb10a1282.jpg",
  };
</script>

<div class="w-80 mx-auto flex justify-center items-center h-[40rem]">
  <FollowPointerCard title="Sikandar Bhide">
    <div
      class="relative bg-white h-full rounded-2xl overflow-hidden transition duration-200 group hover:shadow-xl border border-zinc-100"
    >
      <div
        class="w-full aspect-w-16 aspect-h-10 rounded-tr-lg bg-white rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative"
      >
        <img
          src={blogContent.image}
          alt="thumbnail"
          class="group-hover:scale-95 group-hover:rounded-2xl rounded-t-2xl transform object-cover transition duration-200 w-full h-full"
        />
      </div>
      <div class="px-4 pb-2">
        <h2 class="font-bold my-4 text-lg text-black">
          {blogContent.title}
        </h2>
        <h2 class="font-normal my-4 text-sm text-black">
          {blogContent.description}
        </h2>
        <div class="flex flex-row justify-between items-center mt-2">
          <span class="text-sm text-gray-500">{blogContent.date}</span>
          <button
            class="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs pointer-events-none"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  </FollowPointerCard>
</div>
