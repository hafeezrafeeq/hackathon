import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  GitCompare, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Calendar,
  FileText,
  CheckCircle,
  XCircle
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface UploadedFile {
  name: string;
  type: string;
  uploadedAt: Date;
}

interface ReportComparisonProps {
  uploadedFiles: UploadedFile[];
}

interface ComparisonMetric {
  name: string;
  nameUrdu: string;
  oldValue: number;
  newValue: number;
  unit: string;
  normalRange: string;
  change: number;
  changeType: "increase" | "decrease" | "stable";
  status: "improved" | "worsened" | "stable";
}

export function ReportComparison({ uploadedFiles }: ReportComparisonProps) {
  const [report1, setReport1] = useState<string>("");
  const [report2, setReport2] = useState<string>("");
  const [showComparison, setShowComparison] = useState(false);

  const mockComparison: ComparisonMetric[] = [
    {
      name: "LDL Cholesterol",
      nameUrdu: "ایل ڈی ایل کولیسٹرول",
      oldValue: 145,
      newValue: 130,
      unit: "mg/dL",
      normalRange: "< 100",
      change: -10.3,
      changeType: "decrease",
      status: "improved"
    },
    {
      name: "HDL Cholesterol",
      nameUrdu: "ایچ ڈی ایل کولیسٹرول",
      oldValue: 45,
      newValue: 52,
      unit: "mg/dL",
      normalRange: "> 40",
      change: 15.6,
      changeType: "increase",
      status: "improved"
    },
    {
      name: "Triglycerides",
      nameUrdu: "ٹرائگلیسرائڈز",
      oldValue: 150,
      newValue: 148,
      unit: "mg/dL",
      normalRange: "< 150",
      change: -1.3,
      changeType: "stable",
      status: "stable"
    },
    {
      name: "Blood Glucose",
      nameUrdu: "بلڈ گلوکوز",
      oldValue: 92,
      newValue: 95,
      unit: "mg/dL",
      normalRange: "70-100",
      change: 3.3,
      changeType: "increase",
      status: "stable"
    },
    {
      name: "Hemoglobin",
      nameUrdu: "ہیموگلوبن",
      oldValue: 13.8,
      newValue: 14.2,
      unit: "g/dL",
      normalRange: "13.5-17.5",
      change: 2.9,
      changeType: "increase",
      status: "improved"
    }
  ];

  const handleCompare = () => {
    if (report1 && report2 && report1 !== report2) {
      setShowComparison(true);
    }
  };

  const getTrendIcon = (changeType: string) => {
    switch (changeType) {
      case "increase":
        return <TrendingUp className="h-4 w-4" />;
      case "decrease":
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "improved":
        return (
          <Badge className="bg-green-500/10 text-green-700 border-green-200 gap-1">
            <CheckCircle className="h-3 w-3" />
            Improved
          </Badge>
        );
      case "worsened":
        return (
          <Badge className="bg-red-500/10 text-red-700 border-red-200 gap-1">
            <XCircle className="h-3 w-3" />
            Needs Attention
          </Badge>
        );
      default:
        return (
          <Badge className="bg-blue-500/10 text-blue-700 border-blue-200 gap-1">
            <Minus className="h-3 w-3" />
            Stable
          </Badge>
        );
    }
  };

  const getChangeColor = (status: string) => {
    switch (status) {
      case "improved":
        return "text-green-600";
      case "worsened":
        return "text-red-600";
      default:
        return "text-blue-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="p-6 bg-gradient-to-br from-teal-50/80 to-blue-50/80 backdrop-blur-xl border-white/40 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500">
            <GitCompare className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2>Report Comparison</h2>
            <p className="text-sm text-gray-600">Compare two medical reports to track your progress</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm mb-2 block">Older Report</label>
            <Select value={report1} onValueChange={setReport1}>
              <SelectTrigger className="bg-white/60 border-white/60">
                <SelectValue placeholder="Select first report" />
              </SelectTrigger>
              <SelectContent>
                {uploadedFiles.map((file, index) => (
                  <SelectItem key={index} value={file.name}>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <div>
                        <p className="text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">
                          {file.uploadedAt.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm mb-2 block">Newer Report</label>
            <Select value={report2} onValueChange={setReport2}>
              <SelectTrigger className="bg-white/60 border-white/60">
                <SelectValue placeholder="Select second report" />
              </SelectTrigger>
              <SelectContent>
                {uploadedFiles.map((file, index) => (
                  <SelectItem key={index} value={file.name} disabled={file.name === report1}>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <div>
                        <p className="text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">
                          {file.uploadedAt.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={handleCompare}
          disabled={!report1 || !report2 || report1 === report2}
          className="w-full mt-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
        >
          <GitCompare className="h-4 w-4 mr-2" />
          Compare Reports
        </Button>
      </Card>

      {/* Comparison Results */}
      {showComparison && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {/* Summary Card */}
          <Card className="p-6 bg-white/40 backdrop-blur-xl border-white/60">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-teal-600" />
              <h3>Comparison Summary</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                <p className="text-xs text-green-700 mb-1">Improved</p>
                <p className="text-2xl text-green-700">3</p>
                <p className="text-xs text-green-600">metrics</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                <p className="text-xs text-blue-700 mb-1">Stable</p>
                <p className="text-2xl text-blue-700">2</p>
                <p className="text-xs text-blue-600">metrics</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <p className="text-xs text-amber-700 mb-1">Needs Attention</p>
                <p className="text-2xl text-amber-700">0</p>
                <p className="text-xs text-amber-600">metrics</p>
              </div>
            </div>
          </Card>

          {/* Detailed Comparison */}
          <Card className="p-6 bg-white/40 backdrop-blur-xl border-white/60">
            <h3 className="mb-4">Metric by Metric Comparison</h3>
            <div className="space-y-4">
              {mockComparison.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm mb-1">{metric.name}</p>
                      <p className="text-xs text-gray-500" dir="rtl">{metric.nameUrdu}</p>
                    </div>
                    {getStatusBadge(metric.status)}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Previous</p>
                      <p className="text-lg">
                        {metric.oldValue} <span className="text-xs text-gray-500">{metric.unit}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Current</p>
                      <p className="text-lg">
                        {metric.newValue} <span className="text-xs text-gray-500">{metric.unit}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className={`flex items-center gap-1 text-sm ${getChangeColor(metric.status)}`}>
                        {getTrendIcon(metric.changeType)}
                        {Math.abs(metric.change)}%
                      </span>
                      <span className="text-xs text-gray-500">change</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Normal: {metric.normalRange} {metric.unit}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-3">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ 
                          width: `${metric.status === 'improved' ? 100 : metric.status === 'stable' ? 50 : 25}%` 
                        }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`h-full ${
                          metric.status === 'improved' 
                            ? 'bg-gradient-to-r from-green-400 to-green-600' 
                            : metric.status === 'stable'
                            ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                            : 'bg-gradient-to-r from-amber-400 to-amber-600'
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* AI Insights on Comparison */}
          <Card className="p-6 bg-gradient-to-br from-purple-50/80 to-blue-50/80 backdrop-blur-xl border-white/40">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-none">
                AI Insight
              </Badge>
            </div>
            <div className="space-y-3">
              <p className="text-sm leading-relaxed">
                <strong>Overall Progress:</strong> Your health metrics show positive improvement! LDL cholesterol has decreased by 10.3%, and HDL cholesterol has increased by 15.6%, indicating better cardiovascular health.
              </p>
              <p className="text-sm leading-relaxed" dir="rtl">
                <strong>مجموعی پیشرفت:</strong> آپ کی صحت کی پیمائشیں مثبت بہتری ظاہر کرتی ہیں! LDL کولیسٹرول 10.3٪ کم ہوا ہے، اور HDL کولیسٹرول 15.6٪ بڑھا ہے، جو بہتر قلبی صحت کی نشاندہی کرتا ہے۔
              </p>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
