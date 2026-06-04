import { MicroCMSImage } from "microcms-js-sdk";

export type Work = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  image: string;
  github: string;
  url?: string;
};

export type WorkContent = {
  title: string;
  description: string;
  skills: { skillName: string }[];
  eyecatch: MicroCMSImage;
  github: string;
  url?: string;
};

export type WorksResult = { ok: true; works: Work[] } | { ok: false };
