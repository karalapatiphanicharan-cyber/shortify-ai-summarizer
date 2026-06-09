import React from 'react';

const TextAreaCard = ({ text, setText, onSummarize, onClear, isLoading }) => {
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <div className="brutal-card mb-8 md:mb-12">
      <h2 className="text-xl md:text-2xl font-black mb-4 uppercase">Enter Your Text</h2>
      <textarea
        className="w-full h-[300px] md:h-[400px] brutal-border p-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/20 resize-none font-bold placeholder-gray-400 text-base md:text-lg"
        placeholder="Paste your article, notes, blog, documentation, or any long text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-6">
        <div className="flex space-x-3">
          <div className="bg-white brutal-border brutal-shadow-sm px-4 py-1 rounded-lg text-xs md:text-sm whitespace-nowrap">
            Words: {wordCount}
          </div>
          <div className="bg-white brutal-border brutal-shadow-sm px-4 py-1 rounded-lg text-xs md:text-sm whitespace-nowrap">
            Chars: {charCount}
          </div>
        </div>

        <div className="flex w-full sm:w-auto space-x-4">
          <button
            onClick={onClear}
            className="flex-1 sm:flex-none brutal-btn bg-white hover:bg-gray-100 text-sm md:text-base"
          >
            Clear Text
          </button>
          <button
            onClick={onSummarize}
            disabled={isLoading || !text.trim()}
            className="flex-1 sm:flex-none brutal-btn bg-primary text-white hover:bg-blue-600 disabled:opacity-50 text-sm md:text-base"
          >
            {isLoading ? 'Wait...' : 'Generate Summary'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextAreaCard;
