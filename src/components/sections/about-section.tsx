const AboutSection = () => {
  return (
    <section id="about" className="bg-muted py-10 text-foreground">
      <div className="max-w-4xl mx-auto p-10">
        <h2 className="font-extrabold text-2xl border-l-4 border-primary pl-3 mb-4">
          ABOUT ME
        </h2>
        <div className="pl-4">
          <p className="mb-2">
            <span className="font-semibold">福岡市</span>在住
          </p>
          <p className="mb-2">
            放送局で主に番組編成、バックオフィス、マネジメントを経験。30年以上勤め2025年退社。
            <br />
            起業家×エンジニア養成学校<span className="font-bold text-lg">G's</span>
            （ジーズ：旧ジーズアカデミー）に入学、
            <br />
            毎日6〜11時間をプログラミング、アプリ開発に没頭し、2025年10月卒業。
            <br />
            その後も、独学＆G'sコミュニティーで学習を継続しています。これまでの経験とアプリ開発の学びを生かして誰かのお役に立つことが望みです。
          </p>
          <p>
            最近では主に
            <span className="font-bold text-primary text-lg">React</span>、
            <span className="font-bold text-primary text-lg">TypeScript</span>、
            <span className="font-bold text-primary text-lg">Next.js</span>
            を使ったアプリのコードを書いています。
          </p>
          <p className="mb-2">
            学習においては、AIの助けは借りつつも、できるだけ自力で解決するのが好きです。
            <br />
            一方で、AIによるコーディング全盛時代、「何をつくるか」がより重要になってきたことも意識しています。
          </p>
          <p>
            <span className="font-semibold">✅今年度の目標</span>:
            <span className="pl-2">
              <span className="font-semibold">GitHub</span>の
              <span className="text-lg font-semibold text-green-700">"草"</span>
              を絶やさないこと
            </span>
          </p>
          <p>
            <span className="font-semibold">✅趣 味</span>:
            <span className="text-red-500 font-semibold text-lg pl-1">
              森高千里
            </span>
            さんの推し活
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
