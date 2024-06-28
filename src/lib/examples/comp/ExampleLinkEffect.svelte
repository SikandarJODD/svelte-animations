<script lang='ts'>
  import { fade,blur, scale } from "svelte/transition";

  export let hrefDetails = {
    href: "https://in.pinterest.com/pin/724375921339895692/",
    text: "Mumbai City",
    imgSrc:
      "https://i.pinimg.com/736x/7e/61/74/7e6174c858a5aa169de033f55fc3050c.jpg",
    imgAlt: "Mumbai",
  };
  let isHover = false;

  let linkEffect = (node:HTMLElement) => {
    node.addEventListener("mouseenter", () => {
      isHover = true;
    });
    node.addEventListener("mouseleave", () => {
      isHover = false;
    });
  };
</script>

<div class="relative w-full flex justify-center items-center">
  {#if isHover}
    <img
      in:blur={{duration:300}}
      style="position:absolute;  bottom:40px;"
      src={hrefDetails.imgSrc}
      alt={hrefDetails.imgAlt}
      class="h-44 w-44 rounded-lg shadow-lg"
    />
  {/if}
  <a
    use:linkEffect
    href={hrefDetails.href}
    target="_blank"
    class="text-md underline cursor-pointer"
  >
    {hrefDetails.text}
  </a>
</div>
