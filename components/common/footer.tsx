import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Coffee } from "lucide-react";
import { SubscribeForm } from "./subscribe-form";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-950 border-t-2 border-x-2 border-amber-200 dark:border-amber-900 rounded-t-3xl shadow-2xl">
      <div className="hidden md:block relative w-full h-72 overflow-hidden rounded-t-3xl">
        <Image
          src="/images/footer_image.jpg"
          alt="coffee-research-footer"
          fill
          className="object-cover opacity-40 dark:opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-100/90 to-transparent dark:from-amber-950/90" />
      </div>
      <div className="container px-4 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <Coffee className="text-amber-700 dark:text-amber-500 group-hover:rotate-12 transition-transform" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 dark:from-amber-400 dark:to-orange-300 bg-clip-text text-transparent">
                Ceylon Coffee
              </h2>
            </div>
            <p className="text-amber-800 dark:text-amber-300">
              Advancing coffee science through innovative research and sustainable practices.
            </p>
          </div>
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-200">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-4">
              <Link 
                href="#" 
                className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 hover:underline transition-colors"
              >
                Home
              </Link>
              <Link 
                href="#scope" 
                className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 hover:underline transition-colors"
              >
                Research Scope
              </Link>
              <Link 
                href="#milestones" 
                className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 hover:underline transition-colors"
              >
                Milestones
              </Link>
              <Link 
                href="#documents" 
                className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 hover:underline transition-colors"
              >
                Publications
              </Link>
              <Link 
                href="#presentations" 
                className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 hover:underline transition-colors"
              >
                Presentations
              </Link>
              <Link 
                href="#team" 
                className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 hover:underline transition-colors"
              >
                Research Team
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-200">
              Subscribe to our newsletter
            </h3>
            <SubscribeForm />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 mt-8 pt-8 border-t-2 border-amber-300 dark:border-amber-800 sm:flex-row">
          <p className="text-sm text-amber-800 dark:text-amber-400">
            © {new Date().getFullYear()} Coffee Research Project. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-amber-700 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-amber-700 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-amber-700 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-amber-700 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;