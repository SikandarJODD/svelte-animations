<script>

  // Visit Border Beam Component for more information
  import BorderBeam from "$lib/magicui/SpecialEffects/BorderBeam/BorderBeam.svelte";
  // Scroll down to see the HeroVideoDialog component
  import HeroVideoDialog from "../HeroVideoDialog.svelte";

</script>

<section
  class="max-w-5xl mx-auto h-screen flex flex-col justify-center items-center px-7 lg:px-0 relative"
>
  <div class="relative rounded-2xl p-1 overflow-hidden">
    <BorderBeam />
    <HeroVideoDialog
      animationStyle="from-center"
      videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
      thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
      thumbnailAlt="Hero Video"
    />
  </div>
</section>
