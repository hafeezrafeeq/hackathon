import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Upload, 
  Brain, 
  MessageSquare, 
  TrendingUp,
  Languages,
  GitCompare,
  Zap,
  Shield,
  Clock
} from "lucide-react";

export function FeatureShowcase() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Gemini AI Analysis */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 h-full">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shrink-0">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="mb-2">Gemini AI Analysis</h3>
              <p className="text-sm text-gray-600 mb-3">
                Advanced medical report analysis powered by Google's Gemini AI. Get instant insights from your blood tests, ECG reports, and more.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  <Zap className="h-3 w-3 mr-1" />
                  Real-time
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  <Brain className="h-3 w-3 mr-1" />
                  AI-Powered
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Bilingual Support */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200 h-full">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 shrink-0">
              <Languages className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="mb-2">Bilingual Insights</h3>
              <p className="text-sm text-gray-600 mb-1">
                Get medical insights in both English and Urdu for better understanding.
              </p>
              <p className="text-sm text-gray-600 mb-3" dir="rtl">
                بہتر سمجھ کے لیے انگریزی اور اردو دونوں میں طبی بصیرت حاصل کریں۔
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">English</Badge>
                <Badge variant="secondary" className="text-xs">اردو</Badge>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* AI Chat Assistant */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card className="p-6 bg-gradient-to-br from-teal-50 to-green-50 border-teal-200 h-full">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 shrink-0">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="mb-2">AI Chat Assistant</h3>
              <p className="text-sm text-gray-600 mb-3">
                Ask questions about your medical reports and get instant AI-powered answers. Understand your health better with conversational AI.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  Interactive
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  24/7 Available
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Report Comparison */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card className="p-6 bg-gradient-to-br from-green-50 to-purple-50 border-green-200 h-full">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-purple-500 shrink-0">
              <GitCompare className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="mb-2">Report Comparison</h3>
              <p className="text-sm text-gray-600 mb-3">
                Compare medical reports from different dates to track your health progress and identify trends over time.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Track Progress
                </Badge>
                <Badge variant="secondary" className="text-xs">Side-by-Side</Badge>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Health Trends */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 h-full">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 shrink-0">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="mb-2">Health Trend Visualization</h3>
              <p className="text-sm text-gray-600 mb-3">
                Visual charts and graphs show how your health metrics change over time, helping you understand patterns.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Charts</Badge>
                <Badge variant="secondary" className="text-xs">Graphs</Badge>
                <Badge variant="secondary" className="text-xs">Analytics</Badge>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Smart Upload */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 h-full">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shrink-0">
              <Upload className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="mb-2">Smart File Upload</h3>
              <p className="text-sm text-gray-600 mb-3">
                Drag & drop or click to upload. Supports PDF, images (JPG, PNG), and documents. Secure and encrypted storage.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  <Shield className="h-3 w-3 mr-1" />
                  Secure
                </Badge>
                <Badge variant="secondary" className="text-xs">PDF/Images</Badge>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
