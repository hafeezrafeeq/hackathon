import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generatePitch } from "../gemini/gemini";
// import { doc, setDoc } from "firebase/firestore"; // Temporarily remove
// import { auth, db } from "../firebase/config"; // Temporarily remove
import { auth } from "../firebase/config"; // Only auth import karen
import Navbar from "../components/Navbar";

const CreatePitch = () => {
    const [formData, setFormData] = useState({
        idea: '',
        industry: '',
        tone: 'formal'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("🔄 Form submitted - preventDefault called");
        setLoading(true);
        setError('');

        try {
            console.log("📤 Sending data to AI...", formData);

            // Generate pitch using AI
            const pitchData = await generatePitch(formData.idea, formData.industry, formData.tone);
            console.log("✅ AI Response:", pitchData);

            // Temporarily remove Firestore saving
            // const user = auth.currentUser;
            // if (user) {
            //   console.log("💾 Saving to Firebase...");
            //   const pitchRef = doc(db, 'pitches', `${user.uid}_${Date.now()}`);
            //   await setDoc(pitchRef, {
            //     userId: user.uid,
            //     idea: formData.idea,
            //     industry: formData.industry,
            //     tone: formData.tone,
            //     pitchData: pitchData,
            //     createdAt: new Date()
            //   });
            // }

            console.log("🚀 Navigating to result page...");
            // Navigate to result page
            navigate('/pitch-result', { state: { pitchData } });

        } catch (error) {
            console.error("❌ Error:", error);
            setError("Failed to generate pitch: " + error.message);
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

    return (
        
        <div className="min-h-screen py-12  bg-zinc-900">
            < Navbar/>
            <div className="py-20 px-6 md:px-12 lg:px-14 bg-zinc-800 text-white">
                <div className="container border-b-1 border-zinc-700 ">
                    <h2 className="text-8xl font-bold mb-6 font-[founders]"> PitchCraft AI</h2>
                    <p className="text-xl font-[r-neue] text-zinc-300 mb-8 max-w-2xl ">
                        Turn your startup ideas into professional pitches with AI power.
                    </p>
                </div>

                {/* Form Section */}
                <div className="bg-zinc-800 border-1 border-zinc-600 p-6 rounded-lg mt-20  w-[50%]">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Startup Idea */}
                        <div>
                            <label className="block text-lg  font-[r-neue] text-zinc-300 mb-2">
                                Your Startup Idea 
                            </label>
                            <textarea
                                name="idea"
                                value={formData.idea}
                                onChange={handleChange}
                                placeholder="Describe your startup idea in detail..."
                                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-zinc-500 resize-none"
                                rows="4"
                                required
                            />
                        </div>

                        {/* Industry */}
                        <div>
                            <label className="block text-lg  font-[r-neue] text-zinc-300 mb-2">
                                Industry 
                            </label>
                            <input
                                name="industry"
                                type="text"
                                value={formData.industry}
                                onChange={handleChange}
                                placeholder="e.g., EdTech, Healthcare, FinTech"
                                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-zinc-500"
                                required
                            />
                        </div>

                        {/* Tone */}
                        <div>
                            <label className="block text-lg  font-[r-neue] text-zinc-300 mb-2">
                                Tone 
                            </label>
                            <select
                                name="tone"
                                value={formData.tone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                            >
                                <option value="formal">Formal Professional</option>
                                <option value="casual">Casual Friendly</option>
                                <option value="energetic">Energetic Exciting</option>
                            </select>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className=" border bg-red-400 text-red-200 px-4 py-3 rounded-lg">
                                <strong>Error:</strong> {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-white text-black hover:bg-black hover:text-white py-2 px-6 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                    AI is generating your pitch...
                                </>
                            ) : (
                                <>
                                    
                                    Generate My Pitch
                                </>
                            )}
                        </button>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default CreatePitch;