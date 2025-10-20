// import { Card } from "./ui/card";
// import { Button } from "./ui/button";
// import { Calendar, MessageSquare, Pill, Activity } from "lucide-react";

// export function QuickActions() {
//   const actions = [
//     { icon: Calendar, label: "Book Appointment", color: "from-purple-500 to-purple-600" },
//     { icon: MessageSquare, label: "Chat with AI", color: "from-blue-500 to-blue-600" },
//     { icon: Pill, label: "Medications", color: "from-teal-500 to-teal-600" },
//     { icon: Activity, label: "Activity Log", color: "from-pink-500 to-pink-600" },
//   ];

//   return (
//     <Card className="p-6 bg-white/40 backdrop-blur-xl border-white/60 shadow-lg">
//       <h2 className="mb-4">Quick Actions</h2>
//       <div className="grid grid-cols-2 gap-3">
//         {actions.map((action, index) => {
//           const Icon = action.icon;
//           return (
//             <Button
//               key={index}
//               variant="outline"
//               className={`h-auto py-4 flex flex-col items-center gap-2 bg-gradient-to-br ${action.color} text-white border-none hover:opacity-90 transition-all hover:scale-105`}
//             >
//               <Icon className="h-5 w-5" />
//               <span className="text-xs">{action.label}</span>
//             </Button>
//           );
//         })}
//       </div>
//     </Card>
//   );
// }
