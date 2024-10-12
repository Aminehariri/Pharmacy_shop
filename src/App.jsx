import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs'
import { AppProvider } from './components/ContextData';
import Footer from './components/Footer';
import ServiceList from './components/pages/ServiceList';
import Shop from './components/pages/Shop';
import Blog from './components/pages/BlogList';
import Contact from './components/pages/Contact';
import WishList from './components/pages/WishList';
import ProductInfo from './components/Partials/ProductInfos';
import BlogDetail from './components/pages/BlogDetail'
import ServiceDetail from './components/Partials/ServiceDetail';
function App() {
  return (
    <AppProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} pagetitle='home' />
        <Route path="/aboutUs" element={<AboutUs />} pagetitle='aboutUs' />
        <Route path="/serviceList" element={<ServiceList />} pagetitle='serviceList' />
        <Route path="/products" element={<Shop />} pagetitle='products' />
        <Route path="/blog" element={<Blog />} pagetitle='blog' />
        <Route path="/contact" element={<Contact />} pagetitle='contact' />
        <Route path="/wishList" element={<WishList />} pagetitle='wishList' />
        <Route path="/productInfo" element={<ProductInfo />} pagetitle='productInfo' />
        <Route path="/blog/blogDetail/:id" element={<BlogDetail />} pagetitle='blogDetail' />
        <Route path="/serviceList/serviceDetail" element={<ServiceDetail />} pagetitle='serviceDetail' />
        
      </Routes>
      <Footer></Footer>
    </Router>
    </AppProvider>
  );
}

export default App;