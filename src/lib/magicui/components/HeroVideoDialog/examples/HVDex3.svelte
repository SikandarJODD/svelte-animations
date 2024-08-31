<script>
  // Visit Border Beam Component for more information
  import BorderBeam from "$lib/magicui/SpecialEffects/BorderBeam/BorderBeam.svelte";

  import HeroVideoDialog from "../HeroVideoDialog.svelte";
  import SvelteAnimotion from "$lib/svg/svelte-animotion.png";
</script>

<section
  class="max-w-5xl mx-auto h-screen flex flex-col justify-center items-center px-7 lg:px-0 relative"
>
  <div class="relative rounded-2xl p-1 overflow-hidden">
    <BorderBeam />
    <HeroVideoDialog
      animationStyle="from-right"
      videoSrc="https://www.youtube.com/embed/AzVXFKmu0bQ?si=caAjfnPASQ1-Vu7W"
      thumbnailSrc={SvelteAnimotion}
      thumbnailAlt="Svelte Animotion - Joy of Code"
    />
  </div>
</section>
