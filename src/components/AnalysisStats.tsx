import { Card } from "./ui/card";
import { FileText, Sparkles, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface AnalysisStatsProps {
  totalReports: number;
  analyzedReports: number;
  lastAnalyzed?: Date;
}

export function AnalysisStats({ totalReports, analyzedReports, lastAnalyzed }: AnalysisStatsProps) {
  const stats = [
    {
      label: "Total Reports",
      labelUrdu: "کل رپورٹیں",
      value: totalReports,
      icon: <FileText className="h-4 w-4" />,
      color: "from-purple-500 to-blue-500",
      bgColor: "from-purple-50 to-blue-50"
    },
    {
      label: "AI Analyzed",
      labelUrdu: "AI تجزیہ شدہ",
      value: analyzedReports,
      icon: <Sparkles className="h-4 w-4" />,
      color: "from-blue-500 to-teal-500",
      bgColor: "from-blue-50 to-teal-50"
    },
    {
      label: "Insights Generated",
      labelUrdu: "پیدا شدہ بصیرت",
      value: analyzedReports * 4,
      icon: <TrendingUp className="h-4 w-4" />,
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50"
    },
    {
      label: "Time Saved",
      labelUrdu: "بچایا گیا وقت",
      value: `${analyzedReports * 15}m`,
      icon: <Clock className="h-4 w-4" />,
      color: "from-green-500 to-purple-500",
      bgColor: "from-green-50 to-purple-50"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className={`p-4 bg-gradient-to-br ${stat.bgColor} border-white/60 hover:scale-105 transition-transform`}>
            <div className="flex items-start justify-between mb-2">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
                <div className="text-white">{stat.icon}</div>
              </div>
            </div>
            <p className="text-2xl mb-1">{stat.value}</p>
            <p className="text-xs text-gray-600">{stat.label}</p>
            <p className="text-xs text-gray-500" dir="rtl">{stat.labelUrdu}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
