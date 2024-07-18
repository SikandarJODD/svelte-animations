<script>
  import CardBodyImg from "./cardbody/CardBodyImg.svelte";
</script>

<div class="rounded-2xl relative aspect-[4/3] overflow-hidden group">
  <img
    src="https://img.freepik.com/free-vector/music-mobile-phone-app_23-2148827274.jpg?t=st=1721317069~exp=1721320669~hmac=7a354d76ecefd3bbb15211f271361718f60ccac5e55dacc642e2762d5702d5ec&w=996"
    placeholder="blur"
    alt="don corleone"
    class="w-full object-cover m-0"
  />
  <!--  overlay  -->
  <div
    class="absolute inset-0 from-black/95 via-black/70 to-black/10 bg-gradient-to-t"
  ></div>
  <!-- Add Any Content inside Slot -->
  <slot>
    <CardBodyImg
      class="absolute pb-1 px-4 md:pb-4 inset-x-0 bottom-2 flex flex-col justify-end size-full "
    />
  </slot>
</div>
