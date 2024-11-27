import React from 'react';
import { Header } from './components/Header';
import { ResultsGrid } from './components/ResultsGrid';
import { SocialProof } from './components/SocialProof';
import { Strategy } from './components/Strategy';
import { CallToAction } from './components/CallToAction';
import { ContactForm } from './components/ContactForm';
import { FloatingElements } from './components/FloatingElements';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <ResultsGrid />
      <SocialProof />
      <Strategy />
      <CallToAction />
      <ContactForm />
      <FloatingElements />
    </div>
  );
}

export default App;