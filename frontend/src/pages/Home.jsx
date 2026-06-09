import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Hero from '../components/Hero';
import TextAreaCard from '../components/TextAreaCard';
import SummaryCard from '../components/SummaryCard';
import { summarizeText } from '../services/api';

const Home = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Common toast style
  const toastStyle = {
    border: '4px solid black',
    padding: '16px',
    color: 'black',
    background: 'white',
    fontWeight: 'bold',
    borderRadius: '12px',
    boxShadow: '8px 8px 0px black',
  };

  const handleSummarize = async () => {
    if (!text.trim()) {
      toast.error('Please enter text to summarize.', { style: toastStyle });
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading('Generating summary...', { style: toastStyle });

    try {
      const data = await summarizeText(text);
      if (data && data.success) {
        setSummary(data.summary);
        toast.success('Summary generated successfully!', {
          id: loadingToast,
          style: toastStyle
        });
      } else {
        throw new Error('Invalid response');
      }
    } catch (error) {
      console.error('Failed to summarize:', error);
      toast.error('Failed to generate summary. Please check your connection.', {
        id: loadingToast,
        style: toastStyle
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setText('');
    setSummary('');
    toast('Text cleared.', {
      icon: '🗑️',
      style: toastStyle,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerStyle={{
          bottom: 40,
        }}
      />
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
