import { Sparkles, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { Card } from './ui/card';

interface AIInsightCardProps {
  title: string;
  titleUrdu: string;
  insight: string;
  insightUrdu: string;
  trend?: 'up' | 'down' | 'warning';
  language: 'en' | 'ur';
}

export function AIInsightCard({ 
  title, 
  titleUrdu, 
  insight, 
  insightUrdu, 
  trend,
  language 
}: AIInsightCardProps) {
  const isUrdu = language === 'ur';
  
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-orange-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <Card className="relative overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/90 to-white/70 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
      
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20">
              <Sparkles className="h-4 w-4 text-purple-600" />
            </div>
            <h3 className={`text-purple-900 ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu ? titleUrdu : title}
            </h3>
          </div>
          {getTrendIcon()}
        </div>
        
        <p className={`text-gray-700 leading-relaxed ${isUrdu ? 'text-right font-urdu' : ''}`}>
          {isUrdu ? insightUrdu : insight}
        </p>
        
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
            <span className="text-xs text-purple-600">
              {isUrdu ? 'AI کی طرف سے' : 'Powered by Gemini AI'}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
