import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Hero from '../components/Hero';
import TextAreaCard from '../components/TextAreaCard';
import SummaryCard from '../components/SummaryCard';
import HistorySection from '../components/HistorySection';
import { summarizeText } from '../services/api';

const Home = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Analyzing content...');
  const [summaryLength, setSummaryLength] = useState('medium');
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('shortify_history');
    return saved ? JSON.parse(saved) : [];
  });

  const originalWordCount = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;

  useEffect(() => {
    localStorage.setItem('shortify_history', JSON.stringify(history));
  }, [history]);

  // Handle rotating loading messages
  useEffect(() => {
    let interval;
    if (isLoading) {
      const messages = [
        'Analyzing content...',
        'Extracting key information...',
        'Generating summary...',
        'Finalizing summary...'
      ];
      let currentIndex = 0;

      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        setLoadingMessage(messages[currentIndex]);
      }, 2500);
    } else {
      setLoadingMessage('Analyzing content...');
    }
    return () => clearInterval(interval);
  }, [isLoading]);

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

    if (text.length < 20) {
      toast.error('Please provide more content for summarization (min 20 chars).', { style: toastStyle });
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading(loadingMessage, { id: 'loading-summary', style: toastStyle });

    try {
      const data = await summarizeText(text, summaryLength);
      if (data && data.success) {
        setSummary(data.summary);

        // Add to history
        const newHistoryItem = {
          id: Date.now(),
          text: text,
          summary: data.summary,
          lengthMode: summaryLength,
          date: new Date().toLocaleString(),
          wordCount: data.summary.trim().split(/\s+/).filter(Boolean).length
        };

        setHistory(prev => [newHistoryItem, ...prev].slice(0, 5));

        toast.success('Summary generated successfully!', {
          id: loadingToast,
          style: toastStyle
        });
      } else {
        throw new Error(data.message || 'Invalid response');
      }
    } catch (error) {
      console.error('Failed to summarize:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to generate summary.';
      toast.error(errorMessage, {
        id: loadingToast,
        style: toastStyle
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Update loading toast message when loadingMessage changes
  useEffect(() => {
    if (isLoading) {
      toast.loading(loadingMessage, { id: 'loading-summary', style: toastStyle });
    }
  }, [loadingMessage, isLoading]);

  const handleClear = () => {
    setText('');
    setSummary('');
    toast('Text cleared.', {
      icon: '🗑️',
      style: toastStyle,
    });
  };

  const handleDeleteHistory = (id) => {
    setHistory(prev => prev.filter(item => item.id !== id));
    toast.success('Item deleted from history.', { style: toastStyle });
  };

  const handleClearAllHistory = () => {
    if (window.confirm('Are you sure you want to clear all history?')) {
      setHistory([]);
      toast.success('All history cleared.', { style: toastStyle });
    }
  };

  const handleSelectHistory = (item) => {
    setText(item.text);
    setSummary(item.summary);
    setSummaryLength(item.lengthMode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast.success('History item loaded!', { style: toastStyle });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
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
          summaryLength={summaryLength}
          setSummaryLength={setSummaryLength}
        />
        <SummaryCard summary={summary} originalWordCount={originalWordCount} />
      </div>
      <div className="lg:pt-20">
        <HistorySection
          history={history}
          onDelete={handleDeleteHistory}
          onClearAll={handleClearAllHistory}
          onSelect={handleSelectHistory}
        />
      </div>
    </div>
  );
};

export default Home;
