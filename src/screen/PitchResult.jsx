import { VscSymbolColor} from "react-icons/vsc";
import { TfiTarget } from "react-icons/tfi";
import { LuProportions } from "react-icons/lu";

const PitchResult = ({ pitchData }) => {
  console.log("📊 PitchData received via props:", pitchData);


  if (!pitchData) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Pitch Data Found</h2>
          <p className="text-zinc-400 mb-6">Please generate a pitch first</p>
        </div>
      </div>
    );
  }

  // Safe data access with fallbacks
  const data = {
    name: pitchData.name || "Startup Name",
    tagline: pitchData.tagline || "Innovative Tagline",
    elevatorPitch: pitchData.elevatorPitch || "Elevator pitch description...",
    problemStatement: pitchData.problemStatement || "Problem statement...",
    solution: pitchData.solution || "Solution description...",
    targetAudience: pitchData.targetAudience || "Target audience description...",
    valueProposition: pitchData.valueProposition || "Value proposition...",
    landingPageDesign: pitchData.landingPageDesign || {
      heroSection: {
        title: "Hero Title",
        subtitle: "Hero subtitle description",
        ctaButton: "Get Started",
        secondaryButton: "Learn More"
      },
      colorScheme: {
        primary: "#4F46E5",
        secondary: "#7C3AED",
        accent: "#F59E0B",
        background: "#111827",
        text: "#F9FAFB"
      },
      typography: {
        headingFont: "Inter, sans-serif",
        bodyFont: "Inter, sans-serif",
        fontStyle: "Modern"
      },
      features: []
    }
  };

  const handleSavePitch = () => {
    alert("Pitch saved successfully! 💾");
  };

  const handleExportPDF = () => {
    alert("PDF export feature coming soon! 📄");
  };

  return (
    <div className="min-h-screen font-[r-neue] bg-zinc-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Your AI-Generated Pitch</h1>
          <p className="text-xl text-zinc-400">Professional startup pitch ready to impress investors</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Left Column - Core Pitch */}
          <div className="space-y-6">
            {/* Startup Name & Tagline */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <h2 className="text-3xl font-bold text-blue-400 mb-2">{data.name}</h2>
              <p className="text-xl text-zinc-300 italic">"{data.tagline}"</p>
            </div>

            {/* Elevator Pitch */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl"></span> Elevator Pitch
              </h3>
              <p className="text-zinc-300 leading-relaxed">{data.elevatorPitch}</p>
            </div>

            {/* Problem & Solution */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <h3 className="text-3xl font-semibold mb-4 flex items-center gap-2">
             Problem & Solution
              </h3>
              <div className="pt-3 space-y-4">
                <div>
                  <h4 className="text-lg text-red-200 mb-2">The Problem:</h4>
                  <div className="bg-red-4x00/20 p-4 rounded-lg border border-red-400/30">
                    <p className="text-zinc-300">{data.problemStatement}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg text-green-400 mb-2">Our Solution:</h4>
                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-800/30">
                    <p className="text-zinc-300">{data.solution}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Audience & Value */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-zinc-800 h-[12.8vw] rounded-xl p-6 border border-zinc-700">
                <h3 className="text-2xl mb-8 flex items-center gap-2">
                  <span className="text-2xl text-amber-500"><TfiTarget /></span> Target Audience
                </h3>
                <p className="text-zinc-300">{data.targetAudience}</p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                <h3 className="text-2xl  mb-8 flex items-center gap-2">
                  <span className="text-2xl text-[#7c3aed] "><LuProportions /></span> Value Proposition
                </h3>
                <p className="text-zinc-300">{data.valueProposition}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Landing Page Design */}
          <div className="space-y-6">
            {/* Hero Section Preview */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl"><VscSymbolColor /></span> Landing Page Design
              </h3>
              
              {/* Hero Section */}
              <div className="mb-6 p-4 rounded-lg border-1 border-zinc-600" style={{ backgroundColor: data.landingPageDesign.colorScheme.background }}>
                <h1 className="text-2xl bold">Title</h1>
                <h2 className="text-lg  my-2" style={{ color: data.landingPageDesign.colorScheme.text }}>
                  {data.landingPageDesign.heroSection.title}
                </h2>
                <p className="text-lg mb-2 opacity-90" style={{ color: data.landingPageDesign.colorScheme.text }}>
                  {data.landingPageDesign.heroSection.subtitle}
                </p>
                </div>

              {/* Color Scheme */}
              <div className="mb-6">
                <h4 className=" text-zinc-300 mb-4">Industry Color Scheme:</h4>
                <div className="grid grid-cols-5 gap-4">
                  {Object.entries(data.landingPageDesign.colorScheme).map(([name, color]) => (
                    <div key={name} className="text-center">
                      <div 
                        className="w-12 h-12 rounded-lg border-2 border-zinc-600 mx-auto mb-2 shadow-lg"
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="text-xs text-zinc-400 capitalize font-medium">{name}</span>
                      <div className="text-xs text-zinc-500 mt-1">{color}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold text-zinc-300 mb-4">Key Features:</h4>
                <div className="flex  gap-4">
                  {data.landingPageDesign.features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 p-4 bg-zinc-700/50 rounded-lg border border-zinc-600">
                      <div><span className="text-2xl ">{feature.icon}</span></div>
                      <div className="">
                        <h5 className="font-semibold text-zinc-200 text-lg mb-1">{feature.title}</h5>
                        <p className="text-zinc-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🔤</span> Typography
              </h3>
              <div className="flex gap-6 space-y-3">
                <div className="flex flex-col justify-between items-center p-4 w-[12vw] h-[6vw] bg-zinc-700/30 rounded">
                  <span className="text-zinc-100 text-lg">Heading Font:</span>
                  <span className="text-zinc-400 text-mg ">{data.landingPageDesign.typography.headingFont}</span>
                </div>
                <div className="flex flex-col justify-between items-center p-4 w-[12vw] h-[6vw] bg-zinc-700/30 rounded">
                  <span className="text-zinc-100 text-lg">Body Font:</span>
                  <span className="text-zinc-400 text-mg ">{data.landingPageDesign.typography.bodyFont}</span>
                </div>
                <div className="flex flex-col justify-between items-center p-4 w-[12vw] h-[6vw] bg-zinc-700/30 rounded">
                  <span className="text-zinc-100 text-lg">Style:</span>
                  <span className="text-zinc-400 text-mg  ">{data.landingPageDesign.typography.fontStyle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchResult;