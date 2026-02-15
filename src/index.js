import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import PricingPage from './Landing_page/pricing/PricingPage';
import ProductPage from './Landing_page/products/ProductPage';
import SupportPage from './Landing_page/support/SupportPage'
import HomePage from './Landing_page/home/HomePage';
import SignUp from './Landing_page/signup/SignUp';
import AboutPage from './Landing_page/about/AboutPage';
import TopNav from './Landing_page/TopNav';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <TopNav />

    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/support' element={<SupportPage />}></Route>
      <Route path='/pricing' element={<PricingPage />}></Route>
      <Route path='/products' element={<ProductPage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>

      <Route path='*' element={<NotFound/>}></Route>

    </Routes>

    <Footer />

  </BrowserRouter>
);

