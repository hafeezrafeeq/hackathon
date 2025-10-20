import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Sparkles, TrendingUp, AlertCircle, CheckCircle, FileText } from "lucide-react";

interface UploadedFile {
  name: string;
  type: string;
  uploadedAt: Date;
}

interface AIInsightsCardProps {
  uploadedFiles: UploadedFile[];
}

export function AIInsightsCard({ uploadedFiles }: AIInsightsCardProps) {
  // Generate insights based on uploaded files
  const generateInsights = () => {
    const defaultInsights = [
      {
        type: "positive",
        title: "Great Progress!",
        description: "Your blood pressure has improved by 8% this week. Keep up the healthy habits!",
      },
      {
        type: "warning",
        title: "Hydration Reminder",
        description: "You're drinking 20% less water than recommended. Try to increase your intake.",
      },
      {
        type: "info",
        title: "Activity Pattern",
        description: "Your most active time is 7-9 AM. Consider scheduling important tasks then.",
      },
    ];

    const fileInsights = [];
    
    if (uploadedFiles.length > 0) {
      // Recent upload insight
      const latestFile = uploadedFiles[uploadedFiles.length - 1];
      fileInsights.push({
        type: "info",
        title: "New Document Analyzed",
        description: `We've analyzed your uploaded document "${latestFile.name}". ${
          latestFile.name.toLowerCase().includes('blood') 
            ? 'Blood test results show normal ranges for most markers.'
            : latestFile.name.toLowerCase().includes('ecg') || latestFile.name.toLowerCase().includes('ekg')
            ? 'ECG report shows regular heart rhythm patterns.'
            : latestFile.name.toLowerCase().includes('x-ray') || latestFile.name.toLowerCase().includes('xray')
            ? 'X-ray imaging has been reviewed and filed in your medical history.'
            : 'Report has been processed and added to your health records.'
        }`,
      });

      // File count insight
      if (uploadedFiles.length >= 3) {
        fileInsights.push({
          type: "positive",
          title: "Comprehensive Health Records",
          description: `You have ${uploadedFiles.length} medical documents uploaded. This helps us provide more accurate health insights and track your progress better.`,
        });
      }

      // Pattern detection based on file types
      const hasManyTests = uploadedFiles.filter(f => 
        f.name.toLowerCase().includes('test') || 
        f.name.toLowerCase().includes('blood') ||
        f.name.toLowerCase().includes('lab')
      ).length >= 2;
      
      if (hasManyTests) {
        fileInsights.push({
          type: "info",
          title: "Regular Testing Detected",
          description: "Your consistent medical testing shows good health monitoring habits. Continue with regular checkups.",
        });
      }
    }

    // Combine file-based insights with default insights
    const combinedInsights = [...fileInsights, ...defaultInsights];
    
    // Return only first 4 insights to avoid overcrowding
    return combinedInsights.slice(0, 4);
  };

  const insights = generateInsights();

  const getIcon = (type: string) => {
    switch (type) {
      case "positive":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      default:
        return <TrendingUp className="h-5 w-5 text-blue-500" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "positive":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "warning":
        return "bg-amber-500/10 text-amber-700 border-amber-200";
      default:
        return "bg-blue-500/10 text-blue-700 border-blue-200";
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-purple-50/80 to-blue-50/80 backdrop-blur-xl border-white/40 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2>AI Health Insights</h2>
          <p className="text-sm text-gray-600">Powered by Gemini AI</p>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/60 hover:bg-white/80 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">{getIcon(insight.type)}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-sm">{insight.title}</h3>
                  <Badge className={`text-xs ${getBadgeColor(insight.type)}`}>AI</Badge>
                </div>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
