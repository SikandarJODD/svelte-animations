
<script>
  import SvgMaskEffect from "$lib/aceternity-ui/components/SvgMaskEffect/SvgMaskEffect.svelte";

</script>

<SvgMaskEffect class="h-screen w-screen border rounded-md">
  <p
    slot="reveal"
    class="max-w-4xl mx-auto text-slate-800 text-center text-4xl font-bold bg-white"
  >
    React is <span class="text-red-600"> Hard </span> & Everyone Uses it.
  </p>
  <div slot="def" class="px-36">
    Svelte is <span class="text-sky-500">Easy</span> & Everyone
    <span class="text-emerald-400">Loves</span> it.
  </div>
</SvgMaskEffect>
