import { WorkContent, WorksResult } from "@/types/work";
import { createClient } from "microcms-js-sdk";

// 関数内ではなくモジュール読み込み時にチェックすることで、起動時に即座にエラーを検出できる
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// Client SDKの初期化
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// microCMSから制作実績(works)一覧を取得する
export const getWorks = async (): Promise<WorksResult> => {
  try {
    // fields で必要なフィールドのみ取得し、レスポンスサイズを削減する
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

};
