export type QiitaArticle = {
  id: string;
  title: string;
  url: string;
};

export type ArticleResult =
  | {
      ok: true;
      qiitaArticles: QiitaArticle[];
    }
  | { ok: false };
