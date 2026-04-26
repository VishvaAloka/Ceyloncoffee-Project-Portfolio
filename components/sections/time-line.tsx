"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Coffee, Lightbulb, PresentationIcon, TrendingUp, FileText, Zap, BookOpen, Trophy, Droplet } from "lucide-react";

const milestones = [
  {
    date: "May 30, 2025",
    title: "Awareness Session",
    description:
      "Awareness session for the research project and, we had to select a supervisor.",
    color: "from-amber-700 to-amber-800",
    lightColor: "from-amber-50 to-orange-50",
    borderColor: "border-amber-300",
    icon: Coffee,
  },
  {
    date: "July 14, 2025",
    title: "Topic Evaluation",
    description: "In this stage the Topic we selected been evaluated.",
    color: "from-yellow-500 to-amber-600",
    lightColor: "from-yellow-50 to-amber-50",
    borderColor: "border-yellow-300",
    icon: Lightbulb,
  },
  {
    date: "August 05, 2025",
    title: "Project Proposal Presentation",
    description:
      "A project proposal is prepared to make an offer and to try to convince a supervisor or a future customer to accept it.",
    color: "from-orange-500 to-red-600",
    lightColor: "from-orange-50 to-red-50",
    borderColor: "border-orange-300",
    icon: PresentationIcon,
  },
  {
    date: "January 05, 2026",
    title: "Progress Presentation 1",
    description: "In this stage we had to show our progress up to 50%.",
    color: "from-blue-600 to-blue-700",
    lightColor: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-300",
    icon: TrendingUp,
  },
  {
    date: "February 15, 2026",
    title: "Research Paper",
    description: "Published research findings and methodology.",
    color: "from-teal-500 to-cyan-600",
    lightColor: "from-teal-50 to-cyan-50",
    borderColor: "border-teal-300",
    icon: FileText,
  },
  {
    date: "March 09, 2026",
    title: "Progress Presentation 2",
    description: "Demonstrated 90% progress.",
    color: "from-green-500 to-emerald-600",
    lightColor: "from-green-50 to-emerald-50",
    borderColor: "border-green-300",
    icon: Zap,
  },
  {
    date: "April 11, 2026",
    title: "Thesis Submission",
    description: "Thesis paper of the project.",
    color: "from-slate-700 to-slate-800",
    lightColor: "from-slate-50 to-gray-50",
    borderColor: "border-slate-300",
    icon: BookOpen,
  },
  {
    date: "April 26, 2026",
    title: "Final Presentation and viva",
    description: "Finalized and Demonstrated 100% progress.",
    color: "from-purple-700 to-pink-700",
    lightColor: "from-purple-50 to-pink-50",
    borderColor: "border-purple-300",
    icon: Trophy,
  },
];

// Coffee droplet animation component
const CoffeeDroplet = ({ delay }: { delay: number }) => {
  const [leftPosition, setLeftPosition] = React.useState<number>(0);

  React.useEffect(() => {
    // Generate random position only on client side after hydration
    setLeftPosition(Math.random() * 100);
  }, []);

  return (
    <div
      className="absolute animate-float"
      style={{
        animation: `float 4s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        left: `${leftPosition}%`,
        top: `-20px`,
      }}
    >
      <Droplet className="w-3 h-3 text-amber-800 opacity-40" fill="currentColor" />
    </div>
  );
};

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="container mx-auto px-4 py-20 md:py-32 relative overflow-hidden" id="milestones">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Premium Header Section */}
      <div className="text-center mb-20 relative">
        <div className="inline-flex items-center justify-center mb-8 relative group">
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Coffee cup with enhanced animation */}
          <div className="relative animate-bounce" style={{ animationDuration: "2.5s" }}>
            <Coffee className="w-20 h-20 text-amber-700 relative drop-shadow-xl" />
          </div>

          {/* Coffee droplets animation */}
          <div className="absolute -top-8 -right-8 w-24 h-24 pointer-events-none">
            {[0, 1, 2].map((i) => (
              <CoffeeDroplet key={i} delay={i * 1.2} />
            ))}
          </div>
        </div>

        {/* Premium gradient heading */}
        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-800 via-amber-600 to-orange-500 bg-clip-text text-transparent mb-6 tracking-tight">
          PROJECT MILESTONES
        </h2>
        
        {/* Decorative underline */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
          <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" style={{ animationDelay: "0.6s" }}></div>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed font-light">
          Track the significant milestones achieved throughout our research journey. Each milestone represents a crucial stage of progress and key activities accomplished.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative mt-24">
        {/* Animated center line with gradient */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent rounded-full shadow-2xl"></div>

        {/* Coffee steam effect on timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full opacity-30">
          <div className="h-full bg-gradient-to-b from-amber-200 to-transparent animate-pulse rounded-full"></div>
        </div>

        <div className="space-y-20 md:space-y-16 relative">
          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            const Icon = milestone.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Mobile Layout */}
                <div className="md:hidden">
                  {/* Timeline Marker */}
                  <div className={cn(
                    "absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 z-10 bg-gradient-to-br shadow-2xl flex items-center justify-center -top-6 cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-3xl",
                    `bg-gradient-to-br ${milestone.color}`
                  )}>
                    <Icon className="w-6 h-6 text-white animate-pulse" style={{ animationDuration: "2s" }} />
                  </div>

                  {/* Mobile Date Header */}
                  <div className={cn(
                    "text-white font-bold py-4 px-6 rounded-2xl text-center mb-4 relative bg-gradient-to-r shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 backdrop-blur-sm border border-white/20",
                    `bg-gradient-to-r ${milestone.color}`
                  )}>
                    <Icon className="w-5 h-5 animate-bounce" style={{ animationDuration: "2s" }} />
                    <span className="font-semibold tracking-wide">{milestone.date}</span>
                  </div>

                  {/* Mobile Content Card */}
                  <div className={cn(
                    "p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 backdrop-blur-sm bg-gradient-to-br",
                    `${milestone.lightColor} ${milestone.borderColor} bg-opacity-60 dark:bg-opacity-40`
                  )}>
                    <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3 flex items-center gap-2">
                      <div className={cn("w-1 h-6 rounded-full bg-gradient-to-b", milestone.color)}></div>
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  {/* Timeline Marker - Animated */}
                  <div className={cn(
                    "absolute left-1/2 top-8 -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white dark:border-gray-900 z-20 bg-gradient-to-br shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300",
                    isHovered ? "scale-130 shadow-3xl" : "hover:scale-125 hover:shadow-3xl",
                    `bg-gradient-to-br ${milestone.color}`
                  )}>
                    <Icon className="w-7 h-7 text-white animate-pulse" style={{ animationDuration: "2s" }} />
                  </div>

                  {/* Desktop Grid Layout */}
                  <div className="grid grid-cols-2 gap-12">
                    {isLeft ? (
                      <>
                        {/* Left side content */}
                        <div className="pr-12 flex flex-col justify-center">
                          {/* Date header */}
                          <div className={cn(
                            "text-white font-bold py-4 px-6 rounded-2xl mb-4 bg-gradient-to-r shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 backdrop-blur-sm border border-white/20 group-hover:scale-110",
                            `bg-gradient-to-r ${milestone.color}`
                          )}>
                            <Icon className="w-5 h-5 animate-bounce" style={{ animationDuration: "2s" }} />
                            <span className="font-semibold tracking-wide">{milestone.date}</span>
                          </div>

                          {/* Content Card */}
                          <div className={cn(
                            "p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 backdrop-blur-sm bg-gradient-to-br",
                            `${milestone.lightColor} ${milestone.borderColor} bg-opacity-60 dark:bg-opacity-40`
                          )}>
                            <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3 flex items-center gap-3">
                              <div className={cn("w-1.5 h-7 rounded-full bg-gradient-to-b", milestone.color)}></div>
                              {milestone.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                        <div></div>
                      </>
                    ) : (
                      <>
                        <div></div>
                        {/* Right side content */}
                        <div className="pl-12 flex flex-col justify-center">
                          {/* Date header */}
                          <div className={cn(
                            "text-white font-bold py-4 px-6 rounded-2xl mb-4 bg-gradient-to-r shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 backdrop-blur-sm border border-white/20 group-hover:scale-110",
                            `bg-gradient-to-r ${milestone.color}`
                          )}>
                            <Icon className="w-5 h-5 animate-bounce" style={{ animationDuration: "2s" }} />
                            <span className="font-semibold tracking-wide">{milestone.date}</span>
                          </div>

                          {/* Content Card */}
                          <div className={cn(
                            "p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 backdrop-blur-sm bg-gradient-to-br",
                            `${milestone.lightColor} ${milestone.borderColor} bg-opacity-60 dark:bg-opacity-40`
                          )}>
                            <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3 flex items-center gap-3">
                              <div className={cn("w-1.5 h-7 rounded-full bg-gradient-to-b", milestone.color)}></div>
                              {milestone.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS for custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(300px) translateX(30px);
            opacity: 0;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(217, 119, 6, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(217, 119, 6, 0.6);
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;