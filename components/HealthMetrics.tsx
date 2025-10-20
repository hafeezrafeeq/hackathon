import { Card } from "./ui/card";
import { Heart, Activity, Droplet, Wind } from "lucide-react";
import { Progress } from "./ui/progress";

export function HealthMetrics() {
  const metrics = [
    { label: "Heart Rate", value: "72", unit: "bpm", progress: 72, color: "from-red-500 to-pink-500" },
    { label: "Blood Oxygen", value: "98", unit: "%", progress: 98, color: "from-blue-500 to-cyan-500" },
    { label: "Steps Today", value: "8,432", unit: "steps", progress: 84, color: "from-green-500 to-emerald-500" },
    { label: "Calories", value: "1,850", unit: "kcal", progress: 62, color: "from-orange-500 to-amber-500" },
  ];

  const icons = [Heart, Droplet, Activity, Wind];

  return (
    <div>
      <h2 className="mb-4">Health Metrics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {metrics.map((metric, index) => {
          const Icon = icons[index];
          return (
            <Card
              key={index}
              className="p-5 bg-white/40 backdrop-blur-xl border-white/60 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl">{metric.value}</span>
                    <span className="text-sm text-gray-500">{metric.unit}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.color}`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <Progress value={metric.progress} className="h-2" />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
