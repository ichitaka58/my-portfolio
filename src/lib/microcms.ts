import { Work, WorkContent, WorksResult } from "@/types/work";
import { createClient } from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getWorks = async (): Promise<WorksResult> => {
  try {
    const data = await client.getList<WorkContent>({
      endpoint: "works",
      queries: {
        fields: "id,title,description,skills,eyecatch,github,url",
      },
    });
    return {
      ok: true,
      works: data.contents.map((content) => ({
        id: content.id,
        title: content.title,
        description: content.description,
        skills: content.skills.map((skill) => skill.skillName),
        image: content.eyecatch.url,
        github: content.github,
        url: content.url,
      })),
    };
  } catch (error) {
    console.error("Failed to fetch works:", error);
    return { ok: false };
  }

  // try {
  //   const data = await client.get<MicrocmsResponse>({
  //     endpoint: "works",
  //     queries: {
  //       fields: "id,title,description,skills,eyecatch.url,github,url",
  //     },
  //   });
  //   if (!data.contents) {
  //     throw new Error("コンテンツがありません");
  //   }
  //   return data.contents.map((content: MicrocmsContent) => ({
  //     id: content.id,
  //     title: content.title,
  //     description: content.description,
  //     skills: content.skills.map((skill) => skill.skillName),
  //     image: content.eyecatch.url,
  //     github: content.github,
  //     url: content.url,
  //   }));
  // } catch (error) {
  //   console.error("Error:", error);
  //   return [];
  // }
};
