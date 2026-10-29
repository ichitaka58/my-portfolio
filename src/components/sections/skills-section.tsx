import { Badge } from "../ui/badge";

const SkillsSection = () => {
  const FREQUENTLY_USED_SKILLS = ["TypeScript", "React", "Next.js", "PHP/Laravel", "TailwindCSS", "JavaScript", "GitHub"];
  const USED_IN_APP_SKILLS = ["Python", "Hono", "GitHub Actions", "Docker", "Cloudflare", "Firebase"];
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-background text-foreground py-10"
    >
      <div className="max-w-4xl mx-auto p-10">
        <p className="text-sm font-bold text-muted-foreground ml-5">学習経験</p>
        <h2
          id="skills-heading"
          className="text-2xl font-bold border-l-4 border-primary pl-3 mb-6"
        >
          Skills & Learning
        </h2>
        <p className="text-muted-foreground mb-6 pl-4">
          これまでに学んだ言語やライブラリ、ツール等です。<br></br>
          開発現場経験はありませんので、学習経験、個人開発レベルとなります。
        </p>
        <h3 className="text-foreground mb-6 pl-4">▪️使用頻度の多いもの</h3>
        <div className="flex flex-wrap gap-1 mb-6 pl-6">
          {FREQUENTLY_USED_SKILLS.map((skill) => (
            <Badge
              key={skill}
              className="shadow text-xs bg-primary/70 font-bold"
            >
              {skill}
            </Badge>
          ))}
        </div>
        <img
          src="https://skillicons.dev/icons?i=typescript,react,nextjs,php,laravel,tailwind,js,github"
          alt="スキルアイコン"
          className="mb-6 pl-6"
        />
        <h3 className="text-foreground mb-6 pl-4">▪️アプリで使用経験あり</h3>
        <div className="flex flex-wrap gap-1 mb-6 pl-6">
          {USED_IN_APP_SKILLS.map((skill) => (
            <Badge
              key={skill}
              className="shadow text-xs  bg-primary/70 font-bold"
            >
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 mb-6 pl-6">
          <img src="https://skillicons.dev/icons?i=python" alt="" />
          <img src="https://skills.syvixor.com/api/icons?i=hono" alt="" />
          <img
            src="https://skillicons.dev/icons?i=githubactions,docker,cloudflare,firebase"
            alt=""
          />
        </div>
        <h3 className="text-foreground mb-6 pl-4">
          ▪️AWS :
          エクスパンション講座2回受講し、ハンズオンでEC2へのデプロイを経験
        </h3>
        <img
          src="https://skillicons.dev/icons?i=aws"
          alt=""
          className="mb-6 pl-6"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
