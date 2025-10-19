import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Info, Code, Key } from "lucide-react";

export function ApiNotice() {
  return (
    <Card className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mb-6">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-blue-500 shrink-0">
          <Info className="h-4 w-4 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <p className="text-sm">Demo Mode</p>
            <Badge variant="outline" className="text-xs bg-white/60">
              Mock API
            </Badge>
          </div>
          <p className="text-xs text-gray-600 mb-2">
            This demo uses simulated Gemini AI responses. To connect to the real Gemini API:
          </p>
          <div className="flex items-start gap-2 text-xs text-gray-600">
            <Code className="h-3 w-3 mt-0.5 shrink-0" />
            <span>
              Add your Gemini API key to enable live analysis. 
              <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                Get API Key
              </a>
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-2" dir="rtl">
            یہ ڈیمو مصنوعی Gemini AI جوابات استعمال کرتا ہے۔ اصلی تجزیے کے لیے Gemini API کی کلید شامل کریں۔
          </p>
        </div>
      </div>
    </Card>
  );
}
