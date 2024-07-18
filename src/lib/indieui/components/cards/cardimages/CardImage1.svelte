<script>
  import CardBodyImg from "./cardbody/CardBodyImg.svelte";
</script>

<div class="rounded-2xl relative aspect-[4/3] overflow-hidden group">
  <img
    src="https://i.pinimg.com/564x/c4/a7/93/c4a79308ecda9db51aeac2bb8bc37147.jpg"
    placeholder="blur"
    alt="don corleone"
    class="w-full object-cover m-0"
  />
  <!-- Overlay -->
  <div
    class="absolute inset-0 from-stone-900/90 via-stone-900/60 to-stone-900/5 bg-gradient-to-t backdrop-blur-[2px] transition-all duration-300"
  ></div>
  <!--  Add Your Card Here  -->
  <slot>
    <CardBodyImg
      class="absolute pb-0.5 px-4 md:pb-10 inset-x-0 bottom-2 flex flex-col justify-end size-full"
    />
  </slot>
</div>
