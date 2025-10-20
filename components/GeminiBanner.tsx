// import { useState } from "react";
// import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
// import { Button } from "./ui/button";
// import { Sparkles, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export function GeminiBanner() {
//   const [isVisible, setIsVisible] = useState(true);

//   if (!isVisible) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         className="mb-6"
//       >
//         <Alert className="bg-gradient-to-r from-purple-50 via-blue-50 to-teal-50 border-purple-200 relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-blue-400/10 to-teal-400/10 animate-gradient" />
//           <div className="relative flex items-start gap-3">
//             <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shrink-0 mt-0.5">
//               <Sparkles className="h-5 w-5 text-white" />
//             </div>
//             <div className="flex-1">
//               <AlertTitle className="mb-2 flex items-center gap-2">
//                 <span>New: Gemini AI Medical Analyzer</span>
//                 <span className="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
//                   NEW
//                 </span>
//               </AlertTitle>
//               <AlertDescription className="text-sm text-gray-700">
//                 Get AI-powered insights from your medical reports in English and Urdu. 
//                 Click the <strong>"AI Analyzer"</strong> tab to analyze your uploaded reports with Gemini AI.
//               </AlertDescription>
//               <AlertDescription className="text-sm text-gray-700 mt-1" dir="rtl">
//                 انگریزی اور اردو میں اپنی طبی رپورٹوں سے AI سے تقویت یافتہ بصیرت حاصل کریں۔
//               </AlertDescription>
//             </div>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="shrink-0 h-6 w-6 rounded-full hover:bg-purple-100"
//               onClick={() => setIsVisible(false)}
//             >
//               <X className="h-4 w-4" />
//             </Button>
//           </div>
//         </Alert>
//       </motion.div>
//     </AnimatePresence>
//   );
// }
