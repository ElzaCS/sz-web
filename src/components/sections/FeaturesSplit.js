import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';
import Rotation from 'react-rotation'
import TextTransition, { presets } from "react-text-transition";

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

// function consoleText(words, id, colors) {
//   words = ['Hello World.', 'Console Text', 'Made with Love.'];
//   id = 'text';
//   colors = ['tomato','rebeccapurple','lightblue'];
//   if (colors === undefined) colors = ['#fff'];
//   var visible = true;
//   var con = document.getElementById('console');
//   var letterCount = 1;
//   var x = 1;
//   var waiting = false;
//   console.log("id:", id);
//   var target = document.getElementById(id)
//   target.setAttribute('style', 'color:' + colors[0])
//   window.setInterval(function() {

//     if (letterCount === 0 && waiting === false) {
//       waiting = true;
//       target.innerHTML = words[0].substring(0, letterCount)
//       window.setTimeout(function() {
//         var usedColor = colors.shift();
//         colors.push(usedColor);
//         var usedWord = words.shift();
//         words.push(usedWord);
//         x = 1;
//         target.setAttribute('style', 'color:' + colors[0])
//         letterCount += x;
//         waiting = false;
//       }, 1000)
//     } else if (letterCount === words[0].length + 1 && waiting === false) {
//       waiting = true;
//       window.setTimeout(function() {
//         x = -1;
//         letterCount += x;
//         waiting = false;
//       }, 1000)
//     } else if (waiting === false) {
//       target.innerHTML = words[0].substring(0, letterCount)
//       letterCount += x;
//     }
//   }, 120)
//   window.setInterval(function() {
//     if (visible === true) {
//       con.className = 'console-underscore hidden'
//       visible = false;

//     } else {
//       con.className = 'console-underscore'

//       visible = true;
//     }
//   }, 400)
// }

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  // consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'text', ['tomato','rebeccapurple','lightblue']);

  const TEXTS_BRANDS = [
    "Livestream your products or take your store live from anywhere in the world to increase sales",
    "Have hundreds of attendees shop your products live while interacting with you.",
    "Create paid events or spin up your own channel that your audience will happily buy to get exclusive access to you."
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <section
      {...props}
      className={outerClasses}
      // style={{backgroundImage: "linear-gradient(to bottom right, #0C0B10, #080E37)"}}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>
          
            <br /><br />
          <a id="for-brands">
            <div className="split-bg" >
              <div className="split-item split-left"> 
                           
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h4  className="text-color-primary fw-600 tt-u mb-8"> For Brands  </h4>
                  <br />
                    <h3 className="mt-0 mb-12"> Build the Perfect Branded Experience </h3>
                    <br /> Discover how quickly you can launch an experience consumers love that delivers real results for your business.  <br />
                </div>
                <div className={ classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill' )} data-reveal-container=".split-item" style={{paddingRight: '1%'}}>
                  <Image src={require('../../assets/images/brands1.jpg')}  alt="Features split 01" width={1008} />
                </div>
              </div>

              <div className="split-item split-left" style={{paddingTop: '3%', paddingBottom: 0, }}>
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">  
                <span className="mt-0 mb-12">Increase your speed to market with a fully turn-key solution.</span>
                <br /><br /><br /><br /><br /><br /><br /><br />
                  <div class="content-slider-2">
                    <div class="slider">
                      <div class="mask">
                        <ul>
                        <li class="anim1">
                            <div class="quote">
                            <img  src={require('./../../assets/images/brand-icon.png')} alt="Features tile icon 01" style={{ display: 'inline', width: '30px'}} />
                              &nbsp; <span class="text-color-primary-gradient"> Build your Brands</span>
                              <br /> Make your play with <b> StreamZ </b> and build the Perfect Branded Experience
                            </div>  
                          </li>
                          <li class="anim2">
                            <div class="quote">
                              <img src={require('./../../assets/images/popular-icon.png')} alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                              &nbsp; <span class="text-color-primary-gradient">Own your Audience </span> 
                              <br /> Drive consumers to a platform  at you own so you can engage directly without barriers.
                            </div>
                          </li>
                          <li class="anim3">
                            <div class="quote">
                              <img src={require('./../../assets/images/stream-icon.png')} alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                              &nbsp; <span class="text-color-primary-gradient">Live Shopping </span> 
                              <br />Build a powerful new sales channel with seamless checkout flows using your existing ecommerce solution.
                            </div>
                          </li>
                          <li class="anim4">
                            <div class="quote">
                              <img src={require('./../../assets/images/live-icon.png')} alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                              &nbsp; <span class="text-color-primary-gradient"> Data That Tells a Story </span>
                              <br /> Tell the story of your campaign’s success with robust analytics, first-party data, and more from our in-depth dashboards.
                            </div>
                          </li>
                          <li class="anim5">
                            <div class="quote">
                              <img src={require('./../../assets/images/nft2-icon.png')} alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                              &nbsp; <span class="text-color-primary-gradient"> Launch your NFTs </span> 
                              <br /> Gamify the NFT sales experience. Motivate customers to collect NFTs and earn the exclusive ones
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>                
                  <br /><br />
                </div>
                <div className={ classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill' )} data-reveal-container=".split-item" style={{paddingRight: '1%'}}>
                  <Image  src={require('../../assets/images/BRANDS2.jpg')} alt="Features split 01" width={448} />
                </div>
              </div>
            </div>
          </a>
            <br /><br />       <br /><br /><br />
            {/* ------------ */}
            <a id="for-brands">
            <div className="split-bg-2" >
              <div className="split-item split-right">  
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" style={{marginRight: 0}}>
                  <h4  className="text-color-primary fw-600 tt-u mb-8"> For Creators   </h4>
                  <br />
                    <h3 className="mt-0 mb-12"> Enter the Era of Ownership </h3>
                    <br /> It’s time Creators owe a platform of their own and the control to build lasting, sustainable businesses from their content  <br />
                </div>
                <div className={ classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill' )} data-reveal-container=".split-item" style={{paddingRight: '1%'}}>
                  <Image src={require('../../assets/images/CREATORS2.jpg')}  alt="Features split 01" width={908} />
                </div>
              </div>

              <div className="split-item split-right" style={{paddingTop: '3%', paddingBottom: 0, }}>
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">  
                <span className="mt-0 mb-12">Increase your speed to market with a fully turn-key solution.</span>
                <br /><br /><br /><br /><br /><br /><br /><br />
                  <div class="content-slider-2">
                    <div class="slider">
                      <div class="mask">
                        <ul>
                        <li class="anim1">
                            <div class="quote">
                            <img  src={require('./../../assets/images/brand-icon.png')} alt="Features tile icon 01" style={{ display: 'inline', width: '30px'}} />
                              &nbsp; <span class="text-color-primary-gradient"> Enter the Era of Ownership</span>
                              <br /> Turn your fanbase into loyal and happy paying customers. Monetize your audience and give your followers an interactive live experience they will never forget!
                            </div>  
                          </li>
                          <li class="anim2">
                            <div class="quote">
                              <img src={require('./../../assets/images/popular-icon.png')} alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                              &nbsp; <span class="text-color-primary-gradient">Own your Fans </span> 
                              <br /> Why rent your audience when you can own it? Bring your fans to a piece of virtual real estate you control.
                            </div>
                          </li>
                          <li class="anim3">
                            <div class="quote">
                              <img src={require('./../../assets/images/stream-icon.png')} alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                              &nbsp; <span class="text-color-primary-gradient">Unleash Creative Freedom </span> 
                              <br />Experience the freedom of customizing the way you earn through donations, exclusive merch, and access to events and content..
                            </div>
                          </li>
                          <li class="anim4">
                            <div class="quote">
                              <img src={require('./../../assets/images/live-icon.png')} alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                              &nbsp; <span class="text-color-primary-gradient"> Memberships </span>
                              <br /> Build a VIP fan base around your brand. Tier memberships and offer rewards based on your fans’ NFT purchases.
                            </div>
                          </li>
                          <li class="anim5">
                            <div class="quote">
                              <img src={require('./../../assets/images/nft2-icon.png')} alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                              &nbsp; <span class="text-color-primary-gradient"> Reward Your Community </span> 
                              <br /> Build deeper and more meaningful relationships with your community when you reward them for taking part in your economy.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>                
                  <br /><br />
                </div>
                <div className={ classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill' )} data-reveal-container=".split-item" style={{paddingRight: '1%'}}>
                  <Image  src={require('../../assets/images/creators1.jpg')} alt="Features split 01" width={448} />
                </div>
              </div>
            </div>
          </a>
            {/* --------------------- */}
            

            {/* <a id="for-creators">
            <div className="split-bg-2" >
              <div className="split-item split-right">
                <div className={classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill' )} data-reveal-container=".split-item" style={{paddingLeft: '1%', paddingRight: '2%'}}>
                  <Image src={require('../../assets/images/CREATORS2.jpg')} alt="Features split 02" width={408} height={396} />
                </div>
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                  <h4 className="text-color-primary fw-600 tt-u mb-8"> For Creators  </h4><br />
                  <h3 className="mt-0 mb-12" > Engage your audience in Real-Time  </h3>
                  <br /><br /><br /><br /><br />
                </div>
              </div> 
              <div className="split-item split-right" style={{paddingTop: '3%', paddingBottom: 0, }}>
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8"> For Creators  </div>
                  <h3 className="mt-0 mb-12" > Engage your audience in Real-Time  </h3>
                  <br /><br /><br /><br /><br />
                  <div class="content-slider-right">
                  <div class="slider">
                    <div class="mask">
                      <ul>
                        <li class="anim1">
                          <br/>
                          <div class="quote">
                          <img
                                src={require('./../../assets/images/experience-icon.png')}
                                alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                          &nbsp; <span className="text-color-primary-gradient"> Enter the Era of Ownership </span>
                          <br /> Turn your fanbase into loyal and happy paying customers. Monetize your audience and give your followers an interactive live experience they will never forget!
                          </div>
                          
                        </li>

                        <li class="anim2">
                          <br />
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/fan-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '27px' }} />
                            &nbsp; <span className="text-color-primary-gradient">Own your Fans </span>
                            <br /> Why rent your audience when you can own it? Bring your fans to a piece of virtual real estate you control.
                          </div>
                          
                        </li>

                        <li class="anim3">
                        <br />
                          <div class="quote">
                             <img
                              src={require('./../../assets/images/creativity-icon.png')}
                              alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp; <span className="text-color-primary-gradient"> Unleash Creative Freedom </span>
                            <br />Express yourself with full creative control over the experience you want to create for your unique brand of content.
                          </div>
                          

                        </li>
                        <li class="anim4">
                        <br />
                          <div class="quote">
                            <img
                              src={require('./../../assets/images/queue-icon.png')}
                              alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp; <span className="text-color-primary-gradient"> Memberships </span>
                            <br />Build a VIP fan base around your brand. Tier memberships and offer rewards based on your fans’ NFT purchases.
                          </div>
                          
                        </li>
                        <li class="anim5">
                        <br />
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/event-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp; <span className="text-color-primary-gradient"> Become the Platform </span>
                            <br /> Why be in a sea of many, when you can be the ocean? Quit renting your audience and start owning it. Get more from your content than likes and cents on the dollar.
                          </div>
                            
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
                <div className={ classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill' )} data-reveal-container=".split-item" style={{paddingRight: '1%'}}>
                  <Image  src={require('../../assets/images/BRANDS2.jpg')} alt="Features split 01" width={448} />
                </div>
              <br /><br />
            </div>
            </div>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;