"use client";

import React, { useId } from "react";
import { Leaf, TrendingUp, Truck, Award } from "lucide-react";

const grid = [
  {
    icon: Leaf,
    title: "Disease Detection & Yield Prediction",
    description:
      "Identify coffee plant diseases using advanced image classification and predict production yield per plant or plot. Scale from small farm analysis to plantation-level forecasting.",
    owner: "Aloka A.M.R.V",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: TrendingUp,
    title: "Price & Demand Prediction",
    description:
      "Predict global and Sri Lankan coffee prices and forecast domestic/export demand. Use economic, weather, and market data to assist farmers, exporters, and policymakers.",
    owner: "Jayalath M.D.T.L",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Truck,
    title: "Resource Allocation Optimization",
    description:
      "Predict required labor for harvesting and estimate transportation needs. Reduce costs and waiting time while optimizing schedules based on yield and weather data.",
    owner: "Rumalya",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Award,
    title: "Bean Type & Grade Identification",
    description:
      "Classify coffee bean types (Arabica, Robusta) and identify grades based on defects, size, and color. Help farmers and exporters meet global quality standards.",
    owner: "S.S. Liyanage",
    color: "from-purple-500 to-pink-600",
  },
];

const ComponentInfo = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="ts-title ts-font-display ts-fade-down ts-d200 mt-6 mb-3">
            AI-Powered Coffee Quality System
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Transforming Sri Lankan coffee production through intelligent grading, quality enhancement, and export optimization
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {grid.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                
                {/* Card */}
                <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-50 dark:to-neutral-950 to-neutral-100 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl overflow-hidden h-full hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 transform hover:-translate-y-1">
                  
                  {/* Grid background */}
                  <Grid size={20} />
                  
                  {/* Content */}
                  <div className="relative z-20 flex flex-col h-full">
                    {/* Animated Icon */}
                    <div className={`inline-flex items-center justify-center h-14 w-14 mb-4 bg-gradient-to-br ${feature.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 animate-bounce`} style={{
                      animationDelay: `${index * 0.1}s`,
                      animationDuration: '2s'
                    }}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-3 text-lg leading-snug">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed flex-grow mb-4">
                      {feature.description}
                    </p>

                    {/* Owner badge */}
                    <div className="flex items-center pt-4 border-t border-neutral-200 dark:border-neutral-800">
                      <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide">
                       
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComponentInfo;

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const [p, setP] = React.useState<number[][]>(pattern ?? []);
  
  React.useEffect(() => {
    if (!pattern) {
      const generatedPattern = Array.from({ length: 5 }, () => [
        Math.floor(Math.random() * 4) + 7,
        Math.floor(Math.random() * 6) + 1,
      ]);
      setP(generatedPattern);
    } else {
      setP(pattern);
    }
  }, [pattern]);
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: number[], index: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
