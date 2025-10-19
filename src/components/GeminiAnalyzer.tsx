import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Sparkles, 
  FileText, 
  TrendingUp, 
  MessageSquare,
  Languages,
  Loader2,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  BarChart3
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "./ui/scroll-area";
import { Progress } from "./ui/progress";
import { GeminiWelcome } from "./GeminiWelcome";
import { ApiNotice } from "./ApiNotice";
import { AnalysisStats } from "./AnalysisStats";

interface UploadedFile {
  name: string;
  type: string;
  uploadedAt: Date;
}

interface AnalysisResult {
  summary: {
    english: string;
    urdu: string;
  };
  keyFindings: Array<{
    metric: string;
    value: string;
    status: "normal" | "warning" | "critical";
    english: string;
    urdu: string;
  }>;
  recommendations: {
    english: string[];
    urdu: string[];
  };
  trends: Array<{
    date: string;
    value: number;
    label: string;
  }>;
}

interface GeminiAnalyzerProps {
  uploadedFiles: UploadedFile[];
}

export function GeminiAnalyzer({ uploadedFiles }: GeminiAnalyzerProps) {
  const [selectedFile, setSelectedFile] = useState<UploadedFile | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [language, setLanguage] = useState<"english" | "urdu">("english");
  const [showComparison, setShowComparison] = useState(false);
  const [analyzedCount, setAnalyzedCount] = useState(0);

  const analyzeReport = async (file: UploadedFile) => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setSelectedFile(file);

    // Simulate AI analysis with progress
    const progressSteps = [
      { progress: 20, delay: 500 },
      { progress: 45, delay: 800 },
      { progress: 70, delay: 1000 },
      { progress: 90, delay: 600 },
      { progress: 100, delay: 400 },
    ];

    for (const step of progressSteps) {
      await new Promise((resolve) => setTimeout(resolve, step.delay));
      setAnalysisProgress(step.progress);
    }

    // Mock Gemini API response
    const mockAnalysis: AnalysisResult = {
      summary: {
        english: `Analysis of ${file.name}: Your blood test results show overall good health markers. Hemoglobin levels are within normal range at 14.2 g/dL. Cholesterol levels require monitoring with LDL at 130 mg/dL (slightly elevated). Blood glucose is normal at 95 mg/dL. White blood cell count is healthy, indicating good immune function.`,
        urdu: `${file.name} کا تجزیہ: آپ کے خون کے ٹیسٹ کے نتائج مجموعی طور پر اچھی صحت کی نشاندہی کرتے ہیں۔ ہیموگلوبن کی سطح 14.2 گرام/ڈی ایل پر معمول کی حد میں ہے۔ کولیسٹرول کی سطح کی نگرانی کی ضرورت ہے، ایل ڈی ایل 130 ملی گرام/ڈی ایل (تھوڑا بلند) پر ہے۔ بلڈ گلوکوز 95 ملی گرام/ڈی ایل پر معمول ہے۔ سفید خون کے خلیات کی تعداد صحت مند ہے، جو اچھے مدافعتی نظام کی نشاندہی کرتی ہے۔`,
      },
      keyFindings: [
        {
          metric: "Hemoglobin",
          value: "14.2 g/dL",
          status: "normal",
          english: "Within normal range, good oxygen-carrying capacity",
          urdu: "معمول کی حد میں، آکسیجن لے جانے کی اچھی صلاحیت",
        },
        {
          metric: "LDL Cholesterol",
          value: "130 mg/dL",
          status: "warning",
          english: "Slightly elevated, consider dietary modifications",
          urdu: "تھوڑا بلند، غذائی تبدیلیوں پر غور کریں",
        },
        {
          metric: "Blood Glucose",
          value: "95 mg/dL",
          status: "normal",
          english: "Fasting glucose in healthy range",
          urdu: "فاسٹنگ گلوکوز صحت مند حد میں",
        },
        {
          metric: "WBC Count",
          value: "7,200/µL",
          status: "normal",
          english: "Healthy immune system function",
          urdu: "صحت مند مدافعتی نظام کی کارکردگی",
        },
      ],
      recommendations: {
        english: [
          "Reduce saturated fat intake to lower LDL cholesterol",
          "Incorporate 30 minutes of daily exercise",
          "Increase omega-3 rich foods (fish, nuts, seeds)",
          "Retest cholesterol levels in 3 months",
          "Maintain current healthy glucose levels through balanced diet",
        ],
        urdu: [
          "ایل ڈی ایل کولیسٹرول کو کم کرنے کے لیے سیر شدہ چکنائی کی مقدار کم کریں",
          "روزانہ 30 منٹ ورزش کریں",
          "اومیگا 3 سے بھرپور غذائیں (مچھلی، گری دار میوے، بیج) شامل کریں",
          "3 ماہ میں کولیسٹرول کی سطح دوبارہ چیک کریں",
          "متوازن غذا کے ذریعے موجودہ صحت مند گلوکوز کی سطح برقرار رکھیں",
        ],
      },
      trends: [
        { date: "Jun 2025", value: 145, label: "LDL" },
        { date: "Jul 2025", value: 138, label: "LDL" },
        { date: "Aug 2025", value: 135, label: "LDL" },
        { date: "Sep 2025", value: 132, label: "LDL" },
        { date: "Oct 2025", value: 130, label: "LDL" },
      ],
    };

    setAnalysisResult(mockAnalysis);
    setIsAnalyzing(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "normal":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      case "critical":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "warning":
        return "bg-amber-500/10 text-amber-700 border-amber-200";
      case "critical":
        return "bg-red-500/10 text-red-700 border-red-200";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <ApiNotice />
      
      {/* Header Card */}
      <Card className="p-6 bg-gradient-to-br from-purple-50/80 to-blue-50/80 backdrop-blur-xl border-white/40 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2>Gemini AI Medical Analyzer</h2>
              <p className="text-sm text-gray-600">AI-powered report analysis with bilingual insights</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === "english" ? "urdu" : "english")}
            className="gap-2"
          >
            <Languages className="h-4 w-4" />
            {language === "english" ? "English" : "اردو"}
          </Button>
        </div>

        {/* File Selection */}
        {uploadedFiles.length > 0 ? (
          <div className="space-y-3">
            <p className="text-sm">Select a report to analyze:</p>
            <div className="grid gap-3">
              {uploadedFiles.map((file, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    className="w-full justify-between h-auto p-4 bg-white/60 hover:bg-white/80 border-white/60"
                    onClick={() => analyzeReport(file)}
                    disabled={isAnalyzing}
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-purple-600" />
                      <div className="text-left">
                        <p className="text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">
                          {file.uploadedAt.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    {isAnalyzing && selectedFile?.name === file.name ? (
                      <Loader2 className="h-5 w-5 animate-spin text-purple-600" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        ) : null}
      </Card>

      {/* Welcome Screen when no files */}
      {uploadedFiles.length === 0 && !isAnalyzing && !analysisResult && (
        <GeminiWelcome />
      )}

      {/* Analysis Progress */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <Card className="p-6 bg-white/40 backdrop-blur-xl border-white/60">
              <div className="flex items-center gap-3 mb-4">
                <Loader2 className="h-5 w-5 animate-spin text-purple-600" />
                <div className="flex-1">
                  <p className="text-sm">Analyzing with Gemini AI...</p>
                  <p className="text-xs text-gray-500">Processing your medical report</p>
                </div>
                <span className="text-sm">{analysisProgress}%</span>
              </div>
              <Progress value={analysisProgress} className="h-2" />
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Analysis Results */}
      <AnimatePresence>
        {analysisResult && !isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Summary Card */}
            <Card className="p-6 bg-white/40 backdrop-blur-xl border-white/60 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-none">
                  AI Summary
                </Badge>
                <Badge variant="outline">{selectedFile?.name}</Badge>
              </div>
              <p className="text-sm leading-relaxed" dir={language === "urdu" ? "rtl" : "ltr"}>
                {analysisResult.summary[language]}
              </p>
            </Card>

            {/* Tabs for different views */}
            <Tabs defaultValue="findings" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm">
                <TabsTrigger value="findings" className="gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Findings
                </TabsTrigger>
                <TabsTrigger value="trends" className="gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Trends
                </TabsTrigger>
                <TabsTrigger value="chat" className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Ask AI
                </TabsTrigger>
              </TabsList>

              {/* Key Findings */}
              <TabsContent value="findings" className="space-y-4 mt-4">
                <Card className="p-6 bg-white/40 backdrop-blur-xl border-white/60">
                  <h3 className="mb-4">Key Findings</h3>
                  <div className="space-y-4">
                    {analysisResult.keyFindings.map((finding, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60"
                      >
                        <div className="flex items-start gap-3">
                          {getStatusIcon(finding.status)}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <p className="text-sm">{finding.metric}</p>
                              <Badge className={getStatusColor(finding.status)}>
                                {finding.value}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600" dir={language === "urdu" ? "rtl" : "ltr"}>
                              {finding[language]}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-white/40 backdrop-blur-xl border-white/60">
                  <h3 className="mb-4">Recommendations</h3>
                  <div className="space-y-2" dir={language === "urdu" ? "rtl" : "ltr"}>
                    {analysisResult.recommendations[language].map((rec, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: language === "urdu" ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-purple-50/50"
                      >
                        <div className="mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-purple-500" />
                        </div>
                        <p className="text-sm flex-1">{rec}</p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Trends */}
              <TabsContent value="trends" className="mt-4">
                <Card className="p-6 bg-white/40 backdrop-blur-xl border-white/60">
                  <div className="flex items-center gap-2 mb-6">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                    <h3>Cholesterol Trend (Last 5 Months)</h3>
                  </div>
                  <div className="space-y-3">
                    {analysisResult.trends.map((trend, index) => {
                      const maxValue = 150;
                      const percentage = (trend.value / maxValue) * 100;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-600 w-20">{trend.date}</span>
                            <div className="flex-1 relative">
                              <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${percentage}%` }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-end pr-2"
                                >
                                  <span className="text-xs text-white">{trend.value} mg/dL</span>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-800">
                      <strong>Positive Trend:</strong> Your LDL cholesterol has decreased by 10% over the last 5 months. Keep following your current health plan!
                    </p>
                  </div>
                </Card>
              </TabsContent>

              {/* AI Chat Assistant */}
              <TabsContent value="chat" className="mt-4">
                <AIChat language={language} analysisResult={analysisResult} />
              </TabsContent>
            </Tabs>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// AI Chat Component
function AIChat({ language, analysisResult }: { language: "english" | "urdu"; analysisResult: AnalysisResult }) {
  const [messages, setMessages] = useState<Array<{ role: "user" | "ai"; content: string }>>([
    {
      role: "ai",
      content: language === "english" 
        ? "Hello! I'm your AI health assistant. Ask me anything about your medical report."
        : "ہیلو! میں آپ کا AI صحت معاون ہوں۔ اپنی میڈیکل رپورٹ کے بارے میں مجھ سے کچھ بھی پوچھیں۔"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = language === "english" 
    ? [
        "What should I focus on improving?",
        "Are my results concerning?",
        "What foods should I eat?",
        "When should I get retested?",
      ]
    : [
        "مجھے کیا بہتر بنانے پر توجہ دینی چاہیے؟",
        "کیا میرے نتائج تشویشناک ہیں؟",
        "مجھے کون سی غذائیں کھانی چاہیے؟",
        "مجھے دوبارہ ٹیسٹ کب کروانا چاہیے؟",
      ];

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    setMessages([...messages, { role: "user", content: message }]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock AI response
    const aiResponse = language === "english"
      ? `Based on your report analysis, ${message.toLowerCase().includes("improve") ? "focus on reducing saturated fats and increasing cardiovascular exercise to improve your LDL cholesterol levels." : message.toLowerCase().includes("concerning") ? "your results show one area requiring attention - LDL cholesterol is slightly elevated. However, overall health markers are positive." : message.toLowerCase().includes("food") ? "include more omega-3 rich foods like salmon, walnuts, and flaxseeds. Reduce red meat and processed foods." : "I recommend retesting your cholesterol levels in 3 months to track progress of dietary and lifestyle changes."}`
      : `آپ کی رپورٹ کے تجزیے کی بنیاد پر، ${message.includes("بہتر") ? "اپنے LDL کولیسٹرول کی سطح کو بہتر بنانے کے لیے سیر شدہ چکنائی کو کم کرنے اور قلبی ورزش بڑھانے پر توجہ دیں۔" : message.includes("تشویشناک") ? "آپ کے نتائج ایک شعبے میں توجہ کی ضرورت ظاہر کرتے ہیں - LDL کولیسٹرول قدرے بلند ہے۔ تاہم، مجموعی صحت کی نشانیاں مثبت ہیں۔" : message.includes("غذا") ? "اومیگا 3 سے بھرپور غذائیں جیسے سالمن، اخروٹ، اور السی کے بیج شامل کریں۔ سرخ گوشت اور پروسیسڈ فوڈز کم کریں۔" : "میں تجویز کرتا ہوں کہ غذائی اور طرز زندگی کی تبدیلیوں کی پیشرفت کو ٹریک کرنے کے لیے 3 ماہ میں اپنے کولیسٹرول کی سطح دوبارہ جانچیں۔"}`;

    setMessages((prev) => [...prev, { role: "ai", content: aiResponse }]);
    setIsTyping(false);
  };

  return (
    <Card className="p-0 bg-white/40 backdrop-blur-xl border-white/60 overflow-hidden">
      <ScrollArea className="h-[400px] p-6">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              dir={language === "urdu" ? "rtl" : "ltr"}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-purple-500 to-blue-500 text-white"
                    : "bg-white/60 border border-white/60"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-white/60 border border-white/60 p-4 rounded-2xl">
                <div className="flex gap-2">
                  <div className="h-2 w-2 bg-purple-500 rounded-full animate-bounce" />
                  <div className="h-2 w-2 bg-purple-500 rounded-full animate-bounce delay-100" />
                  <div className="h-2 w-2 bg-purple-500 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 bg-white/60 border-t border-white/60">
        <div className="flex flex-wrap gap-2 mb-3">
          {quickQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSendMessage(question)}
              className="text-xs bg-white/60 hover:bg-white/80"
            >
              {question}
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage(input)}
            placeholder={language === "english" ? "Ask a question..." : "سوال پوچھیں..."}
            className="flex-1 px-4 py-2 rounded-lg bg-white/60 border border-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
            dir={language === "urdu" ? "rtl" : "ltr"}
          />
          <Button
            onClick={() => handleSendMessage(input)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <MessageSquare className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
