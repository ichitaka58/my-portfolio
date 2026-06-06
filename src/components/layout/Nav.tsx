import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <section className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border px-6 py-4">
      <nav className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-primary font-semibold">ichitaka58</Link>
          <div className="flex items-center gap-4 font-semibold">
            <Link href="#about">About</Link>
            <Link href="#skills">skills</Link>
            <Link href="#works">Works</Link>
            <Link href="#output">Output</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
