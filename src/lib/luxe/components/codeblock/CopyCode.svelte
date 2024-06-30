<script>
  export let code = "";
  let isCopied = false;
  let handleCopy = () => {
    navigator.clipboard.writeText(code);
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 1500);
  };
</script>

<button
  on:click={handleCopy}
  class="rounded-full py-1.5 w-[70px] border bg-neutral-900 border-border cursor-copy"
>
  <span class="flex items-center justify-center gap-1.5 text-neutral-200 text-xs font-medium">
    {isCopied ? "Copied!" : "Copy"}
  </span>
</button>
