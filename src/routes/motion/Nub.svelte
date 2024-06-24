<script lang="ts">
  import { Motion } from "svelte-motion";

  export let selected;
  let left: any;
  let moveNub = (node) => {
    console.log(selected, "Selected ID");
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;
      console.log(hoveredTab, overlayContent, "Hovered Tab");

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      //   setLeft(tabCenter);
      left = tabCenter;
    }
  };
</script>

<Motion
  style={{
    clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
  }}
  animate={{ left }}
  transition={{ duration: 0.25, ease: "easeInOut" }}
  let:motion
>
  <span
    class="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    use:motion
    use:moveNub
  >
  </span>
</Motion>
