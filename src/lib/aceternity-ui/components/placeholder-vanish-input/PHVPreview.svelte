<script>
  import PlaceholderVanishInput from "./PlaceholderVanishInput.svelte";

  const placeholders = [
    "Why is Svelte the Best Javascript Framework?",
    "Chal Bhai Kuch Type kar auur Magic dek..",
    "Jab we met is the best movie ever",
    "Bhai Share bhi kar de yaar",
    "Ek Tweet to banta hai",
  ];

  const handleSubmit = (e) => {
    console.log("submitted");
  };
</script>

<div
  class="h-[35rem] w-[40rem] mx-auto flex flex-col justify-center items-center px-4"
>
  <h2
    class="mb-10 sm:mb-12 text-xl text-center sm:text-5xl bg-gradient-to-tr from-white from-20% via-neutral-400 to-neutral-600/80 to-90% text-transparent bg-clip-text font-semibold"
  >
    Svelte Aceternity UI
  </h2>

  <PlaceholderVanishInput {placeholders} onSubmit={handleSubmit} />
</div>
