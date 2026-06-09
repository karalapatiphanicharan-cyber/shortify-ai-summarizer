import React, { useState } from 'react';
import Hero from '../components/Hero';
import TextAreaCard from '../components/TextAreaCard';
import SummaryCard from '../components/SummaryCard';
import { summarizeText } from '../services/api';

const Home = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim()) return;

    setIsLoading(true);
    try {
      const data = await summarizeText(text);
      setSummary(data.summary);
    } catch (error) {
      console.error('Failed to summarize:', error);
      setSummary('Error generating summary. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setText('');
    setSummary('');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pb-20">
      <Hero />
      <TextAreaCard
        text={text}
        setText={setText}
        onSummarize={handleSummarize}
        onClear={handleClear}
        isLoading={isLoading}
      />
      <SummaryCard summary={summary} />
    </div>
  );
};

export default Home;
