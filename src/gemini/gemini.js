import { GoogleGenerativeAI } from '@google/generative-ai';

// Debug: Check API key
console.log("🔑 API Key Loaded:", import.meta.env.VITE_GEMINI_API_KEY ? "Yes" : "No");

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const generatePitch = async (startupIdea, industry, tone = 'formal') => {
  try {
    console.log("🚀 Starting AI Pitch Generation...");
    console.log("📝 Input:", { startupIdea, industry, tone });

    // API key validation
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      throw new Error("API key not found. Please check your .env file");
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `
      You are PitchCraft - an AI startup assistant. Generate a complete startup pitch in JSON format based on this idea:
      
      STARTUP IDEA: ${startupIdea}
      INDUSTRY: ${industry}
      TONE: ${tone}
      
      IMPORTANT: Return ONLY valid JSON, no other text.
      
      REQUIRED JSON STRUCTURE:
      {
        "name": "Creative startup name (2-3 words)",
        "tagline": "Catchy one-line tagline",
        "elevatorPitch": "2-3 sentence compelling summary",
        "problemStatement": "Clear problem description in ${industry}",
        "solution": "How this startup solves the problem",
        "targetAudience": "Specific target customers",
        "valueProposition": "Unique value and benefits",
        "landingPageCopy": {
          "heroTitle": "Attention-grabbing main title",
          "heroDescription": "2-3 line compelling description", 
          "features": ["feature1", "feature2", "feature3", "feature4"]
        }
      }
      
      TONE GUIDELINES:
      - Formal: Professional, business-like
      - Casual: Friendly, conversational  
      - Energetic: Exciting, enthusiastic
      
      Make it creative, compelling, and tailored to ${industry} industry.
    `;

    console.log("📤 Sending request to Gemini AI...");
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log("📥 Raw AI Response:", text);

    // Clean and parse JSON response
    const cleanedText = text.replace(/```json|```/g, '').trim();
    const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
    
    if (jsonMatch) {
      const pitchData = JSON.parse(jsonMatch[0]);
      console.log("✅ AI Pitch Generated Successfully:", pitchData);
      return pitchData;
    }
    
    throw new Error('AI returned invalid JSON format');
    
  } catch (error) {
    console.error('❌ Gemini AI Error:', error);
    
    // Fallback to mock data if API fails
    console.log("🔄 Using fallback mock data...");
    return await generateMockPitch(startupIdea, industry, tone);
  }
};

// Fallback mock function
const generateMockPitch = async (startupIdea, industry, tone) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const baseName = industry.replace(/\s+/g, '');
  
  const mockData = {
    name: `${baseName}Flow`,
    tagline: `Revolutionizing ${industry} with AI`,
    elevatorPitch: `An innovative platform that ${startupIdea.toLowerCase()} to transform the ${industry} industry through cutting-edge technology and intelligent automation.`,
    problemStatement: `The ${industry} sector faces significant challenges with outdated systems, inefficient processes, and lack of modern solutions that meet today's user expectations.`,
    solution: `Our platform addresses these issues by ${startupIdea.toLowerCase()} using advanced AI algorithms, seamless integration, and user-centric design principles.`,
    targetAudience: `Tech-savvy professionals, ${industry} experts, and forward-thinking organizations seeking digital transformation`,
    valueProposition: "We deliver unparalleled value through innovative technology, exceptional user experience, and measurable business outcomes.",
    landingPageCopy: {
      heroTitle: `Transform Your ${industry} Experience`,
      heroDescription: `Discover how our AI-powered platform ${startupIdea.toLowerCase()} to drive efficiency, growth, and innovation in your ${industry} operations.`,
      features: [
        "🤖 AI-Powered Intelligence",
        "⚡ Real-Time Processing", 
        "🎯 Precision Analytics",
        "🔒 Enterprise Security",
        "🌐 Cross-Platform Access",
        "📊 Actionable Insights"
      ]
    }
  };

  return mockData;
};

export default generatePitch;