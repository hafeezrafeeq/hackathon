import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, FileText, Pill, Stethoscope } from "lucide-react";

export function MedicalTimeline() {
  const events = [
    {
      type: "appointment",
      title: "Cardiology Checkup",
      date: "Oct 15, 2025",
      description: "Regular heart health assessment completed",
      status: "completed",
    },
    {
      type: "prescription",
      title: "Medication Refill",
      date: "Oct 12, 2025",
      description: "Blood pressure medication - 30 days supply",
      status: "active",
    },
    {
      type: "report",
      title: "Blood Test Results",
      date: "Oct 8, 2025",
      description: "Complete blood count - All values normal",
      status: "completed",
    },
    {
      type: "appointment",
      title: "Upcoming: Annual Physical",
      date: "Oct 22, 2025",
      description: "Scheduled with Dr. Sarah Johnson",
      status: "upcoming",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "appointment":
        return <Stethoscope className="h-4 w-4" />;
      case "prescription":
        return <Pill className="h-4 w-4" />;
      case "report":
        return <FileText className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "active":
        return "bg-blue-500/10 text-blue-700 border-blue-200";
      case "upcoming":
        return "bg-purple-500/10 text-purple-700 border-purple-200";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  return (
    <Card className="p-6 bg-white/40 backdrop-blur-xl border-white/60 shadow-lg">
      <h2 className="mb-6">Medical Timeline</h2>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                {getIcon(event.type)}
              </div>
              {index < events.length - 1 && (
                <div className="w-0.5 h-full bg-gradient-to-b from-purple-300 to-blue-300 my-2" />
              )}
            </div>

            <div className="flex-1 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-sm">{event.title}</h3>
                <Badge className={`text-xs ${getStatusColor(event.status)}`}>
                  {event.status}
                </Badge>
              </div>
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {event.date}
              </p>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
