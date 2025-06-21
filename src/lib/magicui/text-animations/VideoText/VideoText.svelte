<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  export let src: string;
  export let className = "";
  export let autoPlay = true;
  export let muted = true;
  export let loop = true;
  export let preload: "auto" | "metadata" | "none" = "auto";
  export let fontSize: string | number = 12;
  export let fontWeight: string | number = "bold";
  export let textAnchor = "middle";
  export let dominantBaseline = "middle";
  export let fontFamily = "sans-serif";
  export let as: string = "div"; // dynamic tag
  export let content: string | string[] = ""; // used to build the mask

  let svgMask = "";
  let dataUrlMask = "";

  // Convert children to plain string if array
  $: dynamic_content = Array.isArray(content) ? content.join("") : content;

  function updateSvgMask() {
    const responsiveFontSize =
      typeof fontSize === "number" ? `${fontSize}vw` : fontSize;
    svgMask = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
      <text x='50%' y='50%' font-size='${responsiveFontSize}' font-weight='${fontWeight}'
        text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}'>
        ${dynamic_content}
      </text>
    </svg>`;
    dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`;
  }

  onMount(() => {
    updateSvgMask();
  });

  $: if (
    content ||
    fontSize ||
    fontWeight ||
    textAnchor ||
    dominantBaseline ||
    fontFamily
  ) {
    updateSvgMask();
  }
</script>

<svelte:window on:resize={updateSvgMask} />
<svelte:element this={as} class={`relative w-full h-full ${className}`}>
  <div
    class="absolute inset-0 flex items-center justify-center"
    style="
      mask-image: {dataUrlMask};
      -webkit-mask-image: {dataUrlMask};
      mask-size: contain;
      -webkit-mask-size: contain;
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-position: center;
    "
  >
    <video
      class="w-full h-full object-cover"
      autoplay={autoPlay}
      {muted}
      {loop}
      {preload}
      playsinline
    >
      <source {src} />
      Your browser does not support the video tag.
    </video>
    <!-- if you want to add YouTube Video prefer using Iframe  -->
     <!-- Iframe Docs : https://www.w3schools.com/html/html_youtube.asp -->
    <!-- <iframe {src} title="svelte" class="w-full h-full"> </iframe> -->
  </div>

  <span class="sr-only">{dynamic_content}</span>
</svelte:element>
