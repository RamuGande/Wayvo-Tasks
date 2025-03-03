import React from 'react'
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import Services from './components/service/Services';
import Mywork from './components/Mywork/Mywork';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


export default function App() {
  return (
    <>
      <Navbar />
      <Profile/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </> 
  );
}





