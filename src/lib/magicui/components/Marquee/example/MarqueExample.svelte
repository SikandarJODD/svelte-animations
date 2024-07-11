<script>
  import Marquee from "$lib/magicui/components/Marquee/Marquee.svelte";
  import Reviewcard from "./Reviewcard.svelte";

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

<div
  class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl"
>
  <Marquee pauseOnHover class="[--duration:20s]">
    {#each firstRow as item}
      <Reviewcard {...item} />
    {/each}
  </Marquee>
  <Marquee reverse pauseOnHover class="[--duration:20s]">
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
