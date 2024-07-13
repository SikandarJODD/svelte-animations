<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import Reviewcard from "$lib/magicui/components/Marquee/example/Reviewcard.svelte";
  import Marquee from "$lib/magicui/components/Marquee/Marquee.svelte";

  const reviews = [
    {
      name: "Bhide",
      username: "@Bhide",
      body: "Noicee work. I love it. Keep it up.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jodd",
      username: "@Jodd",
      body: "Wooww, this is what I was looking for. Great work.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Pokie",
      username: "@Pokie",
      body: "Svelte is Amazing and so are you. Keep it up.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "pablo",
      username: "@pablo",
      body: "Remarkable Stuff broooo. Added to my favourites.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Saloni",
      username: "@Saloni",
      body: "Acche hai, Chal mera Portfolio banade.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "Bhai",
      username: "@Bhai",
      body: "Svelte made easy with these components. Great work.",
      img: "https://avatar.vercel.sh/james",
    },
  ];

  let firstRow = reviews.slice(0, reviews.length / 2);
  let secondRow = reviews.slice(reviews.length / 2);
</script>

<div class="flex justify-center items-center h-screen">
  <div class="h-96 w-[60%] overflow-hidden rounded-3xl border relative">
    <div
      class="relative flex flex-col items-center justify-center overflow-hidden opacity-50 md:shadow-xl gap-6 -mt-36"
    >
      <Marquee reverse class="[--duration:20s] rotate-[30deg]">
        {#each secondRow as item}
          <Reviewcard {...item} />
        {/each}
      </Marquee>
      <Marquee class="[--duration:20s] rotate-[30deg]">
        {#each firstRow as item}
          <Reviewcard {...item} />
        {/each}
      </Marquee>
      <Marquee reverse class="[--duration:20s] rotate-[30deg]">
        {#each secondRow as item}
          <Reviewcard {...item} />
        {/each}
      </Marquee>
      <Marquee class="[--duration:20s] rotate-[30deg]">
        {#each firstRow as item}
          <Reviewcard {...item} />
        {/each}
      </Marquee>
      <Marquee reverse class="[--duration:20s] rotate-[30deg]">
        {#each secondRow as item}
          <Reviewcard {...item} />
        {/each}
      </Marquee>

      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      ></div>
    </div>
    <div
      class="absolute top-0 flex justify-center items-center h-full w-full cta"
    >
      <div class="flex items-center flex-col gap-2">
        <div class="border border-neutral-600 backdrop-blur-md p-5 rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-baseline-square"
            ><rect width="18" height="18" x="3" y="3" rx="2" /><path
              d="M9.5 12h5"
            /><path d="m9 13 3-6 3 6" /><path d="M7 17h10" /></svg
          >
        </div>
        <h1 class="text-4xl font-bold text-center">
          Stop wasting time on design
        </h1>
        <p class="text-center text-lg">
          Focus on creating the content and let us handle the design.
        </p>
        <Button variant="outline" class="rounded-full"
          >Get Started <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-px mt-px"><path d="m9 18 6-6-6-6" /></svg
          ></Button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .cta {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 11%,
      rgba(1, 1, 1, 0) 82%
    );
  }
</style>
