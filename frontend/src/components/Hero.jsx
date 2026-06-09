import React from 'react';

const Hero = () => {
  return (
    <section className="text-center py-10 md:py-16 px-4 md:px-6">
      <div className="inline-block bg-secondary brutal-border px-4 py-1 rounded-full mb-6 transform -rotate-2">
        <span className="text-xs md:text-sm font-black uppercase tracking-widest">AI Powered</span>
      </div>
      <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter">
        Summarize Long <br className="hidden md:block" /> Content in Seconds
      </h1>
      <p className="text-base md:text-xl max-w-2xl mx-auto font-bold text-black/70">
        Paste lengthy articles, notes, reports, or documents and get concise summaries instantly.
      </p>
    </section>
  );
};

export default Hero;
