import React from 'react';
import { FiRefreshCw, FiTrash2, FiZap } from 'react-icons/fi';

const TextAreaCard = ({ text, setText, onSummarize, onClear, isLoading }) => {
  const wordCount = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  const charCount = text.length;

  const handleSampleText = () => {
    const sample = "Artificial Intelligence (AI) is transforming the world at an unprecedented pace. From healthcare to finance, machine learning algorithms are being used to analyze vast amounts of data and provide insights that were previously impossible. However, the rise of AI also brings ethical concerns, including data privacy, algorithmic bias, and the potential impact on employment. As we continue to develop and integrate AI into our daily lives, it is crucial to establish clear guidelines and regulations to ensure that these technologies are used responsibly and for the benefit of all humanity.";
    setText(sample);
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      onSummarize();
    }
  };

  return (
    <div className="brutal-card mb-8 md:mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-black uppercase">Enter Your Text</h2>
        <button
          onClick={handleSampleText}
          className="text-xs md:text-sm bg-secondary px-3 py-1 brutal-border brutal-shadow-sm hover:brutal-shadow transition-all font-black flex items-center gap-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          aria-label="Try Sample Text"
        >
          <FiZap /> TRY SAMPLE
        </button>
      </div>

      <textarea
        className="brutal-input h-[300px] md:h-[400px]"
        placeholder="Paste your article, notes, blog, documentation, or any long text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="Input text for summarization"
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-6">
        <div className="flex space-x-3">
          <div className="bg-white brutal-border brutal-shadow-sm px-4 py-1 rounded-lg text-xs md:text-sm whitespace-nowrap font-black">
            WORDS: {wordCount}
          </div>
          <div className="bg-white brutal-border brutal-shadow-sm px-4 py-1 rounded-lg text-xs md:text-sm whitespace-nowrap font-black">
            CHARS: {charCount}
          </div>
        </div>

        <div className="flex w-full sm:w-auto space-x-4">
          <button
            onClick={onClear}
            className="brutal-btn-white flex-1 sm:flex-none text-sm md:text-base"
            aria-label="Clear Text"
            disabled={isLoading || !text}
          >
            <FiTrash2 /> CLEAR TEXT
          </button>
          <button
            onClick={onSummarize}
            disabled={isLoading}
            className="brutal-btn-primary flex-1 sm:flex-none text-sm md:text-base"
            aria-label="Generate Summary"
          >
            {isLoading ? (
              <>
                <FiRefreshCw className="animate-spin" /> GENERATING...
              </>
            ) : (
              <>
                GENERATE SUMMARY
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextAreaCard;
