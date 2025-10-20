import { Upload, FileText, X } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useState } from 'react';

interface UploadPanelProps {
  language: 'en' | 'ur';
  onUploadComplete?: (file: File) => void;
}

export function UploadPanel({ language, onUploadComplete }: UploadPanelProps) {
  const isUrdu = language === 'ur';
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    onUploadComplete?.(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && (file.type === 'application/pdf' || file.type.startsWith('image/'))) {
      handleFileSelect(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  return (
    <Card className="backdrop-blur-md bg-white/80 border border-white/50 shadow-lg">
      <div className="p-6">
        <h2 className={`mb-4 text-gray-900 ${isUrdu ? 'text-right font-urdu' : ''}`}>
          {isUrdu ? 'رپورٹ اپ لوڈ کریں' : 'Upload Medical Report'}
        </h2>
        
        <div
          className={`relative border-2 border-dashed rounded-xl p-8 transition-all ${
            isDragging
              ? 'border-purple-500 bg-purple-50/50'
              : 'border-gray-300 bg-gradient-to-br from-blue-50/50 to-purple-50/50'
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          {selectedFile ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/80 rounded-lg border border-purple-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-900">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500">
                      {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedFile(null)}
                  className="rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {isUrdu ? 'تجزیہ شروع کریں' : 'Start AI Analysis'}
              </Button>
            </div>
          ) : (
            <div className={`text-center ${isUrdu ? 'font-urdu' : ''}`}>
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full">
                  <Upload className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              
              <h3 className="mb-2 text-gray-900">
                {isUrdu ? 'فائل یہاں چھوڑیں یا' : 'Drop your file here, or'}
              </h3>
              
              <label>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,image/*"
                  onChange={handleFileInput}
                />
                <Button
                  variant="outline"
                  className="mb-4 border-purple-300 hover:bg-purple-50"
                  onClick={(e) => {
                    e.preventDefault();
                    (e.currentTarget.previousElementSibling as HTMLInputElement)?.click();
                  }}
                >
                  {isUrdu ? 'فائل منتخب کریں' : 'Browse Files'}
                </Button>
              </label>
              
              <p className="text-xs text-gray-500">
                {isUrdu
                  ? 'PDF یا تصویر کی حمایت کی جاتی ہے'
                  : 'Supports PDF and image files'}
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
