import { GoogleGenerativeAI } from '@google/generative-ai';

// Check if API key exists
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log("🔑 API Key Status:", API_KEY ? "Loaded" : "Missing");

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export const generatePitch = async (startupIdea, industry, tone = 'formal', language = 'english') => {
  try {
    console.log("🚀 Starting Pitch Generation...");
    console.log("📝 Input:", { startupIdea, industry, tone, language });

    // If no API key, use mock data immediately
    if (!genAI) {
      console.log("🔑 No API key found, using mock data");
      return generateMockPitch(startupIdea, industry, tone, language);
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `Create a startup pitch in ${language} for ${industry} industry about: ${startupIdea}. Return JSON only.`;

    console.log("📤 Sending request to AI...");
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log("📥 Raw AI Response:", text);

    // Try to extract JSON
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const pitchData = JSON.parse(jsonMatch[0]);
        console.log("✅ AI Pitch Generated Successfully");
        return pitchData;
      }
    } catch (parseError) {
      console.error("❌ JSON Parse Error:", parseError);
    }
    
    throw new Error('AI returned invalid format');
    
  } catch (error) {
    console.error('❌ AI Error:', error);
    console.log("🔄 Using mock data...");
    return generateMockPitch(startupIdea, industry, tone, language);
  }
};

// Enhanced mock data
const generateMockPitch = (startupIdea, industry, tone, language = 'english') => {
  
  const industryColors = {
    technology: { primary: "#2563EB", secondary: "#7C3AED", accent: "#06B6D4", background: "#0F172A", text: "#F8FAFC" },
    healthcare: { primary: "#059669", secondary: "#0D9488", accent: "#10B981", background: "#0F172A", text: "#F8FAFC" },
    finance: { primary: "#1E40AF", secondary: "#1E3A8A", accent: "#3B82F6", background: "#0F172A", text: "#F8FAFC" },
    education: { primary: "#EA580C", secondary: "#DC2626", accent: "#F59E0B", background: "#0F172A", text: "#F8FAFC" },
    food: { primary: "#DC2626", secondary: "#EA580C", accent: "#16A34A", background: "#0F172A", text: "#F8FAFC" },
    travel: { primary: "#0369A1", secondary: "#0D9488", accent: "#F59E0B", background: "#0F172A", text: "#F8FAFC" },
    default: { primary: "#4F46E5", secondary: "#7C3AED", accent: "#F59E0B", background: "#111827", text: "#F9FAFB" }
  };

  // Get industry key
  const industryKey = industry.toLowerCase();
  const normalizedIndustry = Object.keys(industryColors).find(key => industryKey.includes(key)) || 'default';
  const colors = industryColors[normalizedIndustry];

  // Creative names based on industry and idea
  const names = {
    food: ["QuickBite", "FoodFlow", "TasteHub", "MealExpress", "FlavorDash"],
    technology: ["TechNova", "InnovateLabs", "FutureStack", "CodeCraft", "DigitalFlow"],
    healthcare: ["HealthPlus", "CareSync", "MediQuick", "WellnessHub", "VitalCare"],
    default: ["InnovatePro", "SmartSolutions", "NextGen", "PrimeStack", "EliteWorks"]
  };

  const nameList = names[normalizedIndustry] || names.default;
  const selectedName = nameList[Math.floor(Math.random() * nameList.length)];

  const content = {
    english: {
      name: selectedName,
      tagline: `Revolutionizing ${industry} with ${startupIdea}`,
      elevatorPitch: `${selectedName} transforms the ${industry} industry by ${startupIdea}. We deliver innovative solutions that drive growth and efficiency.`,
      problemStatement: `The ${industry} sector struggles with outdated methods and inefficient processes that limit scalability and customer satisfaction.`,
      solution: `Our platform addresses these challenges through ${startupIdea}, providing modern, scalable solutions tailored for ${industry} businesses.`,
      targetAudience: `${industry} businesses and professionals seeking digital transformation`,
      valueProposition: "We help you achieve better results with less effort through our innovative platform",
      heroTitle: `Transform Your ${industry} Business`,
      heroSubtitle: `Discover how ${selectedName} can help you ${startupIdea} and achieve outstanding results`,
      ctaButton: "Get Started",
      secondaryButton: "Learn More"
    },
    urdu: {
      name: selectedName,
      tagline: `${industry} کو ${startupIdea} کے ساتھ انقلاب`,
      elevatorPitch: `${selectedName} ${industry} انڈسٹری کو ${startupIdea} کے ذریعے تبدیل کرتا ہے۔ ہم ایسے جدید حل فراہم کرتے ہیں جو ترقی اور کارکردگی کو بڑھاتے ہیں۔`,
      problemStatement: `${industry} سیکٹر پرانے طریقوں اور غیر موثر عمل سے جدوجہد کر رہا ہے جو توسیع اور صارف کی اطمینان کو محدود کرتے ہیں۔`,
      solution: `ہمارا پلیٹ فارم ${startupIdea} کے ذریعے ان چیلنجز کا حل پیش کرتا ہے، ${industry} کاروباروں کے لیے موزوں جدید، پیمانہ پذیر حل فراہم کرتا ہے۔`,
      targetAudience: `${industry} کاروبار اور پیشہ ور افراد جو ڈیجیٹل تبدیلی کے خواہاں ہیں`,
      valueProposition: "ہم آپ کو ہمارے جدید پلیٹ فارم کے ذریعے کم محنت کے ساتھ بہتر نتائج حاصل کرنے میں مدد کرتے ہیں",
      heroTitle: `اپنے ${industry} کاروبار کو تبدیل کریں`,
      heroSubtitle: `دریافت کریں کہ ${selectedName} آپ کو ${startupIdea} میں کیسے مدد کر سکتا ہے اور شاندار نتائج حاصل کر سکتا ہے`,
      ctaButton: "شروع کریں",
      secondaryButton: "مزید جانیں"
    },
    spanish: {
      name: selectedName,
      tagline: `Revolucionando ${industry} con ${startupIdea}`,
      elevatorPitch: `${selectedName} transforma la industria ${industry} mediante ${startupIdea}. Ofrecemos soluciones innovadoras que impulsan el crecimiento y la eficiencia.`,
      problemStatement: `El sector ${industry} lucha con métodos obsoletos y procesos ineficientes que limitan la escalabilidad y la satisfacción del cliente.`,
      solution: `Nuestra plataforma aborda estos desafíos a través de ${startupIdea}, proporcionando soluciones modernas y escalables adaptadas para empresas de ${industry}.`,
      targetAudience: `Empresas y profesionales de ${industry} que buscan transformación digital`,
      valueProposition: "Te ayudamos a lograr mejores resultados con menos esfuerzo a través de nuestra plataforma innovadora",
      heroTitle: `Transforma Tu Negocio de ${industry}`,
      heroSubtitle: `Descubre cómo ${selectedName} puede ayudarte a ${startupIdea} y lograr resultados excepcionales`,
      ctaButton: "Comenzar",
      secondaryButton: "Saber Más"
    }
  };

  const langContent = content[language] || content.english;

  return {
    name: langContent.name,
    tagline: langContent.tagline,
    elevatorPitch: langContent.elevatorPitch,
    problemStatement: langContent.problemStatement,
    solution: langContent.solution,
    targetAudience: langContent.targetAudience,
    valueProposition: langContent.valueProposition,
    landingPageDesign: {
      heroSection: {
        title: langContent.heroTitle,
        subtitle: langContent.heroSubtitle,
        ctaButton: langContent.ctaButton,
        secondaryButton: langContent.secondaryButton
      },
      colorScheme: colors,
      typography: {
        headingFont: "Inter, sans-serif",
        bodyFont: "Inter, sans-serif",
        fontStyle: "Modern"
      },
      features: [
        {
          title: language === 'urdu' ? "تیز کارکردگی" : language === 'spanish' ? "Rendimiento Rápido" : "Fast Performance",
          description: language === 'urdu' ? "بجلی کی طرح تیز نتائج" : language === 'spanish' ? "Resultados ultrarrápidos" : "Lightning-fast results",
          icon: "⚡"
        },
        {
          title: language === 'urdu' ? "آسان استعمال" : language === 'spanish' ? "Fácil de Usar" : "Easy to Use",
          description: language === 'urdu' ? "سہل انٹرفیس" : language === 'spanish' ? "Interfaz intuitiva" : "Simple interface",
          icon: "🎯"
        },
        {
          title: language === 'urdu' ? "محفوظ" : language === 'spanish' ? "Seguro" : "Secure",
          description: language === 'urdu' ? "اعلیٰ سیکورٹی" : language === 'spanish' ? "Alta seguridad" : "Top security",
          icon: "🔒"
        },
        {
          title: language === 'urdu' ? "ہر وقت سپورٹ" : language === 'spanish' ? "Soporte 24/7" : "24/7 Support",
          description: language === 'urdu' ? "ہر وقت مدد دستیاب" : language === 'spanish' ? "Ayuda siempre disponible" : "Always available help",
          icon: "🤝"
        }
      ]
    }
  };
};

export default generatePitch;