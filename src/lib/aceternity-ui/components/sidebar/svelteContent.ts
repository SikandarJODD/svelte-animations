// SidebarContext.ts
import { writable } from "svelte/store";

interface SidebarContextProps {
  open: boolean;
  animate: boolean;
  setOpen: (value: boolean) => void;
}

const createSidebarStore = (initialOpen = false, initialAnimate = true) => {
  const open = writable(initialOpen);
  const animate = writable(initialAnimate);

  let setOpen = (value: boolean) => {
    open.set(value);
  };

  return {
    open,
    animate,
    setOpen,
  };
};

export let sidebarStore = createSidebarStore();

export let vopen = writable(false);
export let vanimate = writable(true);
