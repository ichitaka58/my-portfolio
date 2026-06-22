import Image from "next/image";

const SkillsSection = () => {

  return (
    <section id="skills" className="bg-background py-10">
      <div className="max-w-4xl mx-auto p-10">
        <p className="text-sm font-bold text-muted-foreground ml-5">学習経験</p>
        <h2 className="text-2xl font-bold border-l-4 border-primary pl-3 mb-6">
          Skills & Learning
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
        <p className="text-muted-foreground ml-4">
          このほか、Docker、Python..なども使っています。
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;
