<script>
  import HeadingOne from "../dev/ExamplesRoute/tags/HeadingOne.svelte";
  import Para from "../dev/ExamplesRoute/tags/Para.svelte";
  import Badge from "../ui/badge/badge.svelte";
  import ShiftingDropDownExample from "./shiftingDropDown/ShiftingDropDownExample.svelte";
</script>

<div>
  <HeadingOne>Shifting Dropdown Effect</HeadingOne>
  <Para>
    This is a simple example of a shifting dropdown effect. When you click on
    the tabs, the content will shift to the selected tab.
  </Para>
  <Badge variant="outline" class="border-primary mt-1.5">Svelte-Motion</Badge>
  <div class="mt-4">
    <ShiftingDropDownExample />
  </div>
</div>
