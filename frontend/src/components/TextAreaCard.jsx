import React from 'react';
import { FiRefreshCw, FiTrash2, FiZap, FiLoader } from 'react-icons/fi';

const TextAreaCard = ({ text, setText, onSummarize, onClear, isLoading, summaryLength, setSummaryLength }) => {
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
    <div className="brutal-card mb-8 md:mb-12 animate-in fade-in slide-in-from-left-4 duration-500">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-black uppercase dark:text-white">Enter Your Text</h2>
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

      <div className="mt-8 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-black uppercase dark:text-white">Summary Length</label>
          <div className="flex bg-gray-100 dark:bg-slate-700 p-1 brutal-border rounded-xl">
            {['short', 'medium', 'detailed'].map((len) => (
              <button
                key={len}
                onClick={() => setSummaryLength(len)}
                className={`flex-1 py-2 px-4 rounded-lg text-xs md:text-sm font-black uppercase transition-all ${
                  summaryLength === len
                    ? 'bg-primary text-white brutal-border brutal-shadow-sm'
                    : 'text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white'
                }`}
              >
                {len}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex space-x-3">
            <div className="bg-white dark:bg-slate-800 dark:text-white brutal-border brutal-shadow-sm px-4 py-1 rounded-lg text-xs md:text-sm whitespace-nowrap font-black">
              WORDS: {wordCount}
            </div>
            <div className="bg-white dark:bg-slate-800 dark:text-white brutal-border brutal-shadow-sm px-4 py-1 rounded-lg text-xs md:text-sm whitespace-nowrap font-black">
              CHARS: {charCount}
            </div>
          </div>

          <div className="flex w-full sm:w-auto space-x-4">
            <button
              onClick={onClear}
              className="brutal-btn-white dark:bg-slate-700 dark:text-white flex-1 sm:flex-none text-sm md:text-base"
              aria-label="Clear Text"
              disabled={isLoading || !text}
            >
              <FiTrash2 /> CLEAR TEXT
            </button>
            <button
              onClick={onSummarize}
              disabled={isLoading}
              className={`brutal-btn-primary flex-1 sm:flex-none text-sm md:text-base relative overflow-hidden ${isLoading ? 'opacity-80 cursor-wait' : ''}`}
              aria-label="Generate Summary"
            >
              {isLoading ? (
                <span className="flex items-center gap-3">
                  <FiLoader className="animate-spin text-lg" />
                  GENERATING...
                </span>
              ) : (
                <>
                  GENERATE SUMMARY
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAreaCard;
