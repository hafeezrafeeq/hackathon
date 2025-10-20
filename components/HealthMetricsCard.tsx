import { LucideIcon } from 'lucide-react';
import { Card } from './ui/card';

interface HealthMetricsCardProps {
  icon: LucideIcon;
  title: string;
  titleUrdu: string;
  value: string;
  unit: string;
  unitUrdu: string;
  status: 'good' | 'warning' | 'danger';
  language: 'en' | 'ur';
}

export function HealthMetricsCard({
  icon: Icon,
  title,
  titleUrdu,
  value,
  unit,
  unitUrdu,
  status,
  language
}: HealthMetricsCardProps) {
  const isUrdu = language === 'ur';
  
  const statusColors = {
    good: 'from-green-500/20 to-emerald-500/20 border-green-200/50',
    warning: 'from-yellow-500/20 to-orange-500/20 border-yellow-200/50',
    danger: 'from-red-500/20 to-pink-500/20 border-red-200/50'
  };

  const iconColors = {
    good: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600'
  };

  return (
    <Card className={`relative overflow-hidden backdrop-blur-md bg-gradient-to-br ${statusColors[status]} from-white/90 to-white/70 border shadow-lg hover:shadow-xl transition-all duration-300`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent pointer-events-none"></div>
      
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-white/80 shadow-sm ${iconColors[status]}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className={`px-3 py-1 rounded-full ${status === 'good' ? 'bg-green-100 text-green-700' : status === 'warning' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
            <span className="text-xs">
              {status === 'good' ? (isUrdu ? 'نارمل' : 'Normal') : status === 'warning' ? (isUrdu ? 'توجہ' : 'Caution') : (isUrdu ? 'خطرہ' : 'Alert')}
            </span>
          </div>
        </div>
        
        <div className="space-y-1">
          <p className={`text-gray-600 ${isUrdu ? 'text-right font-urdu' : ''}`}>
            {isUrdu ? titleUrdu : title}
          </p>
          <div className={`flex items-baseline gap-2 ${isUrdu ? 'justify-end' : ''}`}>
            <span className="text-gray-900">{value}</span>
            <span className={`text-gray-500 ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu ? unitUrdu : unit}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
