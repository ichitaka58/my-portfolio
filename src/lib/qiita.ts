import { ArticleResult, QiitaArticle } from "@/types/article";

// 関数内ではなくモジュール読み込み時にチェックすることで、起動時に即座にエラーを検出できる
if (!process.env.QIITA_TOKEN) {
  throw new Error("QIITA_TOKEN is required");
}


export const getArticles = async (): Promise<ArticleResult> => {
  try {
    // query=user: で投稿者を絞り込む（Qiita API の検索構文）
    const res = await fetch(
      "https://qiita.com/api/v2/items?query=user:ichitaka58&per_page=20",
      {
        headers: {
          Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );
    // res.json() は any を返すため、型アノテーションで明示する
    const articles: QiitaArticle[] = await res.json();
    return {
      ok: true,
      qiitaArticles: articles.map((article) => ({
        id: article.id,
        title: article.title,
        url: article.url,
      })),
    };
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return { ok: false };
  }
};
