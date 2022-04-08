import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import HorizontalStepper from '../components/sections/HorizontalStepper';
import Founders from '../components/sections/Founders';
import Image from '../components/elements/Image';

const Home = () => {

  return (
    <div 
    // style={{backgroundImage: "linear-gradient(to bottom right, #000000, #10061E)"}}
    style={{backgroundImage: 'color(#330066)'}}
    >
      {/* <Cta split /> */}
      {/* <div style={{backgroundImage: "radial-gradient(#573382, #25143D, #000000)", width: '1500px'}}> */}
        <div className="inner"></div>
      <img className="bg-opacity" src={require('../assets/images/gradient-bg.jpg')} style={{width: '1350px', opacity: '0.5', borderRadius: '30%'}} />
      {/* <img className="bg-opacity" src="https://media.istockphoto.com/photos/abstract-gradient-dark-purple-background-gradient-dark-purple-color-picture-id1162940275?k=20&m=1162940275&s=612x612&w=0&h=ivJZi4m8aKpzROUB4QauxpKjT4frurVmB_Iy9T_tWIM=" style={{width: '1200px'}} /> */}
        <h1 className="home-heading mb-16 reveal-from-bottom">
          <span className="text-color-primary-gradient">Unleash The Ultimate Interactive <br />Shopping Experience</span>
          {/* <br /><span className="home-subheading mb-16 reveal-from-bottom">Building the next stage of the web is the decentralized creator economy</span> */}
        </h1>
        <h3 className="home-subheading mb-16 reveal-from-bottom"> For the decentralized creator economy </h3>
        
      {/* </div> */}
      
      <Hero className="illustration-section-01" />
      
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <HorizontalStepper /> */}
      {/* <Testimonial topDivider /> */}
      {/* <FeaturesTiles /> */}
      {/* <Founders invertMobile topDivider imageFill className="illustration-section-06" /> */}
    </div>
  );
}

export default Home;