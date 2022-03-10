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
    <>
      {/* <Cta split /> */}
      <div className="inner"></div>
      <img className="bg-opacity" src={require('../assets/images/bg2.png')} style={{width: '1500px'}} />
      {/* <Image
                  className="bg-opacity"
                  src={require('../assets/images/bg2.png')}
                  alt="Hero"
                  // width="900"
                  width="1500"
                  // height="100%"
          /> */}
          {/* <div className="inner"> */}
          <h1 className="home-heading mb-16 reveal-from-bottom">Unleash the power of <br /> <span className="text-color-primary-gradient">Physital Shopping</span></h1>
          {/* </div> */}
      
      <Hero className="illustration-section-01" />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <HorizontalStepper /> */}
      {/* <Testimonial topDivider /> */}
      {/* <FeaturesTiles /> */}
      {/* <Founders invertMobile topDivider imageFill className="illustration-section-06" /> */}
    </>
  );
}

export default Home;