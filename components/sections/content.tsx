// content.tsx - Updated with modern styling, coffee-themed subtle animations, better typography, and visual hierarchy

"use client";

import { Coffee, Leaf, Zap, TrendingUp, BarChart3, Target } from "lucide-react";

const Content = () => {
  return (
    <div className="my-20" id="scope">
      <div className="flex flex-col gap-16 max-w-5xl mx-auto px-6">
        {/* Scope - Enhanced with floating icon */}
        <div className="relative p-10 rounded-3xl border border-amber-300/40 dark:border-amber-700/30 bg-gradient-to-br from-amber-50/80 to-orange-50/80 dark:from-amber-950/70 dark:to-orange-950/70 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-shadow duration-500">
          <div className="absolute -top-6 -right-6">
            <div className="relative w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float-smooth">
              <Coffee className="w-10 h-10 text-white animate-rotate-coffee" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-6 tracking-tight">
            Research Project Scope
          </h2>
          <p className="text-amber-800 dark:text-amber-200 text-lg md:text-xl leading-relaxed font-light">
            This comprehensive AI system modernizes Sri Lankan coffee production by integrating machine learning, computer vision, and data analytics across the entire value chain. From plant health monitoring to yield estimation, price forecasting, workforce planning, and automated quality assessment, our solution empowers farmers, exporters, logistics managers, and policymakers with actionable insights. By combining advanced technologies with local expertise, we enhance productivity, reduce losses, and strengthen global competitiveness.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="relative p-10 rounded-3xl border border-amber-300/40 dark:border-amber-700/30 bg-gradient-to-br from-yellow-50/80 to-amber-50/80 dark:from-yellow-950/70 dark:to-amber-950/70 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-shadow duration-500">
          <div className="absolute -bottom-6 -left-6">
            <div className="relative w-16 h-16 bg-gradient-to-br from-amber-600 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-6 tracking-tight">
            Research Problem
          </h2>
          <p className="text-amber-800 dark:text-amber-200 text-lg md:text-xl leading-relaxed font-light">
            Sri Lankan coffee farmers face significant challenges including disease identification delays, unpredictable market prices, inefficient resource allocation, and inconsistent quality grading. These limitations reduce productivity, increase losses, and hinder export competitiveness. There is a critical need for intelligent, data-driven decision support systems that can address these multi-faceted challenges across the entire production and export ecosystem.
          </p>
        </div>

        {/* Objectives - Card layout with icons */}
        <div className="relative p-10 rounded-3xl border border-amber-300/40 dark:border-amber-700/30 bg-gradient-to-br from-orange-50/80 to-amber-50/80 dark:from-orange-950/70 dark:to-amber-950/70 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-shadow duration-500">
          <div className="absolute -top-6 -left-6">
            <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-8 tracking-tight">
            Research Objectives
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Leaf, text: "Develop AI models for early identification of coffee plant diseases with high accuracy" },
              { icon: TrendingUp, text: "Create machine learning models to forecast coffee production under various conditions" },
              { icon: BarChart3, text: "Build forecasting systems for domestic and global coffee price trends" },
              { icon: Zap, text: "Develop predictive systems for labor and transportation planning" },
              { icon: Coffee, text: "Implement automated bean classification and defect detection systems" },
              { icon: Target, text: "Create a unified platform enabling seamless data flow and decision-making" },
            ].map((obj, i) => (
              <li
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/40 dark:bg-neutral-800/40 backdrop-blur-sm border border-amber-100/50 dark:border-amber-800/40 hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 shadow-md">
                  <obj.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-amber-900 dark:text-amber-200 text-base leading-relaxed">
                  <strong className="text-amber-700 dark:text-amber-300">{obj.text.split(":")[0]}:</strong>{" "}
                  {obj.text.split(":")[1] || obj.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;