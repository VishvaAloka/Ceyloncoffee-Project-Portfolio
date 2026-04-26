"use client";

import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  FilePlus,
  FileCheck,
  Book,
  GraduationCap,
  Coffee,
  ArrowUpRight,
  Sparkles,
  Download,
  Bookmark,
} from "lucide-react";
import Link from "next/link";

interface DocumentItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
  delay: number;
}

const documents: DocumentItem[] = [
  {
    title: "Project Charter",
    description:
      "A formal, typically short document that describes the project in its entirety – including objectives and how it will be carried out.",
    icon: <FileText className="text-blue-500 size-10" />,
    link: "https://drive.google.com/drive/folders/1vM0gznTIdxMZh1AEEqNMdpf3agRaFARl",
    color: "from-blue-500 to-cyan-500",
    delay: 0,
  },
  {
    title: "Project Proposal",
    description:
      "A core document that helps focus on the substance of the proposed plan, using an easy-to-follow project proposal outline.",
    icon: <FilePlus className="text-orange-500 size-10" />,
    link: "https://drive.google.com/drive/folders/1VBpPgZJ6g0gHqrFvE6EhcRrjqRalOI6I",
    color: "from-orange-500 to-amber-500",
    delay: 1,
  },
  {
    title: "Checklist",
    description:
      "A list of tasks to be completed, providing details on meeting discussions and progress tracking.",
    icon: <FileCheck className="text-pink-500 size-10" />,
    link: "https://drive.google.com/drive/folders/1w3gve9gSp8lNGXVnQBvMR8NyTqu6KiRE",
    color: "from-pink-500 to-rose-500",
    delay: 2,
  },
  {
    title: "Logbook",
    description:
      "A record of daily activities, providing details on meeting discussions and progress tracking.",
    icon: <FileCheck className="text-yellow-500 size-10" />,
    link: "https://drive.google.com/drive/folders/1m1s_RKWXD_49C6hfP4Kyzt08sqmyeYo3",
    color: "from-yellow-500 to-orange-500",
    delay: 3,
  },
  {
    title: "Research Paper",
    description:
      "Academic writing based on original research, including analysis and interpretation of findings.",
    icon: <Book className="text-green-500 size-10" />,
    link: "https://drive.google.com/drive/folders/12eJX9mtBBsZjtnNyc1yXukefT_N9vb40",
    color: "from-green-500 to-emerald-500",
    delay: 4,
  },
  {
    title: "Thesis",
    description:
      "A comprehensive document showcasing research findings, methodology, and expertise, contributing to academic insights.",
    icon: <GraduationCap className="text-purple-500 size-10" />,
    link: "https://drive.google.com/drive/folders/10HNwPGCAJ0ZLWMc4phkfo2V2KT2K-Vbp",
    color: "from-purple-500 to-violet-500",
    delay: 5,
  },
];

export default function Documents() {
  return (
    <section className="container mx-auto py-16 px-4 relative overflow-hidden" id="documents">
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes coffeeSwing {
          0%, 100% { transform: rotate(-15deg) translateY(0); }
          50% { transform: rotate(15deg) translateY(-8px); }
        }

        @keyframes coffeeBob {
          0%, 100% { transform: translateY(0px); }
          25% { transform: translateY(-12px); }
          50% { transform: translateY(-2px); }
          75% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes floatSmooth {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(217, 119, 6, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(217, 119, 6, 0.4);
          }
        }

        @keyframes shimmerBorder {
          0%, 100% {
            border-color: rgba(217, 119, 6, 0.3);
          }
          50% {
            border-color: rgba(217, 119, 6, 0.6);
          }
        }

        @keyframes scaleInBounce {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatBg {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(30px) scale(1.05); }
        }

        @keyframes downloadBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.1); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bookmarkFlip {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }

        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(217, 119, 6, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(217, 119, 6, 0.6));
          }
        }

        .animate-slide-up {
          animation: slideInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-coffee-swing {
          animation: coffeeSwing 2.5s ease-in-out infinite;
        }

        .animate-coffee-bob {
          animation: coffeeBob 3.2s ease-in-out infinite;
        }

        .animate-float-smooth {
          animation: floatSmooth 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2.5s ease-in-out infinite;
        }

        .animate-shimmer-border {
          animation: shimmerBorder 2s ease-in-out infinite;
        }

        .animate-scale-bounce {
          animation: scaleInBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-bookmark-flip {
          animation: bookmarkFlip 2.5s ease-in-out infinite;
        }

        .animate-download-bounce {
          animation: downloadBounce 2.2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }

        .document-card {
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 2px solid rgba(217, 119, 6, 0.25);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(254, 242, 242, 0.5));
          backdrop-filter: blur(8px);
          box-shadow: 0 8px 32px rgba(217, 119, 6, 0.08);
        }

        .dark .document-card {
          background: linear-gradient(135deg, rgba(17, 24, 39, 0.85), rgba(120, 53, 15, 0.25));
          border-color: rgba(217, 119, 6, 0.3);
        }

        .document-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.08), rgba(245, 158, 11, 0.04));
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 1;
        }

        .document-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.3), rgba(245, 158, 11, 0.1), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .document-card:hover {
          transform: translateY(-16px) scale(1.02);
          border-color: rgba(217, 119, 6, 0.5);
          box-shadow: 0 35px 60px rgba(217, 119, 6, 0.25);
        }

        .document-card:hover::before {
          opacity: 1;
        }

        .document-card:hover::after {
          opacity: 1;
        }

        .icon-wrapper {
          position: relative;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 8px;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .document-card:hover .icon-wrapper {
          transform: scale(1.25) rotate(18deg);
        }

        .icon-bg {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.2), rgba(245, 158, 11, 0.12));
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(217, 119, 6, 0.25);
        }

        .document-card:hover .icon-bg {
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.4), rgba(245, 158, 11, 0.25));
          border-color: rgba(217, 119, 6, 0.5);
          box-shadow: inset 0 0 20px rgba(217, 119, 6, 0.15);
        }

        .document-icon {
          position: relative;
          z-index: 2;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.12));
        }

        .document-card:hover .document-icon {
          filter: drop-shadow(0 0 16px rgba(217, 119, 6, 0.5));
          transform: scale(1.15);
        }

        .card-title-link {
          position: relative;
          display: inline-block;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          color: inherit;
          text-decoration: none;
        }

        .card-title-link::before {
          content: '';
          position: absolute;
          inset: -4px -8px;
          background: rgba(217, 119, 6, 0.08);
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .card-title-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #d97706 0%, #f59e0b 50%, #d97706 100%);
          transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 2px;
        }

        .document-card:hover .card-title-link::before {
          opacity: 1;
        }

        .document-card:hover .card-title-link::after {
          width: 100%;
        }

        .download-button {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
          border: 2.5px solid rgba(255, 255, 255, 0.9);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: scale(0.6) translateY(20px);
          box-shadow: 0 12px 32px rgba(217, 119, 6, 0.35);
          cursor: pointer;
          outline: none;
          margin-top: auto;
          align-self: flex-end;
        }

        .dark .download-button {
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 12px 32px rgba(217, 119, 6, 0.25);
        }

        .document-card:hover .download-button {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .download-button:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 18px 48px rgba(217, 119, 6, 0.45);
        }

        .download-button:active {
          transform: scale(0.95) translateY(0);
        }

        .download-button-icon {
          color: white;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: downloadBounce 2.2s ease-in-out infinite;
        }

        .download-button:hover .download-button-icon {
          animation: none;
          transform: translateY(-3px);
        }

        .accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, transparent, rgba(217, 119, 6, 0.6), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 2px;
        }

        .document-card:hover .accent-line {
          opacity: 1;
        }

        .badge-ring {
          position: absolute;
          inset: -4px;
          border: 2px solid rgba(217, 119, 6, 0.4);
          border-radius: 20px;
          animation: glow 2.5s ease-in-out infinite;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .document-card:hover .badge-ring {
          opacity: 1;
        }

        .card-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          z-index: 10;
        }
      `}</style>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-orange-200/12 dark:from-amber-800/20 dark:to-orange-800/12 rounded-full blur-3xl animate-pulse"
          style={{ animation: 'floatBg 8s ease-in-out infinite' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-yellow-200/12 to-amber-200/8 dark:from-yellow-800/12 dark:to-amber-800/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '3s', animation: 'floatBg 10s ease-in-out infinite reverse' }} />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-bl from-orange-200/10 to-amber-200/5 dark:from-orange-800/10 dark:to-amber-800/5 rounded-full blur-3xl"
          style={{ animation: 'floatBg 12s ease-in-out infinite' }} />
      </div>

      <div className="relative z-10">
        {/* Header with animated icons */}
        <div className="text-center mb-6 animate-slide-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Bookmark className="w-10 h-10 text-amber-700 dark:text-amber-300 animate-bookmark-flip" strokeWidth={2.2} />
            <h2 className="section-title anim-fade-down d-100 font-display mb-5">
              DOCUMENTS
            </h2>
            <Coffee className="w-10 h-10 text-amber-700 dark:text-amber-300 animate-coffee-bob" strokeWidth={2.2} />
          </div>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full" />
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-8 text-base md:text-lg leading-relaxed animate-slide-up delay-100">
          Here you can find a <span className="font-semibold text-amber-700 dark:text-amber-400">collection of essential documents</span> that provide a comprehensive overview of our research projects. These documents serve as valuable resources, offering insights into the <span className="font-semibold text-amber-700 dark:text-amber-400">objectives, plans, and progress</span> of our projects.
        </p>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="document-card animate-scale-bounce rounded-2xl p-7 md:p-8 relative group flex flex-col"
              style={{ animationDelay: `${doc.delay * 100}ms` }}
            >
              <div className="badge-ring" />

              <div className="card-wrapper">
                {/* Card Header */}
                <CardHeader className="flex flex-col items-center text-center pb-4 relative z-20">
                  <div className="icon-wrapper">
                    <div className="icon-bg" />
                    <div className="document-icon">
                      {doc.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl leading-tight font-bold mt-2">
                    <Link
                      href={doc.link}
                      className="card-title-link text-gray-900 dark:text-gray-50 transition-colors group-hover:text-amber-800 dark:group-hover:text-amber-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {doc.title}
                    </Link>
                  </CardTitle>
                </CardHeader>

                {/* Card Content */}
                <CardContent className="text-center text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed pb-6 relative z-20 flex-grow">
                  {doc.description}
                </CardContent>

                {/* Premium Download Button */}
                <Link
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-button group/badge"
                  title="Download Document"
                >
                  <Download className="download-button-icon w-7 h-7" strokeWidth={2.5} />
                </Link>
              </div>

              {/* Accent Line */}
              <div className={`accent-line text-${doc.color.split('-')[1]}-500`} />
            </div>
          ))}
        </div>

        {/* Bottom accent decoration */}
        <div className="relative h-20 flex items-center justify-center mt-16">
          <div className="flex gap-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 animate-pulse shadow-lg shadow-amber-500/40"
                style={{
                  animationDelay: `${i * 200}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
