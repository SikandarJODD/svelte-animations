<script>
  // Visit Border Beam Component for more information
  import BorderBeam from "$lib/magicui/SpecialEffects/BorderBeam/BorderBeam.svelte";

  import HeroVideoDialog from "../HeroVideoDialog.svelte";
  import SvelteImg from "$lib/svg/sveltekit1.webp";
</script>

<section
  class="max-w-5xl mx-auto h-screen flex flex-col justify-center items-center px-7 lg:px-0 relative"
>
  <div class="relative rounded-2xl p-1 overflow-hidden">
    <BorderBeam />
    <HeroVideoDialog
      animationStyle="top-in-bottom-out"
      videoSrc="https://www.youtube.com/embed/rv3Yq-B8qp4?si=kx8K28NzEhMx5g1-"
      thumbnailSrc={SvelteImg}
      thumbnailAlt="Svelte in 100 Seconds"
      iconColor="#1E1E1F"
    />
  </div>
</section>
