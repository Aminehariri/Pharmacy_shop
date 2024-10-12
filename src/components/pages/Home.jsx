import React from 'react';
import Banner from '../Partials/Banner'
import Catogories from '../Partials/Categories'
import BestSelleres from '../Partials/BestSellers';
import AboutAcc from '../Partials/AboutAcc';
import ProductsDiscounts from '../Partials/ProductsDiscounts'
import ProductsLIst from '../Partials/ProductsList';
import BestOffers from '../Partials/BestOffers';
import SummerProducts from '../Partials/SummerProducts';
import Blog from '../Partials/Blog';
import AskHome from '../Partials/AskHome';
import ServiceAcc from '../Partials/ServiceAcc';
// Define the Home component
export default function Home() {
    const pagename ='home'
  return (
    
   <>
    <Banner pagename={pagename}></Banner>
    <Catogories></Catogories>
    <BestSelleres></BestSelleres>
    <ProductsDiscounts></ProductsDiscounts>
    <AboutAcc></AboutAcc>
    <ProductsLIst></ProductsLIst>
    {/* <BestOffers></BestOffers> */}
    <ServiceAcc></ServiceAcc>
    <Blog></Blog>
    <AskHome></AskHome>
   </>
  
  );
}
