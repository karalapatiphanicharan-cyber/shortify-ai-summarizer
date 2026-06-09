// GET /api/health
exports.getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend running successfully"
  });
};

// POST /api/summarize
exports.summarizeText = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      success: false,
      message: "Text is required for summarization"
    });
  }

  res.status(200).json({
    success: true,
    summary: "Summary generation will be implemented in a later phase."
  });
};
