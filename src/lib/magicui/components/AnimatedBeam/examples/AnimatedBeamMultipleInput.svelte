<script lang="ts">
  // Scroll down to see the original Component
  import { cn } from "$lib/utils";
  import AnimatedBeam from "../AnimatedBeam.svelte";
  import Circle from "../Circle.svelte";
  let containerRef;
  // Circles
  let div1Ref;
  let div2Ref;
  let div3Ref;
  let div4Ref;
  let div5Ref;
  let div6Ref;
  let div7Ref;
  let className: any = "";
  export { className as class };
</script>

<div
  bind:this={containerRef}
  class={cn(
    "relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10  md:shadow-xl dark:shadow-[#090909]",
    className
  )}
>
  <!--  Gradient Line -->
  <div
    class="absolute right-5 top-0 h-px w-1/2 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
  />
  <!-- Main Component  -->

  <div
    class="flex h-full w-full flex-row justify-between gap-10 max-w-lg items-center"
  >
    <div class="flex flex-col justify-center gap-2">
      <!-- Div 1 -->
      <Circle>
        <svg
          bind:this={div1Ref}
          viewBox="0 0 256 308"
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          ><path
            d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
            fill="#FF3E00"
          /><path
            d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
            fill="#FFF"
          /></svg
        >
      </Circle>
      <!-- Div 2 -->
      <Circle>
        <svg
          bind:this={div2Ref}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 256 260"
          ><path
            fill="#fff"
            d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"
          /></svg
        >
      </Circle>
      <!-- Div 3 -->
      <Circle>
        <svg
          bind:this={div3Ref}
          width="30"
          height="30"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M186 447.471V154H318.062C336.788 154 353.697 158.053 368.79 166.158C384.163 174.263 396.181 185.443 404.845 199.698C413.51 213.672 417.842 229.604 417.842 247.491C417.842 265.938 413.51 282.568 404.845 297.381C396.181 311.915 384.302 323.375 369.209 331.759C354.117 340.144 337.067 344.337 318.062 344.337H253.917V447.471H186ZM348.667 447.471L274.041 314.99L346.99 304.509L430 447.471H348.667ZM253.917 289.835H311.773C319.04 289.835 325.329 288.298 330.639 285.223C336.229 281.869 340.421 277.258 343.216 271.388C346.291 265.519 347.828 258.811 347.828 251.265C347.828 243.718 346.151 237.15 342.797 231.56C339.443 225.691 334.552 221.219 328.124 218.144C321.975 215.07 314.428 213.533 305.484 213.533H253.917V289.835Z"
            fill="white"
          />
        </svg>
      </Circle>
      <!-- Div 4 -->
      <Circle>
        <svg
          bind:this={div4Ref}
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          stroke-linejoin="round"
          viewBox="0 0 16 16"
          width="16"
          ><path
            clip-rule="evenodd"
            d="M9.50321 5.5H13.2532C13.3123 5.5 13.3704 5.5041 13.4273 5.51203L9.51242 9.42692C9.50424 9.36912 9.5 9.31006 9.5 9.25L9.5 5.5L8 5.5L8 9.25C8 10.7688 9.23122 12 10.75 12H14.5V10.5L10.75 10.5C10.6899 10.5 10.6309 10.4958 10.5731 10.4876L14.4904 6.57028C14.4988 6.62897 14.5032 6.68897 14.5032 6.75V10.5H16.0032V6.75C16.0032 5.23122 14.772 4 13.2532 4H9.50321V5.5ZM0 5V5.00405L5.12525 11.5307C5.74119 12.3151 7.00106 11.8795 7.00106 10.8822V5H5.50106V9.58056L1.90404 5H0Z"
            fill="white"
            fill-rule="evenodd"
          ></path></svg
        >
      </Circle>
      <!-- Div 5 -->
      <Circle>
        <svg
          bind:this={div5Ref}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 32 33"
          ><path
            fill="#ffff"
            fill-opacity="0.2"
            d="M0 18.83L.08 6.832C.094 4.66 1.613 2.798 3.71 2.383L15.297.086c2.784-.552 5.368 1.627 5.35 4.51l-.08 12c-.015 2.171-1.534 4.032-3.631 4.448L5.349 23.341C2.565 23.893-.019 21.714 0 18.83z"
          /><path
            fill="#ffff"
            fill-opacity="0.5"
            d="M5.677 23.617l.08-12C5.77 9.447 7.29 7.586 9.387 7.17l11.587-2.296c2.784-.552 5.368 1.626 5.349 4.51l-.08 12c-.014 2.171-1.533 4.032-3.63 4.448l-11.587 2.297c-2.784.551-5.368-1.627-5.349-4.51z"
          /><path
            fill="#ffff"
            fill-opacity="0.8"
            d="M11.354 28.404l.08-12c.014-2.172 1.533-4.032 3.63-4.448l11.587-2.297c2.784-.552 5.368 1.627 5.349 4.51l-.08 12c-.014 2.172-1.533 4.033-3.63 4.448l-11.587 2.297c-2.784.552-5.368-1.627-5.35-4.51z"
          /></svg
        >
      </Circle>
    </div>
    <div class="flex flex-col justify-center">
      <!-- Div 6 -->
      <Circle>
        <svg
          bind:this={div6Ref}
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 512 512"
          ><rect
            fill="#CC9B7A"
            width="512"
            height="512"
            rx="104.187"
            ry="105.042"
          /><path
            fill="#1F1F1E"
            fill-rule="nonzero"
            d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z"
          /></svg
        >
      </Circle>
    </div>
    <div class="flex flec-col justify-center">
      <!-- Div 7 -->
      <Circle>
        <svg
          bind:this={div7Ref}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-user"
          ><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle
            cx="12"
            cy="7"
            r="4"
          /></svg
        >
      </Circle>
    </div>
  </div>

  <AnimatedBeam bind:containerRef bind:fromRef={div1Ref} bind:toRef={div6Ref} />
  <AnimatedBeam bind:containerRef bind:fromRef={div2Ref} bind:toRef={div6Ref} />
  <AnimatedBeam bind:containerRef bind:fromRef={div3Ref} bind:toRef={div6Ref} />
  <AnimatedBeam bind:containerRef bind:fromRef={div4Ref} bind:toRef={div6Ref} />
  <AnimatedBeam bind:containerRef bind:fromRef={div5Ref} bind:toRef={div6Ref} />
  <AnimatedBeam bind:containerRef bind:fromRef={div6Ref} bind:toRef={div7Ref} />
</div>
