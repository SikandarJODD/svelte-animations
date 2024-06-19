<script lang="ts">
  import { cubicOut, quintInOut } from "svelte/easing";
  import { crossfade, scale, fade, slide, fly, blur } from "svelte/transition";
  let layout = "layouta";

  let [send, receive] = crossfade({
    duration: 500,
    easing: quintInOut,
    fallback: blur,
  });
</script>

<div class="flex justify-center items-center h-[80vh]">
  {#if layout === "layouta"}
    <div
      class="bg-lime-100 p-4 rounded-3xl layouta"
      in:receive={{ key: "layouta" }}
      out:send={{ key: "layouta" }}
    >
      <img
        src="https://i.pinimg.com/564x/b3/7c/fa/b37cfa52ac8e142ffe42772712f6e33d.jpg"
        alt="Saturn Art"
        class="w-56 h-56 rounded-2xl img"
        in:receive|global={{ key: "img" }}
        out:send|global={{ key: "img" }}
      />
      <div class="mt-2 px-2 flex flex-col">
        <h1
          class="font-bold text-lg heading text-gray-900"
          in:receive={{ key: "heading" }}
          out:send={{ key: "heading" }}
        >
          Saturn Art
        </h1>
        <p
          class="text-xs para text-gray-700"
          in:receive={{ key: "para" }}
          out:send={{ key: "para" }}
        >
          Hello Saturn, welcome to our Website
        </p>
      </div>
    </div>
  {:else if layout === "layoutb"}
    <div
      class="bg-lime-100 p-4 rounded-3xl layoutb flex gap-4"
      in:receive={{ key: "layoutb" }}
      out:send={{ key: "layoutb" }}
    >
      <img
        src="https://i.pinimg.com/564x/b3/7c/fa/b37cfa52ac8e142ffe42772712f6e33d.jpg"
        alt="Saturn Art"
        class="w-64 h-64 rounded-2xl img"
        in:receive|global={{ key: "img" }}
        out:send|global={{ key: "img" }}
      />
      <div class="mt-2 px-2 flex flex-col">
        <h1
          class="font-bold text-2xl heading text-gray-900"
          in:receive={{ key: "heading" }}
          out:send={{ key: "heading" }}
        >
          Saturn Art
        </h1>
        <p
          class=" text-md w-60 para text-gray-700"
          in:receive={{ key: "para" }}
          out:send={{ key: "para" }}
        >
          Hello Saturn, welcome to our Website
        </p>
      </div>
    </div>
  {/if}
</div>
<div class="h-[20vh] flex justify-center items-center gap-3">
  <button
    on:click={() => {
      layout = "layouta";
    }}>Small</button
  >
  <button
    on:click={() => {
      layout = "layoutb";
    }}>Medium</button
  >
</div>

<style>
  .layouta,
  .layoutb {
    position: absolute;
    width: fit content;
    height: fit-cotent;
  }
</style>
