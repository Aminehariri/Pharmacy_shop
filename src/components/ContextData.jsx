// AppContext.js
import React, { createContext, useState } from 'react';
// Categories images
import CatImg1 from '../assets/Categories/cat1.jpg';
import CatImg2 from '../assets/Categories/cat2.jpg';
import CatImg3 from '../assets/Categories/cat3.jpg';
import CatImg4 from '../assets/Categories/cat4.jpg';
import CatImg5 from '../assets/Categories/cat5.jpg';
// Best sellers
import bs1 from '../assets/bestOffers/offre1.jpg'
import bs2 from '../assets/bestOffers/offre2.jpg'
import bs3 from '../assets/bestOffers/offre3.jpg'
import bs4 from '../assets/bestOffers/offre4.jpg'

// Glog images
import blog1 from '../assets/blog/blog1.jpg';
import blog2 from '../assets/blog/blog2.jpg';
import blog3 from '../assets/blog/blog3.jpg';
import blog4 from '../assets/blog/blog4.jpg';

// services images
import service1 from '../assets/services/service1.jpg'
import service2 from '../assets/services/service2.jpg'
import service3 from '../assets/services/service3.jpeg'
import service4 from '../assets/services/service4.jpeg'
import service5 from '../assets/services/service5.jpg'
import service6 from '../assets/services/service6.jpeg'


// Products images
import bestp1 from '../assets/productsImgs/prod1.jpg';
import bestp2 from  '../assets/productsImgs/prod2.jpg';
import bestp3 from '../assets/productsImgs/prod3.jpg';
import bestp4 from  '../assets/productsImgs/prod4.jpg';
import bestp5 from  '../assets/productsImgs/prod5.jpg';
import bestp6 from '../assets/productsImgs/prod6.jpg';
import bestp7 from  '../assets/productsImgs/prod7.jpg';
import bestp8 from '../assets/productsImgs/prod8.jpg';
import bestp9 from  '../assets/productsImgs/prod9.jpg';
import bestp10 from  '../assets/productsImgs/prod10.jpg';
import bestp11 from  '../assets/productsImgs/prod1.jpg';
import bestp12 from  '../assets/productsImgs/prod15.jpg';
// Create a context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  // Define your global state here
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Skincare",
      image: CatImg1,
      description: "View More"
    },
    {
      id: 2,
      name: "Body Lotion",
      image: CatImg2,
      description: "View More"
    },
    {
      id: 3,
      name: "Lip Balm",
      image: CatImg3,
      description: "View More"
    },
    {
      id: 4,
      name: "Gym Gummies",
      image: CatImg4,
      description: "View More"
    },
    {
      id: 5,
      name: "Face Serum",
      image: CatImg5,
      description: "View More"
    }
  ]);

  const [bestOffer,setBestOffer]=useState([
    {
      id:1,
      text:'Best summer skin care',
      img:bs1
    },
    {
      id:2,
      text:'Best summer skin care',
      img:bs2
    },
    {
      id:3,
      text:'Best summer skin care',
      img:bs3
    },
    {
      id:4,
      text:'Best summer skin care',
      img:bs4
    },
  ])
  const [blogs,setBlogs] =useState([
    {
      id:1,
      title:'Treatments that your skin care benefits of and enjoy',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit scelerisque eros, id eleifend quam lobortis ut. Mauris sagit , ac fringilla lorem ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit scelerisque eros, id eleifend quam lobortis ut. Mauris sagit , ac fringilla lorem ullamcorper.',
      date:'04/08/2024',
      img:blog1
    },
    {
      id:2,
      title:'Welcome to MyPharm pharmacy we offer the best practices.',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit scelerisque eros, id eleifend quam lobortis ut. Mauris sagit , ac fringilla lorem ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit scelerisque eros, id eleifend quam lobortis ut. Mauris sagit , ac fringilla lorem ullamcorper.',
      date:'20/06/2024',
      img:blog2
    },
    {
      id:3,
      title:'Our team provide the best service, your health is our priority',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit scelerisque eros, id eleifend quam lobortis ut. Mauris sagit , ac fringilla lorem ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit scelerisque eros, id eleifend quam lobortis ut. Mauris sagit , ac fringilla lorem ullamcorper.',
      date:'06/09/2024',
      img:blog3
    },
    {
      id:4,
      title:'Which serums to use so that you can make your skin be nice',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit scelerisque eros, id eleifend quam lobortis ut. Mauris sagit , ac fringilla lorem ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit scelerisque eros, id eleifend quam lobortis ut. Mauris sagit , ac fringilla lorem ullamcorper.',
      date:'24/05/2024',
      img:blog4
    },
  ])

  const [wishList ,setWishList]=useState([])
  const [carte,setCarte]=useState([])

  const [products,setProducts]=useState([
    {
      id:1,
      name: "Face Serum",
      price:'38',
      discount:'32',
      image: bestp1,
      description:'Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper erat nec volutpat pellentesque.',
      Category:'Body Lotion',
      using:'During shower',
      bestSeller:true
    },
    {
      id:2,
      name: "Body lotion for men",
      price:'20',
      image: bestp2,
      description:'Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper erat nec volutpat pellentesque.',
      Category:'Body Lotion',
      using:'During shower',
      bestSeller:true
    },
    {
      id:3,
      name: "Blood pressure measurer",
      price:'65',
      image: bestp3,
      description:'Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper erat nec volutpat pellentesque.',
      Category:'Body Lotion',
      using:'Around the arm',
      bestSeller:true
    },
    {
      id:4,
      name: "Dry skin shower gel",
      price:'32',
      newPrice:'28',
      image: bestp4,
      description:'Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper erat nec volutpat pellentesque.',
      Category:'Gym Gummies',
      using:'During shower',
      bestSeller:true

    },
    {
      id:5,
      name: "Luminatig serum",
      price:'38',
      image: bestp5,
      description:'Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper erat nec volutpat pellentesque.',
      Category:'Body Lotion',
      using:'Aply on skin',
      bestSeller:true
    },
    {
      id:6,
      name: "Digital measurer",
      price:'80',
      discount:'72',
      image: bestp6,
      description:'Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper erat nec volutpat pellentesque.',
      Category:'Skincare',
      using:'Aply on skin',
      bestSeller:false
    },
    {
      id:7,
      name: "Face skin tonic",
      price:'65',
      discount:'50',
      image: bestp7,
      description:'Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper erat nec volutpat pellentesque.',
      Category:'Face Serum',
      using:'Aply on skin',
      bestSeller:false
    },
    {
      id:8,
      name: "Hyaluronic acid serum",
      price:'80',
      discount:'72',
      image: bestp8,
      description:'Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper erat nec volutpat pellentesque.',
      Category:'Skincare',
      using:'Aply on skin',
      bestSeller:false
    },
    {
      id:9,
      name: "Gentle shower gel",
      price:'33',
      discount:'20',
      image: bestp9,
      description:'Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper erat nec volutpat pellentesque.',
      Category:'Lip Balm',
      using:'Aply on skin',
      bestSeller:false
    },
    {
      id:10,
      name: "Duo pack thermometer",
      price:'89',
      discount:'70',
      image: bestp10,
      description:'Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper erat nec volutpat pellentesque.',
      Category:'Lip Balm',
      using:'Aply on skin',
      bestSeller:false
    },
    {
      id:11,
      name: "Anti-age shots",
      price:'68',
      discount:'50',
      image: bestp3,
      description:'Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper erat nec volutpat pellentesque.',
      Category:'Body Lotion',
      using:'Aply on skin',
      bestSeller:false
    },
    {
      id:12,
      name: "Gloves 50pcs",
      price:'30',
      discount:'24',
      image: bestp12,
      description:'Morbi aliquam odio erat, eu varius sapien rhoncus sit amet. In blandit nunc non nibh cursus, a bibendum ipsum condimentum. Aliquam euismod vehicula neque. Sed sit amet dolor pulvinar, aliquet sapien a, auctor turpis. Praesent aliquam vel sem sit amet ullamcorper. In sed justo neque. Nam semper erat nec volutpat pellentesque.',
      Category:'Body Lotion',
      using:'Aply on skin',
      bestSeller:false
    }
  ])
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Prescription Refills',
      text: `Easily manage your prescription refills online with just a few clicks. Whether it's a recurring prescription or a new one, our platform makes it simple to request refills from the comfort of your home. 
             You can set reminders to ensure you never miss a refill, and get notifications when your medications are ready for pickup. Our pharmacy system ensures that your medication is always available on time.
             Conveniently request refills anytime, and pick up your medications at a time that suits you. We also provide detailed information on your medications, including usage instructions and potential side effects. 
             Stay on top of your health with our seamless refill process, designed to give you peace of mind. Your health, managed with ease and efficiency, so you can focus on what really matters.`,
      img: service1
    },
    {
      id: 2,
      title: 'Vaccination Services',
      text: `Protect yourself and your family with our comprehensive vaccination services. We offer a wide range of vaccines to keep you safe, including seasonal flu shots, COVID-19 vaccines, and travel-related vaccines. 
             Our qualified pharmacists are always ready to administer your vaccines in a clean and safe environment. We understand that getting vaccinated is an essential part of staying healthy, which is why no appointment is necessary. 
             Simply walk in and get the protection you need, whether you're preparing for flu season or traveling abroad. We provide detailed records of your vaccinations so you can track your immunization history. 
             Stay healthy, stay protected, and help protect those around you by ensuring your vaccinations are up to date.`,
      img: service2
    },
    {
      id: 3,
      title: 'Health Consultations',
      text: `Our pharmacists are not only medication experts but also trusted advisors for your health concerns. We offer personalized health consultations to help you manage your medications effectively and improve your overall health.
             Whether you need advice on managing chronic conditions like diabetes or hypertension, or you have questions about new medications, we're here to help. Our consultations are designed to give you the guidance you need to make informed decisions about your health.
             We work closely with your healthcare providers to ensure your medications are working together as they should. You can book a consultation at a time that works for you, and receive personalized advice tailored to your health needs.
             Get clear answers and trusted support from professionals who care about your well-being. Your health is our priority, and we're here to support you every step of the way.`,
      img: service3
    },
    {
      id: 4,
      title: 'Home Delivery',
      text: `Can’t make it to the pharmacy? No problem. We offer a convenient home delivery service to bring your prescriptions and health products straight to your door. Our delivery service is reliable, fast, and free for all orders over a certain amount. 
             Whether you're managing a chronic condition or need an urgent medication, we've got you covered with our timely delivery service. Our drivers are trained to handle medications with care, ensuring that your prescriptions arrive in perfect condition.
             You can track your delivery in real-time, and we'll notify you when your order is on the way. We offer flexible delivery times to accommodate your schedule, ensuring you get your medications when you need them.
             With our home delivery service, you can focus on your recovery and leave the rest to us. Enjoy the convenience of getting your healthcare products delivered without having to leave your home.`,
      img: service4
    },
    {
      id: 5,
      title: 'Blood Pressure Monitoring',
      text: `Monitoring your blood pressure is an important part of managing your heart health, and we're here to help. Our pharmacy offers free blood pressure monitoring services, so you can keep track of your numbers regularly.
             Our trained staff will provide accurate readings and explain what your numbers mean in the context of your overall health. Whether you're managing hypertension or just keeping an eye on your health, regular monitoring can make a big difference.
             We also offer advice on lifestyle changes and medications that can help you maintain a healthy blood pressure. You can drop by anytime—no appointment needed—to get your blood pressure checked, and we'll keep a record of your readings to track your progress.
             Stay proactive with your heart health by utilizing our free blood pressure monitoring service. It's a small step that can have a big impact on your well-being.`,
      img: service5
    },
    {
      id: 6,
      title: 'Over-the-Counter Products',
      text: `Explore our extensive selection of over-the-counter (OTC) products for all your health and wellness needs. From pain relief and cold medications to skincare products and vitamins, we offer quality products that you can trust. 
             Our pharmacists are always available to help you choose the right OTC products for your symptoms or concerns, ensuring that you're getting the best possible care without needing a prescription. 
             Whether you're dealing with minor aches and pains, seasonal allergies, or looking for preventive health supplements, we have a wide range of options to meet your needs. 
             Shop with confidence, knowing that our pharmacy only stocks trusted brands that meet the highest standards of quality and safety. Whatever your health need, we've got you covered with our selection of OTC products.`,
      img: service6
    }
  ]);
  
  return (
    <AppContext.Provider value={{services,setServices, categories, setCategories ,products ,setProducts ,bestOffer,setBestOffer,blogs,setBlogs,carte,setCarte,wishList,setWishList}}>
      {children}
    </AppContext.Provider>
  );
};
