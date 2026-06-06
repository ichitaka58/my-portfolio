import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-linear-to-br from-background via-background to-indigo-100/60 h-screen">
      <div className="max-w-4xl mx-auto p-10">
        <div className="flex items-center gap-2">
          <Image
            src="/ichitaka58_logo.png"
            alt="logo"
            width={80}
            height={80}
            className="rounded-full aspect-square"
          />
          <h1 className="text-4xl sm:text-6xl font-bold bg-linear-to-r from-indigo-700 via-indigo-500 to-violet-500 bg-clip-text text-transparent">ichitaka58</h1>
        </div>
        <p className="text-xs sm:text-base">
          30年以上勤めたTV業界を退社、<br></br>
          Over50でプログラミングに没頭する人
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
