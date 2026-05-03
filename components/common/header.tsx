"use client";

import * as React from "react";
import { Menu, ArrowRight, Coffee, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toogle";

const Header = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-4">
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex sm:mx-10 md:mx-0 border-2 border-amber-200 dark:border-amber-900 px-6 py-3 rounded-full mx-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 shadow-md">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 group">
                <Coffee className="text-amber-700 dark:text-amber-500 group-hover:rotate-12 transition-transform" />
                <span className="text-xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 dark:from-amber-400 dark:to-orange-300 bg-clip-text text-transparent">
                  Ceylon Coffee
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                className={cn(
                  "text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#scope"
                onClick={(e) => scrollToSection(e, "scope")}
              >
                Research Scope
              </Link>
              <Link
                className={cn(
                  "text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#milestones"
                onClick={(e) => scrollToSection(e, "milestones")}
              >
                Milestones
              </Link>
              <Link
                className={cn(
                  "text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#documents"
                onClick={(e) => scrollToSection(e, "documents")}
              >
                Publications
              </Link>
              <Link
                className={cn(
                  "text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#presentations"
                onClick={(e) => scrollToSection(e, "presentations")}
              >
                Presentations
              </Link>
              <Link
                className={cn(
                  "text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#team"
                onClick={(e) => scrollToSection(e, "team")}
              >
                Research Team
              </Link>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Link
              href="https://github.com/VishvaAloka/Ceyloncoffee-Project-Portfolio"
              target="_blank"
            >
              <Github size={15} className="text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors" />
            </Link>
            <ThemeToggle />
          </div>
        </nav>

        {/* mobile navbar */}
        <div className="block lg:hidden mx-5">
          <div className="flex items-center justify-between bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 border-2 border-amber-200 dark:border-amber-900 rounded-full px-4 py-2 shadow-md">
            <div className="flex items-center gap-2">
              <Sheet key="right">
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="border-amber-300 dark:border-amber-700">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto bg-gradient-to-b from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950" side="left">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex justify-between items-center gap-2 mt-5">
                        <div className="flex items-center gap-2">
                          <Link href="/" className="flex items-center gap-2 group">
                            <Coffee className="text-amber-700 dark:text-amber-500 group-hover:rotate-12 transition-transform" />
                            <span className="text-xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 dark:from-amber-400 dark:to-orange-300 bg-clip-text text-transparent">
                              Ceylon Coffee
                            </span>
                          </Link>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link
                            href="https://github.com/VishvaAloka/Ceyloncoffee-Project-Portfolio"
                            target="_blank"
                          >
                            <Github
                              size={15}
                              className="text-amber-800 dark:text-amber-400"
                            />
                          </Link>
                          <ThemeToggle />
                        </div>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mb-8 mt-8 flex flex-col gap-4">
                    <Link
                      href="#scope"
                      className="font-semibold text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200"
                      onClick={(e) => scrollToSection(e, "scope")}
                    >
                      Research Scope
                    </Link>
                    <Link
                      href="#milestones"
                      className="font-semibold text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200"
                      onClick={(e) => scrollToSection(e, "milestones")}
                    >
                      Milestones
                    </Link>
                    <Link
                      href="#documents"
                      className="font-semibold text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200"
                      onClick={(e) => scrollToSection(e, "documents")}
                    >
                      Publications
                    </Link>
                    <Link
                      href="#presentation"
                      className="font-semibold text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200"
                      onClick={(e) => scrollToSection(e, "presentations")}
                    >
                      Presentations
                    </Link>
                    <Link
                      href="#team" 
                      className="font-semibold text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200"
                      onClick={(e) => scrollToSection(e, "team")}
                    >
                      Research Team
                    </Link>
                  </div>
                  <div className="border-t border-amber-300 dark:border-amber-700 pt-4">
                    <div className="grid grid-cols-2 justify-start">
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-amber-700 dark:text-amber-400"
                        )}
                        href="#"
                      >
                        Press
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-amber-700 dark:text-amber-400"
                        )}
                        href="#"
                      >
                        Contact
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-amber-700 dark:text-amber-400"
                        )}
                        href="#"
                      >
                        Imprint
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-amber-700 dark:text-amber-400"
                        )}
                        href="#"
                      >
                        Sitemap
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-amber-700 dark:text-amber-400"
                        )}
                        href="#"
                      >
                        Legal
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-amber-700 dark:text-amber-400"
                        )}
                        href="#"
                      >
                        Cookie Settings
                      </Link>
                    </div>
                    <div className="mt-2 flex flex-col gap-3">
                      <Link href="#">
                        <Button variant="outline" className="w-full border-amber-300 dark:border-amber-700" disabled>
                          Log in
                        </Button>
                      </Link>
                      <Link href="#">
                        <Button className="group w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700" disabled>
                          Start For Free
                          <ArrowRight
                            className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Coffee className="text-amber-700 dark:text-amber-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 dark:from-amber-400 dark:to-orange-300 bg-clip-text text-transparent">
                Ceylon Coffee
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/your-coffee-research-repo"
                target="_blank"
              >
                <Github size={15} className="text-amber-800 dark:text-amber-400" />
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;