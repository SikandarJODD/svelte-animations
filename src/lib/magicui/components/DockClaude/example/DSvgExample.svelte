<script>
  import Dock from "../Dock.svelte";
  import DockIcon from "../DockIcon.svelte";
  import GithubSvg from "$lib/svg/web/github.svg";
  import Twitter from "$lib/svg/web/svelte.svg";
  import ClaudeSvg from "$lib/svg/web/claude.svg";
  import YouTube from "$lib/svg/web/youtube.svg";
</script>

<div class="relative">
  <Dock
    let:magnification
    let:distance
    let:mouseX
    magnification={60}
    distance={110}
    direction="bottom"
  >
    <DockIcon
      {magnification}
      {distance}
      {mouseX}
      
      class="bg-black/10 dark:bg-white/5 p-3"
    >
      <img src={GithubSvg} alt="g" width="20" height="20" />
    </DockIcon>
    <DockIcon
      {magnification}
      {distance}
      {mouseX}
      class="bg-black/10 dark:bg-white/5 p-3"
    >
      <img src={Twitter} alt="g" width="20" height="20" />
    </DockIcon>
    <DockIcon
      {magnification}
      {distance}
      {mouseX}
      class="bg-black/10 dark:bg-white/5 p-3"
    >
      <img src={YouTube} alt="g" width="20" height="20" />
    </DockIcon>
    <DockIcon
      {magnification}
      {distance}
      {mouseX}
      class="bg-black/10 dark:bg-white/5 p-3"
    >
      <img src={ClaudeSvg} alt="g" width="20" height="20" />
    </DockIcon>
  </Dock>
</div>
