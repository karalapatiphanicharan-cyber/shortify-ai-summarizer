import React, { useState } from 'react';
import { FiCopy, FiCheck, FiDownload, FiTrendingDown } from 'react-icons/fi';
import toast from 'react-hot-toast';

const SummaryCard = ({ summary, originalWordCount }) => {
  const [isCopied, setIsCopied] = useState(false);

  const charCount = summary ? summary.length : 0;
  const wordCount = summary ? summary.trim().split(/\s+/).filter(Boolean).length : 0;

  const reduction = originalWordCount > 0
    ? Math.max(0, Math.round(((originalWordCount - wordCount) / originalWordCount) * 100))
    : 0;

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

  const handleExport = () => {
    const element = document.createElement("a");
    const file = new Blob([summary], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "summary.txt";
    document.body.appendChild(element);
    element.click();
    toast.success('Summary exported as TXT!', {
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
  };

  return (
    <div className="brutal-card bg-success/5 dark:bg-success/10 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl md:text-2xl font-black uppercase dark:text-white">Summary</h2>
        {summary && (
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleExport}
              className="flex-1 sm:flex-none text-xs md:text-sm px-4 py-2 brutal-border brutal-shadow-sm bg-white hover:bg-gray-50 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all font-black flex items-center justify-center gap-2"
              aria-label="Export Summary"
            >
              <FiDownload /> EXPORT TXT
            </button>
            <button
              onClick={handleCopy}
              className={`flex-1 sm:flex-none text-xs md:text-sm px-4 py-2 brutal-border brutal-shadow-sm transition-all font-black flex items-center justify-center gap-2 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${isCopied ? 'bg-success text-white' : 'bg-white hover:bg-gray-50'}`}
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
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-slate-700 brutal-border p-6 rounded-xl min-h-[200px] transition-all duration-300">
        {summary ? (
          <p className="text-lg leading-relaxed font-bold dark:text-white">{summary}</p>
        ) : (
          <div className="flex items-center justify-center h-full min-h-[150px]">
            <p className="text-gray-400 dark:text-gray-400 italic font-bold">Your summarized content will appear here.</p>
          </div>
        )}
      </div>

      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white dark:bg-slate-800 brutal-border brutal-shadow-sm px-4 py-3 rounded-lg">
            <p className="text-[10px] text-gray-500 uppercase font-black mb-1">Characters</p>
            <p className="text-xl font-black dark:text-white">{charCount}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 brutal-border brutal-shadow-sm px-4 py-3 rounded-lg">
            <p className="text-[10px] text-gray-500 uppercase font-black mb-1">Words</p>
            <p className="text-xl font-black dark:text-white">{wordCount}</p>
          </div>
          <div className="bg-primary brutal-border brutal-shadow-sm px-4 py-3 rounded-lg text-white flex justify-between items-center">
            <div>
              <p className="text-[10px] opacity-80 uppercase font-black mb-1">Reduction</p>
              <p className="text-xl font-black">{reduction}%</p>
            </div>
            <FiTrendingDown size={24} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
