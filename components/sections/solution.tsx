import { Leaf, Zap, Coffee, TrendingUp, Droplet, BarChart3, Award, Sparkles } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import HeroVideoDialog from "../magicui/hero-video-dialog";

const Solution = () => {
  const features = [
    {
      icon: Leaf,
      text: "Advanced AI-powered disease detection for coffee plants using real-time image analysis.",
      color: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50/50 to-green-50/50 dark:from-emerald-950/30 dark:to-green-950/30"
    },
    {
      icon: Coffee,
      text: "Intelligent yield prediction and optimization for enhanced productivity and quality.",
      color: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50/50 to-orange-50/50 dark:from-amber-950/30 dark:to-orange-950/30"
    },
    {
      icon: TrendingUp,
      text: "Market-driven price and demand forecasting for strategic export planning.",
      color: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50/50 to-cyan-50/50 dark:from-blue-950/30 dark:to-cyan-950/30"
    },
    {
      icon: Award,
      text: "Automated bean classification and grading to meet international quality standards.",
      color: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30"
    },
  ];

  return (
    <div className="py-20 md:py-28 bg-gradient-to-b from-transparent via-amber-50/20 to-transparent dark:via-amber-950/10">
      {/* Header */}
      <div className="text-center mb-20 px-4">
        <div className="inline-flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="relative group">
            <Coffee className="w-20 h-20 text-amber-700 animate-bounce relative" style={{ animationDuration: '2s' }} />
            <Sparkles className="w-8 h-8 text-amber-500 absolute -top-2 -right-2 animate-spin" style={{ animationDuration: '4s' }} />
          </div>
        </div>
        <h1 className="section-title anim-fade-down d-100 font-display mb-5">
          Our Solution
        </h1>
        <p className="text-center text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
          A comprehensive AI-powered system leveraging advanced computer vision and machine learning to revolutionize Sri Lankan coffee quality assessment, production optimization, and global export enhancement.
        </p>
      </div>

      {/* Main Card */}
      <Card className="mx-auto max-w-7xl px-4 overflow-hidden border-2 border-amber-200/50 dark:border-amber-800/30 bg-gradient-to-br from-white/80 to-amber-50/50 dark:from-neutral-900/80 dark:to-neutral-950/50 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm">
        <CardContent className="p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-black rounded-xl overflow-hidden">
                <HeroVideoDialog
                  className="block dark:hidden"
                  animationStyle="from-center"
                  videoSrc="https://drive.google.com/drive/folders/1rdvABmBfYO9xsi_XJR3zyr6BZHG1phSM"
                  thumbnailSrc="/images/thumbnail-new.jpg"
                  thumbnailAlt="Coffee Quality System Demo"
                />
                <HeroVideoDialog
                  className="hidden dark:block"
                  animationStyle="from-center"
                  videoSrc="https://drive.google.com/drive/folders/1rdvABmBfYO9xsi_XJR3zyr6BZHG1phSM"
                  thumbnailSrc="/images/thumbnail-new.jpg"
                  thumbnailAlt="Coffee Quality System Demo"
                />
              </div>
            </div>

            {/* Features Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-3 leading-tight">
                  Transforming Coffee Quality Through AI Innovation
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 italic text-base leading-relaxed">
                  Our system integrates four powerful AI modules:
                </p>
              </div>

              {/* Feature List with Animated Icons */}
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`group flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm border-2 border-transparent hover:border-amber-300/50 dark:hover:border-amber-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden`}
                    >
                      {/* Animated background accent */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${feature.color} transition-opacity duration-300`} />
                      
                      <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 relative`}>
                        <Icon className="w-6 h-6 text-white animate-bounce" style={{ animationDelay: `${index * 0.15}s`, animationDuration: '2s' }} />
                      </div>
                      <p className="text-neutral-800 dark:text-neutral-300 leading-relaxed font-medium relative z-10">
                        {feature.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  This integrated demonstration showcases how AI transforms every stage of coffee production—from farm to export—delivering measurable improvements in quality, profitability, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Solution;
