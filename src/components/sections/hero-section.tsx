import Image from "next/image";
import { Badge } from "../ui/badge";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-linear-to-br from-background via-background to-indigo-100/60 h-screen flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto p-10 flex flex-col justify-center items-center">
        <Badge variant="secondary" className="font-semibold mb-2">
          ✨ Open to Work
        </Badge>
        <div className="flex items-center gap-2 mb-10">
          <Image
            src="/ichitaka58_logo.png"
            alt="logo"
            width={80}
            height={80}
            className="rounded-full aspect-square"
          />
          <h1>
            <Image
              src="/ichitaka58_logo_navy.png"
              alt="ichitaka58_logo"
              width={1805}
              height={377}
              style={{ width: "360px", height: "auto" }}
            />
          </h1>
        </div>
        <p className="text-xs sm:text-base mb-10 sm:pl-10">
          30年以上勤めたTV業界を退社<br></br>
          Over50でプログラミングを始めた人
        </p>
        <div>
          <h3 className="text-center mb-4 font-semibold text-foreground/70">GitHub Contributions</h3>
          <img src="https://ghchart.rshah.org/ichitaka58" alt="ichitaka58's Github chart" className="w-full max-w-[720px]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
