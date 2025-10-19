import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Upload, FileText, CheckCircle, X } from "lucide-react";
import { useRef } from "react";
import { Badge } from "./ui/badge";

interface UploadedFile {
  name: string;
  type: string;
  uploadedAt: Date;
}

interface UploadFlowProps {
  uploadedFiles: UploadedFile[];
  onFileUpload: (files: File[]) => void;
  onFileRemove: (index: number) => void;
}

export function UploadFlow({ uploadedFiles, onFileUpload, onFileRemove }: UploadFlowProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      onFileUpload(files);
    }
    // Reset input value to allow uploading the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onFileUpload(files);
    }
  };

  return (
    <Card className="p-6 bg-white/40 backdrop-blur-xl border-white/60 shadow-lg">
      <div className="mb-6">
        <h2 className="mb-1">Medical Reports</h2>
        <p className="text-sm text-gray-600">Upload and manage your health documents</p>
      </div>

      <div className="mb-6">
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileSelect}
          className="hidden"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
        />
        <div
          className="border-2 border-dashed border-purple-300 rounded-2xl p-8 bg-gradient-to-br from-purple-50/50 to-blue-50/50 hover:border-purple-400 transition-all cursor-pointer text-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500">
              <Upload className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-3">
                Drag & drop files here or click to browse
              </p>
              <Button 
                type="button"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                Upload New Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      {uploadedFiles.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-purple-500/10 text-purple-700 border-purple-200">
              {uploadedFiles.length} reports uploaded
            </Badge>
          </div>

          <div className="space-y-3">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 hover:bg-white/80 transition-all"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100">
                  <FileText className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    Uploaded {file.uploadedAt.toLocaleDateString()} at {file.uploadedAt.toLocaleTimeString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-red-100"
                    onClick={() => onFileRemove(index)}
                  >
                    <X className="h-4 w-4 text-gray-500 hover:text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
