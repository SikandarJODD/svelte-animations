import { allAceternityUI } from "$lib/aceternity-ui/components/allAceternityUI";
import { allInstallations } from "$lib/aceternity-ui/docs/allinstallations";
import { animationExamples } from "$lib/examples/AnimationsExamples";
import { motionLearnings } from "$lib/framer-motion/MotionsLearnings";
import { allIndieUIComponents } from "$lib/indieui/allIndieUIComponents";
import { allLuxeComponents } from "$lib/luxe/components/AllLuxeComponents";
import { allMagicComponents } from "$lib/magicui/AllMagicComponents";
import { allTemplates } from "$lib/templates/allTemplates";

type EntryId = string | number | null | undefined;

type DynamicPrerenderSpec = {
  route: string;
  param: string;
  getIds: () => EntryId[];
};

export const dynamicPrerenderRegistry = {
  aComponents: {
    route: "/a/components/[componentID]",
    param: "componentID",
    getIds: () => allAceternityUI.map((item) => item.id),
  },
  aDocs: {
    route: "/a/docs/[docsID]",
    param: "docsID",
    getIds: () => allInstallations.map((item) => item.id),
  },
  examples: {
    route: "/examples/[exampleID]",
    param: "exampleID",
    getIds: () => animationExamples.map((item) => item.id),
  },
  indieUI: {
    route: "/in/[compID]",
    param: "compID",
    getIds: () => allIndieUIComponents.map((item) => item.id),
  },
  learnings: {
    route: "/learnings/[learningID]",
    param: "learningID",
    getIds: () => motionLearnings.map((item) => item.id),
  },
  luxe: {
    route: "/luxe/[componentID]",
    param: "componentID",
    getIds: () => allLuxeComponents.map((item) => item.id),
  },
  magic: {
    route: "/magic/[compID]",
    param: "compID",
    getIds: () => allMagicComponents.map((item) => item.id),
  },
  templates: {
    route: "/templates/[templateID]",
    param: "templateID",
    getIds: () => allTemplates.map((item) => item.id),
  },
} satisfies Record<string, DynamicPrerenderSpec>;

export type DynamicPrerenderRouteKey = keyof typeof dynamicPrerenderRegistry;

export function toParamEntries<TParam extends string>(
  param: TParam,
  ids: readonly EntryId[]
): Array<Record<TParam, string>> {
  const normalizedIds = Array.from(
    new Set(
      ids
        .map((id) => String(id ?? "").trim())
        .filter((id) => id.length > 0)
    )
  );

  return normalizedIds.map((id) => ({ [param]: id } as Record<TParam, string>));
}

export function getEntries(routeKey: DynamicPrerenderRouteKey) {
  const { param, getIds } = dynamicPrerenderRegistry[routeKey];
  return toParamEntries(param, getIds());
}

export const dynamicEntries = {
  aComponents: () => getEntries("aComponents"),
  aDocs: () => getEntries("aDocs"),
  examples: () => getEntries("examples"),
  indieUI: () => getEntries("indieUI"),
  learnings: () => getEntries("learnings"),
  luxe: () => getEntries("luxe"),
  magic: () => getEntries("magic"),
  templates: () => getEntries("templates"),
} as const;
