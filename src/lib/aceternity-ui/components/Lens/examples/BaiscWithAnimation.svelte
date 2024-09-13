<script>
  import Lens from "../Lens.svelte";
  let hovering = false;
</script>

<div>
  <div
    class="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 my-10"
  >
    <div class="relative z-10">
      <Lens bind:hovering>
        <img
          src="https://images.unsplash.com/photo-1713869820987-519844949a8a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image_code"
          width={500}
          height={500}
        />
      </Lens>
      <div class="py-4 relative z-20 {hovering ? 'blur-[2px]' : ''} transition-all duration-300  ease-linear ">
        <h2 class="text-white text-2xl text-left font-bold">
          Apple Vision Pro
        </h2>
        <p class="text-neutral-200 text-left mt-4">
          The all new apple vision pro was the best thing that happened around 8
          months ago, not anymore.
        </p>
      </div>
    </div>
  </div>
</div>
