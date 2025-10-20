import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Sparkles, Brain, Languages, TrendingUp, MessageSquare, GitCompare } from "lucide-react";
import { motion } from "framer-motion";

export function GeminiWelcome() {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Medical Analysis",
      titleUrdu: "AI میڈیکل تجزیہ",
      description: "Advanced report analysis powered by Gemini AI",
      descriptionUrdu: "Gemini AI کی طاقت سے جدید رپورٹ کا تجزیہ",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Bilingual Support",
      titleUrdu: "دو لسانی معاونت",
      description: "Get insights in English and Urdu",
      descriptionUrdu: "انگریزی اور اردو میں بصیرت حاصل کریں",
      gradient: "from-blue-500 to-teal-500"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Health Trends",
      titleUrdu: "صحت کے رجحانات",
      description: "Track your progress over time",
      descriptionUrdu: "وقت کے ساتھ اپنی پیشرفت کو ٹریک کریں",
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "AI Chat Assistant",
      titleUrdu: "AI چیٹ معاون",
      description: "Ask questions about your reports",
      descriptionUrdu: "اپنی رپورٹوں کے بارے میں سوالات پوچھیں",
      gradient: "from-green-500 to-purple-500"
    },
    {
      icon: <GitCompare className="h-6 w-6" />,
      title: "Report Comparison",
      titleUrdu: "رپورٹ کا موازنہ",
      description: "Compare results across different dates",
      descriptionUrdu: "مختلف تاریخوں کے نتائج کا موازنہ کریں",
      gradient: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-8 bg-gradient-to-br from-purple-50/80 via-blue-50/80 to-teal-50/80 backdrop-blur-xl border-white/40 shadow-xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-block p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-6"
          >
            <Sparkles className="h-12 w-12 text-white" />
          </motion.div>
          
          <h1 className="mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
            Welcome to Gemini AI Medical Analyzer
          </h1>
          
          <p className="text-lg text-gray-700 mb-2">
            Your intelligent health companion powered by Google's Gemini AI
          </p>
          <p className="text-lg text-gray-700 mb-6" dir="rtl">
            Google کی Gemini AI سے تقویت یافتہ آپ کا ذہین صحت کا ساتھی
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-none">
              AI-Powered
            </Badge>
            <Badge className="bg-gradient-to-r from-blue-500 to-teal-500 text-white border-none">
              Bilingual
            </Badge>
            <Badge className="bg-gradient-to-r from-teal-500 to-green-500 text-white border-none">
              Real-time Analysis
            </Badge>
          </div>
        </Card>
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 bg-white/40 backdrop-blur-xl border-white/60 hover:bg-white/60 transition-all h-full">
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
              
              <div className="pt-3 border-t border-gray-200" dir="rtl">
                <h3 className="mb-2">{feature.titleUrdu}</h3>
                <p className="text-sm text-gray-600">{feature.descriptionUrdu}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Getting Started */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="p-8 bg-white/40 backdrop-blur-xl border-white/60">
          <h2 className="mb-6 text-center">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl">
                1
              </div>
              <h3 className="mb-2">Upload Reports</h3>
              <p className="text-sm text-gray-600">Upload your medical reports in PDF or image format</p>
              <p className="text-sm text-gray-600 mt-2" dir="rtl">
                PDF یا تصویری شکل میں اپنی طبی رپورٹیں اپ لوڈ کریں
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white text-2xl">
                2
              </div>
              <h3 className="mb-2">AI Analysis</h3>
              <p className="text-sm text-gray-600">Gemini AI analyzes your reports in seconds</p>
              <p className="text-sm text-gray-600 mt-2" dir="rtl">
                Gemini AI سیکنڈوں میں آپ کی رپورٹوں کا تجزیہ کرتا ہے
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white text-2xl">
                3
              </div>
              <h3 className="mb-2">Get Insights</h3>
              <p className="text-sm text-gray-600">Receive detailed insights and recommendations</p>
              <p className="text-sm text-gray-600 mt-2" dir="rtl">
                تفصیلی بصیرت اور سفارشات حاصل کریں
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
