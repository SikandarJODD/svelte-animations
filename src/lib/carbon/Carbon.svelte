<script lang="ts">
  import { onMount } from "svelte";
  import { isBrowser } from "$lib/utils";
  import { beforeNavigate } from "$app/navigation";
  import { dev } from "$app/environment";

  const src =
    "//cdn.carbonads.com/carbon.js?serve=CW7ICKJI&placement=animation-sveltevercelapp&format=cover";
  const localId = crypto.randomUUID();

  let container: HTMLElement | null = null;

  onMount(() => {
    if (!dev) {
      refreshCarbonAds();

      return () => {
        const scriptNode = container?.querySelector(`[data-id="${localId}"]`);
        const carbonNode = container?.querySelector(`#carbonads`);
        scriptNode?.remove();
        carbonNode?.remove();
      };
    }
  });

  beforeNavigate((navigation) => {
    let fromparam = navigation.from?.params.compID;
    let toparam = navigation.to?.params.compID;
    const isDocIndex = navigation.from?.route.id === `/magic/${fromparam}`;
    if (isDocIndex) return;
    const goingToDocIndex = navigation.to?.route.id === `/magic/${toparam}`;
    if (goingToDocIndex) return;
    refreshCarbonAds();
  });

  function createCarbonScript() {
    const script = document.createElement("script");
    script.async = true;
    script.id = "_carbonads_js";
    script.src = src;
    script.type = "text/javascript";
    script.dataset.id = localId;
    return script;
  }

  function refreshCarbonAds() {
    if (!dev) {
      if (!isBrowser) return;
      const scriptNode = container?.querySelector("[data-id='_carbonads_js']");
      const carbonAdsNode = container?.querySelector("#carbonads");

      carbonAdsNode?.remove();
      scriptNode?.remove();

      const script = createCarbonScript();
      container = document.getElementById(localId);
      if (container) {
        container.appendChild(script);
      }
    }
  }
</script>

{#if !dev}
  <div id={localId} class=""></div>
{/if}
