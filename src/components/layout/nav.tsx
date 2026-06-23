"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";

const Nav = () => {
  return (
    <section className="sticky top-0 z-50 bg-card backdrop-blur-sm border-b border-border px-6 py-4">
      <nav className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="#">
            <Image
              src="/ichitaka58_logo_navy.png"
              alt="ichitaka58_logo"
              width={1805}
              height={377}
              style={{ width: "120px", height: "auto" }}
            />
          </Link>
          <div className="hidden sm:flex sm:items-center sm:gap-4 sm:font-semibold sm:text-card-foreground">
            <Link
              href="#about"
              className="hover:underline underline-offset-4 decoration-4 decoration-muted"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="hover:underline underline-offset-4 decoration-4 decoration-muted"
            >
              Skills
            </Link>
            <Link
              href="#works"
              className="hover:underline underline-offset-4 decoration-4 decoration-muted"
            >
              Works
            </Link>
            <Link
              href="#output"
              className="hover:underline underline-offset-4 decoration-4 decoration-muted"
            >
              Articles
            </Link>
            <Link
              href="#contact"
              className="hover:underline underline-offset-4 decoration-4 decoration-muted"
            >
              Contact
            </Link>
          </div>
          {/* スマホサイズ ドロップダウンメニュー */}
          <div className="sm:hidden no-print">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <Menu />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <Link href="#about">
                    <DropdownMenuItem className="focus:bg-primary/50">
                      About
                    </DropdownMenuItem>
                  </Link>
                  <Link href="#skills">
                    <DropdownMenuItem className="focus:bg-primary/50">
                      Skills
                    </DropdownMenuItem>
                  </Link>
                  <Link href="#works">
                    <DropdownMenuItem className="focus:bg-primary/50">
                      Works
                    </DropdownMenuItem>
                  </Link>
                  <Link href="#output">
                    <DropdownMenuItem className="focus:bg-primary/50">
                      Articles
                    </DropdownMenuItem>
                  </Link>
                  <Link href="#contact">
                    <DropdownMenuItem className="focus:bg-primary/50">
                      Contact
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
