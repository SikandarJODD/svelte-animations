<script lang="ts">
  import { cubicInOut, cubicOut, quintInOut } from "svelte/easing";
  import { crossfade, scale, fade, slide, fly, blur } from "svelte/transition";
  let layout = "layouta";

  let [send, receive] = crossfade({
    duration: 400,
  });
</script>

<div class="w-full h-full flex justify-center items-center flex-col">
  {#if layout === "layouta"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:click={() => {
        layout = "layoutb";
      }}
      class="bg-lime-100 p-4 rounded-3xl layouta w-fit h-fit overflow-hidden"
      in:receive={{ key: "layouta" }}
      out:send={{ key: "layouta" }}
    >
      <div
        class="imgTag"
        in:receive={{ key: "imgTag" }}
        out:send={{ key: "imgTag" }}
      >
        <img
          src="https://i.pinimg.com/564x/b3/7c/fa/b37cfa52ac8e142ffe42772712f6e33d.jpg"
          alt="Saturn Art"
          class="w-56 h-56 rounded-2xl"
        />
      </div>
      <div class="mt-2 px-2 flex flex-col">
        <h1
          class="font-bold text-md md:text-lg heading text-gray-900"
          in:receive={{ key: "heading" }}
          out:send={{ key: "heading" }}
        >
          Mumbai City
        </h1>
        <p
          class="text-xs para text-gray-700"
          in:receive={{ key: "para" }}
          out:send={{ key: "para" }}
        >
          Hello Devs, welcome to our Website
        </p>
      </div>
    </div>
  {:else if layout === "layoutb"}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:click={() => {
        layout = "layouta";
      }}
      class="bg-lime-100 p-2.5 md:p-4 rounded-3xl layouta flex gap-1 md:gap-4 w-fit h-fit overflow-hidden"
      in:receive={{ key: "layouta" }}
      out:send={{ key: "layouta" }}
    >
      <div
        class="imgTag"
        in:receive={{ key: "imgTag" }}
        out:send={{ key: "imgTag" }}
      >
        <img
          src="https://i.pinimg.com/564x/b3/7c/fa/b37cfa52ac8e142ffe42772712f6e33d.jpg"
          alt="Saturn Art"
          class="w-36 h-32 md:w-64 md:h-64 rounded-2xl"
        />
      </div>
      <div class="mt-2 px-1 md:px-2 flex flex-col">
        <h1
          class="font-bold text-sm md:text-2xl heading text-gray-900"
          in:receive={{ key: "heading" }}
          out:send={{ key: "heading" }}
        >
          Mumbai City
        </h1>
        <p
          class=" sm:text-md w-full para text-gray-700"
          in:receive={{ key: "para" }}
          out:send={{ key: "para" }}
        >
          Yoo devs, Howw you doing?
        </p>
      </div>
    </div>
  {/if}
</div>

<style>
  .layouta {
    position: absolute;
  }
  .layoutb {
    position: absolute;
  }
</style>
