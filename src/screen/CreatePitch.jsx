import { useState } from "react";
import { generatePitch } from "../gemini/gemini";
import Navbar from "../components/Navbar";
import PitchResult from "./PitchResult";

const CreatePitch = () => {
    const [formData, setFormData] = useState({
        idea: '',
        industry: '',
        tone: 'formal',
        language: 'english'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [pitchData, setPitchData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("🔄 Form submitted");
        setLoading(true);
        setError('');
        setShowResult(false);

        try {
            console.log("📝 Sending data to AI...", formData);
            const generatedPitchData = await generatePitch(formData.idea, formData.industry, formData.tone, formData.language);
            console.log("✅ AI Response received:", generatedPitchData);

            // Set the pitch data and show result
            setPitchData(generatedPitchData);
            setShowResult(true);

        } catch (error) {
            console.error("❌ Error:", error);
            setError("Failed to generate pitch. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleGenerateNew = () => {
        setShowResult(false);
        setPitchData(null);
        setFormData({
            idea: '',
            industry: '',
            tone: 'formal',
            language: 'english'
        });
    };

    // If showing result, show PitchResult component
    if (showResult && pitchData) {
        return (
            <div className="min-h-screen bg-zinc-900">
                <Navbar />
                <div className="pt-20">
                    <div className="text-center mb-6">
                        <button
                            onClick={handleGenerateNew}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
                        >
                            ← Generate New Pitch
                        </button>
                    </div>
                    <PitchResult pitchData={pitchData} />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
            <Navbar />
            
            {/* Main Content */}
            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl">
                        <span className="text-3xl">🚀</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                        PitchCraft AI
                    </h1>
                    <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                        Transform your startup ideas into professional investment pitches with AI-powered creativity and industry-specific branding.
                    </p>
                </div>

                {/* Form Section */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 shadow-2xl">
                        {/* Form Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Create Your Pitch</h2>
                            <p className="text-zinc-400">Fill in your startup details and let AI work its magic</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Startup Idea */}
                            <div className="group">
                                <label className="block text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Your Startup Idea *
                                </label>
                                <textarea
                                    name="idea"
                                    value={formData.idea}
                                    onChange={handleChange}
                                    placeholder="Describe your innovative startup idea in detail... What problem does it solve? How does it work? What makes it unique?"
                                    className="w-full px-4 py-4 bg-zinc-900/80 border border-zinc-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-zinc-500 resize-none transition-all duration-300 group-hover:border-zinc-500"
                                    rows="5"
                                    required
                                />
                                <p className="text-sm text-zinc-500 mt-2">Be specific about your solution and target market</p>
                            </div>

                            {/* Industry */}
                            <div className="group">
                                <label className="block text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Industry *
                                </label>
                                <input
                                    name="industry"
                                    type="text"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    placeholder="e.g., Technology, Healthcare, Education, Finance, E-commerce, Food, Travel, Real Estate, Fashion, Entertainment"
                                    className="w-full px-4 py-4 bg-zinc-900/80 border border-zinc-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-zinc-500 transition-all duration-300 group-hover:border-zinc-500"
                                    required
                                />
                                <p className="text-sm text-zinc-500 mt-2">This helps AI choose the right colors and branding</p>
                            </div>

                            {/* Language Selection */}
                            <div className="group">
                                <label className="block text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                    Language *
                                </label>
                                <select
                                    name="language"
                                    value={formData.language}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 bg-zinc-900/80 border border-zinc-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300 group-hover:border-zinc-500 appearance-none cursor-pointer"
                                >
                                    <option value="english">🇺🇸 English</option>
                                    <option value="urdu">🇵🇰 Urdu</option>
                                    <option value="spanish">🇪🇸 Spanish</option>
                                </select>
                                <p className="text-sm text-zinc-500 mt-2">Choose your preferred language for the pitch content</p>
                            </div>

                            {/* Tone */}
                            <div className="group">
                                <label className="block text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                    Tone *
                                </label>
                                <select
                                    name="tone"
                                    value={formData.tone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 bg-zinc-900/80 border border-zinc-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300 group-hover:border-zinc-500 appearance-none cursor-pointer"
                                >
                                    <option value="formal">💼 Formal Professional</option>
                                    <option value="casual">😊 Casual Friendly</option>
                                    <option value="energetic">⚡ Energetic Exciting</option>
                                </select>
                                <p className="text-sm text-zinc-500 mt-2">Set the tone for your pitch presentation</p>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-4 rounded-xl backdrop-blur-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">⚠️</span>
                                        <div>
                                            <strong className="block">Error</strong>
                                            {error}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] group"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                                        <span className="animate-pulse">AI is generating your pitch...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="group-hover:scale-110 transition-transform">✨</span>
                                        Generate My Pitch
                                        <span className="group-hover:scale-110 transition-transform">🚀</span>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Features List */}
                        <div className="mt-8 pt-8 border-t border-zinc-700/50">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-3 text-zinc-400">
                                    <span className="text-green-400">✓</span>
                                    Creative brand names
                                </div>
                                <div className="flex items-center gap-3 text-zinc-400">
                                    <span className="text-green-400">✓</span>
                                    Industry-specific colors
                                </div>
                                <div className="flex items-center gap-3 text-zinc-400">
                                    <span className="text-green-400">✓</span>
                                    Multi-language support
                                </div>
                                <div className="flex items-center gap-3 text-zinc-400">
                                    <span className="text-green-400">✓</span>
                                    Professional design
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                            <div className="text-2xl mb-2">🎨</div>
                            <h3 className="font-semibold text-white mb-1">Smart Branding</h3>
                            <p className="text-sm text-zinc-400">AI creates creative names and industry-perfect colors</p>
                        </div>
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 text-center">
                            <div className="text-2xl mb-2">🌍</div>
                            <h3 className="font-semibold text-white mb-1">Multi-language</h3>
                            <p className="text-sm text-zinc-400">Get your pitch in English, Urdu, or Spanish</p>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                            <div className="text-2xl mb-2">⚡</div>
                            <h3 className="font-semibold text-white mb-1">Fast & Accurate</h3>
                            <p className="text-sm text-zinc-400">Professional results in seconds</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-zinc-800 py-8 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-zinc-500 text-sm">
                        Powered by AI • Create professional startup pitches in minutes • Perfect for investors and presentations
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CreatePitch;