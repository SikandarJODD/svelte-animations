import type { ComponentType } from "svelte";

export type AceternityUI = {
  id: string;
  title: string;
  desc?: string;
  tags?: string[];
  preview?: PreviewComponent;
  installations: Installation[];
  examples?: Examples[];
};
type Installation = {
  desc: string;
  allcode: InstallationCode[];
};

// Installation Code
type InstallationCode = {
  title: string;
  code: string;
  desc?: string;
  language?: string;
  filename?: string;
  class ? : string;
};

type PreviewComponent = {
  comp: ComponentType; // Preview
  allcode: SingleCode[];
  isgrid?: boolean;
  isgridCenter?: boolean;
  class ? : string;
};

type Examples = {
  title: string;
  desc?: string;
  preview: PreviewComponent;
};
type SingleCode = {
  code: string;
  language?: string;
  filename?: string;
  class ? : string;
};
