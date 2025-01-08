<script>
  export let text = "Hover Me";
</script>

<button
  class="group relative inline-flex items-center gap-1 overflow-hidden rounded-xl bg-white/80 px-4 py-2 text-sm font-semibold text-black duration-300 hover:bg-white"
>
  <!-- Text Glitch  -->
  <div class="relative overflow-hidden">
    <span class="invisible">{text}</span>
    <span
      class="absolute left-0 top-0 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full"
    >
      {text}
    </span>
    <span
      class="absolute left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0"
    >
      {text}
    </span>
  </div>
  <!-- Brightness  -->
  <div
    class="absolute inset-0 flex h-full w-full animate-brightness justify-center"
  >
    <div class="relative h-full w-8 bg-white/40 blur" />
  </div>
</button>
