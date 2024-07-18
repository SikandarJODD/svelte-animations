<script>
  import Xsvg from "./x.svg";
  import GithubSvg from "./github.svg";
  import HeaderNav from "../HeaderNav.svelte";
  let headerLinks = [
    { name: "Features", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "FAQs", href: "/" },
  ];
  let icons = [
    {
      name: "Twitter",
      icon: Xsvg,
      href: "https://twitter.com",
    },
    {
      name: "Github",
      icon: GithubSvg,
      href: "https://github.com",
    },
  ];
</script>

<HeaderNav sticky={false} {headerLinks}>
  <div slot="Logo">
    <a href="/" class="text-2xl font-bold text-white"
      >Svelte IndieUI
    </a>
  </div>
</HeaderNav>
