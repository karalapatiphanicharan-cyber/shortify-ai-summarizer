import React from 'react';

const SummaryCard = ({ summary }) => {
  return (
    <div className="brutal-card bg-success/10">
      <h2 className="text-2xl font-black mb-4">Summary</h2>
      <div className="bg-white brutal-border p-6 rounded-xl min-h-[150px]">
        {summary ? (
          <p className="text-lg leading-relaxed">{summary}</p>
        ) : (
          <p className="text-gray-500 italic">Your summarized content will appear here.</p>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;
