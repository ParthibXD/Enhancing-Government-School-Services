import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Schemes from './components/Schemes';
import FAQ from './components/FAQ';
import QueryForm from './components/QueryForm';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import { CrossCheck } from './components/CrossCheck';
import Logout from './components/Logout'

const App = () => {
  return (
    <div>
      <Header />
      {/* <Logout /> */}
      <Hero />
      <Schemes />
      <FAQ />
      
      <QueryForm />
      <CrossCheck />
      <FeedbackForm />
      <Footer />
    </div>
  );
};

export default App;
