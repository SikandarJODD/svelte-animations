<script lang="ts">
  export let name;
</script>

<span class=" w-fit">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="mt-px"
    ><path
      d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
    /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path
      d="M16 13H8"
    /><path d="M16 17H8" /></svg
  >
  {name}</span
>

<style>
  span {
    display: flex;
    align-items: center;
    gap: 2px;
  }
</style>
