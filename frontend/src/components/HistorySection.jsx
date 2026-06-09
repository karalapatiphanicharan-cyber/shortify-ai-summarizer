import React from 'react';
import { FiTrash2, FiClock, FiType, FiChevronRight } from 'react-icons/fi';

const HistoryCard = ({ item, onDelete, onSelect }) => {
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
        <p className="text-sm font-bold dark:text-white line-clamp-2 leading-relaxed">
          {item.summary}
        </p>
      </div>

      <button
        onClick={() => onSelect(item)}
        className="w-full flex items-center justify-between text-[10px] font-black uppercase py-2 border-t border-dashed border-gray-200 dark:border-gray-600 group-hover:text-primary transition-colors"
      >
        View Details <FiChevronRight />
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
        <div className="brutal-card bg-gray-50 dark:bg-slate-900 border-dashed border-4 flex flex-col items-center justify-center py-12 text-center shadow-none">
          <div className="bg-gray-200 dark:bg-slate-800 p-4 rounded-full mb-4">
            <FiClock size={32} className="text-gray-400" />
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-bold">No summaries generated yet.</p>
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
