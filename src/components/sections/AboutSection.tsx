const AboutSection = () => {
  return (
    <section id="about" className="bg-muted py-10">
      <div className="max-w-4xl mx-auto p-10">
        <h2 className="font-extrabold text-2xl border-l-4 border-primary pl-3 mb-4">
          ABOUT ME
        </h2>
        <div className="pl-4">
          <p className="mb-2">福岡市在住</p>
          <p className="mb-2">
            30年以上勤めた放送局を2025年退社。<br></br>
            起業家×エンジニア養成学校G's（ジーズ：旧ジーズアカデミー）に入学、
            <br></br>
            毎日6〜11時間をプログラミング、アプリ開発に没頭し、2025年10月卒業。その後も、独学＆G'sコミュニティーで学習を継続しています。そしてこの学びを生かして誰かのお役に立つことが望みです。
          </p>
          <p>
            最近は主に<span className="font-bold text-primary text-lg">React</span>、
            <span className="font-bold text-primary text-lg">TypeScript</span>、
            <span className="font-bold text-primary text-lg">Next.js</span>
            を使ったアプリのコードを書いています。
          </p>
          <p className="mb-2">
            AIによるコーディング全盛時代、学習においては、AIの助けは借りつつも、できるだけ自力で解決するのが好きです。
          </p>
          <p className="">
            趣 味: <span className="text-red-500 font-semibold text-xl">森高千里</span>さんの推し活
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
