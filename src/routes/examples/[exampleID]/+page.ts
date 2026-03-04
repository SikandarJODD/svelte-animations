import { dynamicEntries } from "$lib/config/dynamic-prerender-routes";

export const prerender = true;
export const entries = () => dynamicEntries.examples();
