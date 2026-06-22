import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-muted h-100 border-b border-border"
    >
      <div className="max-w-4xl mx-auto p-10 h-full flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col items-center">
          <p className="text-muted-foreground text-sm font-semibold">CONTACT</p>
          <h2 className="text-2xl font-bold">お問い合わせ</h2>
        </div>
        <p className="text-foreground">
          お仕事・勉強会など、お気軽にお問い合わせください。
        </p>
        <div className="flex gap-4">
          <div className="w-8 h-8 bg-card border border-border rounded flex items-center justify-center">
            <a
              href="https://github.com/ichitaka58"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="w-8 h-8 bg-card border border-border rounded flex items-center justify-center">
            <a href="https://x.com/taka_ichi58" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection