import Image from "next/image";

const SkillsSection = () => {
  // const SKILLS = [
  //   {
  //     id: "laravel",
  //     skillName: "Laravel",
  //     path: "/laravel-logolockup-rgb-red.svg",
  //   },
  //   {
  //     id: "react",
  //     skillName: "React",
  //     path: "/react-logo.svg",
  //   },
  //   {
  //     id: "typescript",
  //     skillName: "TypeScript",
  //     path: "/ts-lettermark-blue.svg",
  //   },
  //   {
  //     id: "nextjs",
  //     skillName: "Next.js",
  //     path: "/nextjs-logotype-light-background.svg",
  //   },
  //   {
  //     id: "github",
  //     skillName: "GitHub",
  //     path: "/GitHub_Lockup_Black.svg",
  //   },
  // ];

  return (
    <section id="skills" className="bg-background py-10">
      <div className="max-w-4xl mx-auto p-10">
        <p className="text-muted-foreground font-semibold text-sm ml-4">Skills</p>
        <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-6">
          スキル:学習経験
        </h2>
        <div className="flex flex-col sm:flex-row items-center flex-wrap gap-8 pl-4 mb-8">
          <Image
            src="/laravel-logolockup-rgb-red.svg"
            alt="laravel-logo"
            width={240}
            height={80}
            className="object-cover"
          />
          <Image
            src="/react-logo.svg"
            alt="react-logo"
            width={100}
            height={80}
            className="object-contain justify-items-center"
          />
          <Image
            src="/ts-lettermark-blue.svg"
            alt="typescript-logo"
            width={240}
            height={80}
            className="object-contain ml-4"
          />
          <Image
            src="/nextjs-logotype-light-background.svg"
            alt="nextjs-logo"
            width={240}
            height={80}
            className="object-contain ml-4"
          />
          <Image
            src="/GitHub_Lockup_Black.svg"
            alt="github-logo"
            width={240}
            height={80}
            className="object-contain ml-4"
          />
        </div>
        <p className="text-muted-foreground ml-4">このほか、Docker、Python..なども使っています。</p>
      </div>
    </section>
  );
};

export default SkillsSection;
