import Link from "next/link";

const Nav = () => {
  return (
    <section className="bg-amber-100/70 px-6 py-4">
      <nav className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div>Logo</div>
          <div className="flex items-center gap-2">
            <Link href="#about">About</Link>
            <Link href="#works">Works</Link>
            <Link href="#output">Output</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Nav