import { Activity, Heart, Footprints, Moon } from 'lucide-react';
import { HealthMetricsCard } from './HealthMetricsCard';

interface QuickStatsProps {
  language: 'en' | 'ur';
}

export function QuickStats({ language }: QuickStatsProps) {
  const metrics = [
    {
      icon: Heart,
      title: 'Heart Rate',
      titleUrdu: 'دل کی دھڑکن',
      value: '72',
      unit: 'bpm',
      unitUrdu: 'فی منٹ',
      status: 'good' as const
    },
    {
      icon: Activity,
      title: 'Blood Pressure',
      titleUrdu: 'بلڈ پریشر',
      value: '120/80',
      unit: 'mmHg',
      unitUrdu: 'ملی میٹر',
      status: 'good' as const
    },
    {
      icon: Footprints,
      title: 'Daily Steps',
      titleUrdu: 'روزانہ قدم',
      value: '8,420',
      unit: 'steps',
      unitUrdu: 'قدم',
      status: 'good' as const
    },
    {
      icon: Moon,
      title: 'Sleep Quality',
      titleUrdu: 'نیند کا معیار',
      value: '7.5',
      unit: 'hours',
      unitUrdu: 'گھنٹے',
      status: 'warning' as const
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <HealthMetricsCard key={index} {...metric} language={language} />
      ))}
    </div>
  );
}
