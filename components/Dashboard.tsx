import { useState } from "react";
import { Header } from "./Header";
import { AIInsightsCard } from "./AIInsightsCard";
import { HealthMetrics } from "./HealthMetrics";
import { MedicalTimeline } from "./MedicalTimeline";
import { UploadFlow } from "./UploadFlow";
import { GeminiAnalyzer } from "./GeminiAnalyzer";
import { ReportComparison } from "./ReportComparison";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LayoutDashboard, Sparkles, GitCompare } from "lucide-react";

interface UploadedFile {
  name: string;
  type: string;
  uploadedAt: Date;
}

interface DashboardProps {
  userEmail: string;
  onLogout: () => void;
}

export function Dashboard({ userEmail, onLogout }: DashboardProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      name: "Blood_Test_Oct_2025.pdf",
      type: "application/pdf",
      uploadedAt: new Date(2025, 9, 15, 10, 30),
    },
    {
      name: "ECG_Report_Sep_2025.pdf",
      type: "application/pdf",
      uploadedAt: new Date(2025, 8, 20, 14, 15),
    },
  ]);

  const handleFileUpload = (files: File[]) => {
    const newFiles: UploadedFile[] = files.map((file) => ({
      name: file.name,
      type: file.type,
      uploadedAt: new Date(),
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
    
    toast.success(`Successfully uploaded ${files.length} file${files.length > 1 ? 's' : ''}`, {
      description: `${files.map(f => f.name).join(', ')} added to your medical records.`,
    });
  };

  const handleFileRemove = (index: number) => {
    const fileName = uploadedFiles[index].name;
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    
    toast.info(`File removed`, {
      description: `${fileName} has been removed from your records.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-teal-50">
      <Header userEmail={userEmail} onLogout={onLogout} />
      
      <main className="container mx-auto px-4 py-8">
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg">
            <TabsTrigger value="dashboard" className="gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="analyzer" className="gap-2">
              <Sparkles className="h-4 w-4" />
              AI Analyzer
            </TabsTrigger>
            <TabsTrigger value="compare" className="gap-2">
              <GitCompare className="h-4 w-4" />
              Compare
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - AI Insights and Quick Actions */}
              <div className="lg:col-span-1 space-y-6">
                <AIInsightsCard uploadedFiles={uploadedFiles} />
                {/* <QuickActions /> */}
              </div>

              {/* Middle Column - Health Metrics and Upload */}
              <div className="lg:col-span-1 space-y-6">
                <HealthMetrics />
                <UploadFlow 
                  uploadedFiles={uploadedFiles}
                  onFileUpload={handleFileUpload}
                  onFileRemove={handleFileRemove}
                />
              </div>

              {/* Right Column - Medical Timeline */}
              <div className="lg:col-span-1">
                <MedicalTimeline />
              </div>
            </div>
          </TabsContent>

          {/* Gemini Analyzer Tab */}
          <TabsContent value="analyzer" className="mt-0">
            <div className="max-w-5xl mx-auto">
              <GeminiAnalyzer uploadedFiles={uploadedFiles} />
            </div>
          </TabsContent>

          {/* Report Comparison Tab */}
          <TabsContent value="compare" className="mt-0">
            <div className="max-w-5xl mx-auto">
              <ReportComparison uploadedFiles={uploadedFiles} />
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Your health data is encrypted and secure • Powered by Gemini AI
          </p>
        </div>
      </main>
    </div>
  );
}
