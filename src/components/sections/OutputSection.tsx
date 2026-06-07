import { getArticles } from "@/lib/qiita";

const OutputSection = async () => {
  const result = await getArticles()
  return (
    <section id="output" className="bg-background py-10">
      <div className="max-w-4xl mx-auto p-10">
        <h2 className="text-2xl font-bold border-l-4 border-primary pl-3 mb-4">Articles</h2>
        <p className="text-muted-foreground mb-6 pl-4">Qiitaに投稿した記事一覧です</p>
        {!result.ok ? (
          <p>Qiita記事が取得できませんでした</p>
        ) : result.qiitaArticles.length < 0 ? (
          <p>表示できる記事がありません</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
            {result.qiitaArticles.map((article) => (
              <a key={article.id} href={article.url} target="_blank" rel="noopener noreferrer" className="p-6 bg-white border border-border rounded-lg shadow hover:shadow-lg">
                <p>{article.title}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default OutputSection