import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Schemes from './components/Schemes';
import FAQ from './components/FAQ';
import QueryForm from './components/QueryForm';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import ReportForm from './components/ReportForm';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Schemes />
      <FAQ />
      
      <QueryForm />
      <ReportForm />
      <FeedbackForm />
      <Footer />
    </div>
  );
};

export default App;
