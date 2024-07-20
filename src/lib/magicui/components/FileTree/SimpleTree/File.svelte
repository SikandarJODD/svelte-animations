<script lang="ts">
  export let name;
  $: type = name.slice(name.lastIndexOf(".") + 1);
  import TsImg from "./svgs/ts.svg";
  import SvelteImg from "./svgs/svelte.svg";
  import JsImg from "./svgs/js.svg";
  import Img from "./svgs/image.svg";
  let allFiles: any = {
    svelte: SvelteImg,
    ts: TsImg,
    js: JsImg,
    png: Img,
  };
</script>

<span class=" w-fit">
  <img src={allFiles[type]} class=" h-[16px] w-[15px] mt-1" alt={type} />
  {name}</span
>

<style>
  span {
    display: flex;
    align-items: center;
    gap: 3px;
  }
</style>
