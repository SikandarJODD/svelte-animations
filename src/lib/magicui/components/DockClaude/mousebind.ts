import { writable } from "svelte/store";

export let mousebind = writable();
export let magnification = writable(1);
export let direction = writable(0);
