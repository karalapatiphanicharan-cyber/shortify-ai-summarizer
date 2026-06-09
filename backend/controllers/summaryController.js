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

    // Default to 500 but preserve message if it's a known error from service
    res.status(500).json({
      success: false,
      message: error.message || "An unexpected error occurred during summarization"
    });
  }
};
