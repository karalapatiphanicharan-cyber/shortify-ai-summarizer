import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import toast from 'react-hot-toast';

const SummaryCard = ({ summary }) => {
  const [isCopied, setIsCopied] = useState(false);

  const charCount = summary ? summary.length : 0;
  const wordCount = summary ? summary.trim().split(/\s+/).filter(Boolean).length : 0;

  const handleCopy = () => {
    if (!summary) return;

    navigator.clipboard.writeText(summary);
    setIsCopied(true);
    toast.success('Summary copied to clipboard!', {
      style: {
        border: '4px solid black',
        padding: '16px',
        color: 'black',
        background: 'white',
        fontWeight: 'bold',
        borderRadius: '12px',
        boxShadow: '8px 8px 0px black',
      },
    });

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="brutal-card bg-success/10 mb-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-black uppercase">Summary</h2>
        {summary && (
          <button
            onClick={handleCopy}
            className={`text-xs md:text-sm px-4 py-2 brutal-border brutal-shadow-sm transition-all font-black flex items-center gap-2 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${isCopied ? 'bg-success text-white' : 'bg-white hover:bg-gray-50'}`}
            aria-label="Copy Summary"
          >
            {isCopied ? (
              <>
                <FiCheck /> COPIED!
              </>
            ) : (
              <>
                <FiCopy /> COPY
              </>
            )}
          </button>
        )}
      </div>

      <div className="bg-white brutal-border p-6 rounded-xl min-h-[200px] transition-all duration-300">
        {summary ? (
          <p className="text-lg leading-relaxed font-bold">{summary}</p>
        ) : (
          <div className="flex items-center justify-center h-full min-h-[150px]">
            <p className="text-gray-400 italic font-bold">Your summarized content will appear here.</p>
          </div>
        )}
      </div>

      {summary && (
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="bg-white brutal-border brutal-shadow-sm px-4 py-1 rounded-lg text-xs md:text-sm font-black">
            SUMMARY LENGTH: {charCount} CHARS
          </div>
          <div className="bg-white brutal-border brutal-shadow-sm px-4 py-1 rounded-lg text-xs md:text-sm font-black">
            WORDS: {wordCount}
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
