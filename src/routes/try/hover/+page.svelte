<script>
  import PlaceHolderVanish from "./PlaceHolderVanish.svelte";
  import HoverBorderGradient from "./HoverBorderGradient.svelte";

  const placeholders = [
    "What's upp",
    "Khem Chee",
    "Maja ma",
    "kee haal chaal",
    "How to assemble your own PC?",
  ];

  //   const handleChange = (e) => {
  //     console.log("Value", e);
  //     console.log(e.detail.value); // Using Svelte's event dispatch for custom events
  //   };

  const handleSubmit = (e) => {
    console.log("submitted");
  };
</script>

<!-- <div class="m-40 flex justify-center text-center">
  <HoverBorderGradient
    containerClassName="rounded-full"
    as="button"
    className="dark:bg-black bg-white text-black dark:text-white flex items-center px-6"
  >
    <span> Svelte Aceternity UI</span>
  </HoverBorderGradient>
</div> -->
<div
  class="h-[40rem] w-[40rem] mx-auto flex flex-col justify-center items-center px-4"
>
  <h2
    class="mb-10 sm:mb-12 text-xl text-center sm:text-5xl bg-gradient-to-tr from-white from-20% via-neutral-400 to-neutral-600/80 to-90% text-transparent bg-clip-text font-semibold"
  >
    O Helluuu there! 🤗
  </h2>

  <PlaceHolderVanish {placeholders} onSubmit={handleSubmit} />
</div>
