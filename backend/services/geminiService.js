const { GoogleGenerativeAI } = require("@google/generative-ai");

/**
 * Service to handle Google Gemini AI summarization
 */
const generateSummaryWithGemini = async (text, lengthMode) => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured in environment variables.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  let prompt = "";

  switch (lengthMode) {
    case 'short':
      prompt = `Summarize the following content in 1-2 concise sentences while preserving the most important information: \n\n${text}`;
      break;
    case 'detailed':
      prompt = `Create a detailed paragraph summary of the following content. Preserve key points, important facts and context: \n\n${text}`;
      break;
    case 'medium':
    default:
      prompt = `Summarize the following content in 3-5 sentences. Include key details and important context: \n\n${text}`;
      break;
  }

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    if (!summary) {
      throw new Error("Gemini returned an empty response.");
    }

    return summary.trim();
  } catch (error) {
    console.error("Gemini API Error:", error);

    if (error.message && error.message.includes("API_KEY_INVALID")) {
      throw new Error("Invalid API Key. Please check your Gemini configuration.");
    }

    if (error.message && error.message.includes("quota")) {
      throw new Error("API quota exceeded. Please try again later.");
    }

    throw new Error("Failed to generate summary with AI. Please try again later.");
  }
};

module.exports = {
  generateSummaryWithGemini
};
