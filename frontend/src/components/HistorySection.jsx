import React, { useState } from 'react';
import { FiTrash2, FiClock, FiType, FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';

const HistoryCard = ({ item, onDelete, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = item.summary.length > 150;

  const displaySummary = isExpanded || !shouldTruncate
    ? item.summary
    : item.summary.substring(0, 140) + '...';

  return (
    <div className="bg-white dark:bg-slate-800 brutal-border brutal-shadow-sm p-4 rounded-xl mb-4 hover:brutal-shadow transition-all group">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-500 dark:text-gray-400">
          <FiClock /> {item.date}
        </div>
        <button
          onClick={() => onDelete(item.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Delete history item"
        >
          <FiTrash2 size={16} />
        </button>
      </div>

      <div className="mb-3">
        <div className="flex items-center gap-1 bg-secondary/20 dark:bg-secondary/40 text-[10px] font-black uppercase px-2 py-0.5 rounded-full inline-flex brutal-border-sm mb-2">
          <FiType size={10} /> {item.lengthMode}
        </div>
        <p className={`text-sm font-bold dark:text-white leading-relaxed transition-all duration-300 ${isExpanded ? 'mb-2' : ''}`}>
          {displaySummary}
        </p>

        {shouldTruncate && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-[10px] font-black uppercase text-primary hover:underline flex items-center gap-1 mt-1"
          >
            {isExpanded ? <><FiChevronUp /> Show Less</> : <><FiChevronDown /> Read More</>}
          </button>
        )}
      </div>

      <button
        onClick={() => onSelect(item)}
        className="w-full flex items-center justify-between text-[10px] font-black uppercase pt-3 mt-2 border-t-2 border-black dark:border-gray-600 group-hover:bg-primary group-hover:text-white px-2 py-1 transition-all rounded-md"
      >
        Load into editor <FiExternalLink />
      </button>
    </div>
  );
};

const HistorySection = ({ history, onDelete, onClearAll, onSelect }) => {
  return (
    <div className="mb-20 animate-in fade-in slide-in-from-right-4 duration-700">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary brutal-border p-1 rounded-lg">
            <span className="text-white text-xs font-black px-1.5">S</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black uppercase dark:text-white">Recent History</h2>
        </div>
        {history.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-[10px] font-black uppercase text-gray-500 hover:text-red-500 transition-colors underline decoration-2 underline-offset-4"
          >
            Clear All
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="brutal-card bg-gray-50 dark:bg-slate-900/50 border-dashed border-4 flex flex-col items-center justify-center py-16 text-center shadow-none">
          <div className="bg-white dark:bg-slate-800 brutal-border p-5 rounded-2xl mb-6 brutal-shadow-sm">
            <FiClock size={40} className="text-gray-300 dark:text-gray-600" />
          </div>
          <h3 className="text-lg font-black dark:text-white mb-2 uppercase">Your history is empty</h3>
          <p className="text-gray-500 dark:text-gray-400 font-bold text-sm max-w-[200px]">
            Summarize some text to see your recent activity here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {history.map((item) => (
            <HistoryCard
              key={item.id}
              item={item}
              onDelete={onDelete}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HistorySection;
