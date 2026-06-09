const { generateSummaryWithGemini } = require('../services/geminiService');

// GET /api/health
exports.getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend running successfully"
  });
};

// POST /api/summarize
exports.summarizeText = async (req, res) => {
  const { text, length } = req.body;

  // 1. Validation
  if (!text || text.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: "Text is required"
    });
  }

  if (text.length < 20) {
    return res.status(400).json({
      success: false,
      message: "Please provide more content for summarization"
    });
  }

  if (text.length > 15000) {
    return res.status(400).json({
      success: false,
      message: "Input exceeds maximum allowed length"
    });
  }

  try {
    // 2. AI Summarization
    const summary = await generateSummaryWithGemini(text, length || 'medium');

    // 3. Response
    res.status(200).json({
      success: true,
      summary: summary
    });
  } catch (error) {
    console.error("Controller Error:", error.message);

    // Map specific technical errors to user-friendly messages
    let status = 500;
    let message = "An unexpected error occurred during summarization. Please try again later.";

    if (error.message.includes("API_KEY_INVALID")) {
      status = 401;
      message = "Service configuration error. Please contact support.";
    } else if (error.message.includes("quota")) {
      status = 429;
      message = "We are receiving too many requests. Please try again in a few minutes.";
    } else if (error.message.includes("safety")) {
      status = 400;
      message = "This content cannot be summarized due to safety restrictions.";
    } else if (error.message.includes("Failed to generate summary")) {
      message = error.message;
    }

    res.status(status).json({
      success: false,
      message: message
    });
  }
};
