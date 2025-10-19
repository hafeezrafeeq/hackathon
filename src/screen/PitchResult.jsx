import { useLocation, useNavigate } from 'react-router-dom';

const PitchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pitchData } = location.state || {};

  const handleSavePitch = () => {
    // TODO: Implement save functionality
    console.log("Saving pitch:", pitchData);
    alert("Pitch saved successfully! 💾");
  };

  const handleGenerateAnother = () => {
    navigate('/create-pitch');
  };

  const handleExportPDF = () => {
    // TODO: Implement PDF export
    console.log("Exporting as PDF:", pitchData);
    alert("PDF export feature coming soon! 📄");
  };

  if (!pitchData) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Pitch Data Found</h2>
          <p className="text-zinc-400 mb-6">Please generate a pitch first</p>
          <button 
            onClick={() => navigate('/create-pitch')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Create New Pitch
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">🚀 Your AI-Generated Pitch</h1>
          <p className="text-xl text-zinc-400">Ready to impress investors! Professional pitch created by AI</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Core Pitch Elements */}
          <div className="space-y-6">
            {/* Startup Name & Tagline */}
            <div className="bg-zinc-800 rounded-2xl shadow-xl p-8 border border-zinc-700">
              <h2 className="text-3xl font-bold text-blue-400 mb-3">{pitchData.name}</h2>
              <p className="text-xl text-zinc-300 italic">"{pitchData.tagline}"</p>
            </div>

            {/* Elevator Pitch */}
            <div className="bg-zinc-800 rounded-2xl shadow-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Elevator Pitch
              </h3>
              <p className="text-zinc-300 leading-relaxed">{pitchData.elevatorPitch}</p>
            </div>

            {/* Problem & Solution */}
            <div className="bg-zinc-800 rounded-2xl shadow-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Problem & Solution
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">The Problem:</h4>
                  <p className="text-zinc-300 bg-red-900/20 p-4 rounded-lg border border-red-800/30">
                    {pitchData.problemStatement}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Our Solution:</h4>
                  <p className="text-zinc-300 bg-green-900/20 p-4 rounded-lg border border-green-800/30">
                    {pitchData.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Information */}
          <div className="space-y-6">
            {/* Target Audience */}
            <div className="bg-zinc-800 rounded-2xl shadow-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">👥</span> Target Audience
              </h3>
              <p className="text-zinc-300 leading-relaxed">{pitchData.targetAudience}</p>
            </div>

            {/* Value Proposition */}
            <div className="bg-zinc-800 rounded-2xl shadow-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">⭐</span> Value Proposition
              </h3>
              <p className="text-zinc-300 leading-relaxed">{pitchData.valueProposition}</p>
            </div>

            {/* Landing Page Content */}
            <div className="bg-zinc-800 rounded-2xl shadow-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🌐</span> Landing Page Content
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Hero Title:</h4>
                  <p className="text-xl text-zinc-200 font-medium">{pitchData.landingPageCopy.heroTitle}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Description:</h4>
                  <p className="text-zinc-300">{pitchData.landingPageCopy.heroDescription}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {pitchData.landingPageCopy.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-zinc-300">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <button 
            onClick={handleSavePitch}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
          >
            💾 Save Pitch
          </button>
          <button 
            onClick={handleExportPDF}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
          >
            📄 Export as PDF
          </button>
          <button 
            onClick={handleGenerateAnother}
            className="bg-zinc-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
          >
            🔄 Generate Another
          </button>
        </div>

        {/* Roman Urdu Explanation */}
        <div className="mt-12 bg-yellow-900 border border-yellow-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-yellow-200 mb-4">Roman Urdu Samajh</h3>
          <div className="grid md:grid-cols-2 gap-4 text-yellow-100">
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <span className="text-xl">🎯</span>
                <strong>Elevator Pitch:</strong> 2-3 line mein apne business ka summary
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">💡</span>
                <strong>Problem & Solution:</strong> Kya problem solve kar rahe hain aur kaise
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">👥</span>
                <strong>Target Audience:</strong> Aapke customers kaun hain
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <span className="text-xl">⭐</span>
                <strong>Value Proposition:</strong> Aap kyun unique hain
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">🌐</span>
                <strong>Landing Page:</strong> Website par kya content hoga
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">🚀</span>
                <strong>Ready to Use:</strong> Ye professional pitch investors ko impress karegi!
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-900 rounded-lg border border-blue-700">
            <p className="text-blue-200 text-sm">
              <strong>Tip:</strong> Is pitch ko directly apne business plan mein use kar sakte hain! 
              AI ne professionally format kiya hai investors ke liye.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchResult;