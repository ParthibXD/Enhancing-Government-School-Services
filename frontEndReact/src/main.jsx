import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import App from './App';
import Profile from './components/Profile'
import ProfileUpdate from './components/ProfileUpdate';
import PasswordChange from './components/PasswordChange';
import { Schema } from 'mongoose';
import Schemes from './components/Schemes';
import FAQ from './components/FAQ';
import QueryForm from './components/QueryForm';
import ReportForm from './components/ReportForm';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<App />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profile/update" element={<ProfileUpdate />} />
        <Route path="/profile/change-password" element={<PasswordChange />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/query" element={<QueryForm />} />
        <Route path="/report" element={<ReportForm />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        
        <Route path="/contact" element={<Footer />} />
        

      </Routes>
    </Router>
  </React.StrictMode>
);
