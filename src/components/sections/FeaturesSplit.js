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
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>
          <a id="for-brands">
            <div className="split-item split-left">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"> For Brands  </div>
                  <h3 className="mt-0 mb-12"> Livestream to Increase E-Commerce Sales </h3>
                  <br /><br /><br />
                  {/* <div class='console-container'>
                      <div class='console-underscore' id='console'>&#95;</div>
                  </div> */}
                {/* <TextTransition
                  className="features-transition"
                  text={ TEXTS_BRANDS[index % TEXTS_BRANDS.length] }
                  springConfig={ presets.wobbly }
                /> */}
                {/* ------ */}
                <div class="content-slider">
                  <div class="slider">
                    <div class="mask">
                      <ul>
                        <li class="anim1">
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/stream-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            <span class="text-color-primary-gradient">Livestream </span> your products to grow your audience</div>
                            <br />
                            <div class="quote">
                            <img
                                  src={require('./../../assets/images/stream-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            <span class="text-color-primary-gradient">Take your store </span> live from anywhere in the world to increase sales
                          </div>
                        </li>

                        <li class="anim2">
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/stream-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            <span class="text-color-primary-gradient">Take your store </span> live from anywhere in the world to increase sales
                          </div>
                          <br />
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/queue-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            Have hundreds of attendees shop your products live while <span class="text-color-primary-gradient"> interacting </span> with you.
                          </div>
                        </li>

                        <li class="anim3">
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/queue-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            Have hundreds of attendees shop your products live while <span class="text-color-primary-gradient"> interacting </span> with you.
                          </div>
                          <br />
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/queue-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            Create <span class="text-color-primary-gradient">paid events </span> for your dedicated audience
                          </div>

                        </li>
                        <li class="anim4">
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/queue-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            Create <span class="text-color-primary-gradient">paid events </span> for your dedicated audience
                          </div>
                          <br />
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/event-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            Spin up your own channel for your audience to get <span class="text-color-primary-gradient">exclusive access </span> to you.
                          </div>
                        </li>
                        <li class="anim5">
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/event-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            Spin up your own channel for your audience to get <span class="text-color-primary-gradient">exclusive access </span> to you.
                          </div>
                          <br />
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/stream-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            <span class="text-color-primary-gradient">Livestream </span> your products to grow your audience
                          </div>
                            
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>                
                
              </div>

              <div className={ classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill' )} data-reveal-container=".split-item">
                <Image
                  src="https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2ZXN0cmVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Features split 01" width={528} height={396} />
              </div>
            </div>
            </a>

            <a id="for-influencers">
            <div className="split-item split-right">
            <div className={classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill' )}
                data-reveal-container=".split-item" style={{ paddingRight: '3%'}}>
                <Image
                  src="https://images.unsplash.com/photo-1593677193813-e99785037dfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Features split 02" width={408} height={396} />
              </div>
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"> For Influencers  </div>
                <h3 className="mt-0 mb-12" > Engage your audience in Real-Time  </h3>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <div class="content-slider-right">
                  <div class="slider">
                    <div class="mask">
                      <ul>
                        <li class="anim1">
                          <div class="quote">
                          <img
                                src={require('./../../assets/images/popular-icon.png')}
                                alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                          &nbsp;
                          Get your audience on stage for a <span className="text-color-primary-gradient">real-time interaction</span> to increase sales.
                          </div>
                          <br />
                          <div class="quote">
                          <img
                            src={require('./../../assets/images/experience-icon.png')}
                            alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                      &nbsp;
                      Give your followers a 1:1 and 1:many <span className="text-color-primary-gradient">live experiences </span><span className="text-color-primary-gradient">they will never forget </span> and build your community.
                          </div>
                        </li>

                        <li class="anim2">
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/experience-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            Give your followers a 1:1 and 1:many <span className="text-color-primary-gradient">live experiences </span><span className="text-color-primary-gradient">they will never forget </span> and build your community.
                          </div>
                          <br />
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/live-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            Let your followers share your live performance with their social networks to create a <span className="text-color-primary-gradient">viral effect</span> in real-time.
                          </div>
                        </li>

                        <li class="anim3">
                          <div class="quote">
                             <img
                              src={require('./../../assets/images/live-icon.png')}
                              alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            Let your followers share your live performance with their social networks to create a <span className="text-color-primary-gradient">viral effect</span> in real-time.
                          </div>
                          <br />
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/trust-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            With Livestream Commerce, now an industry first for luxury brands, creators can form <span className="text-color-primary-gradient">deeper connections </span> and answer questions in real-time through live video.
                          </div>

                        </li>
                        <li class="anim4">
                          <div class="quote">
                            <img
                              src={require('./../../assets/images/trust-icon.png')}
                              alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            With Livestream Commerce, now an industry first for luxury brands, creators can form <span className="text-color-primary-gradient">deeper connections </span> and answer questions in real-time through live video.
                          </div>
                          <br />
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/event-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            <span className="text-color-primary-gradient">Monetize your content </span>in multiple ways, while also putting power back into the hands of their audience.
                          </div>
                        </li>
                        <li class="anim5">
                          <div class="quote">
                            <img
                                  src={require('./../../assets/images/event-icon.png')}
                                  alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                            &nbsp;
                            <span className="text-color-primary-gradient">Monetize your content </span>in multiple ways, while also putting power back into the hands of their audience.
                          </div>
                          <br />
                          <div class="quote">
                          <img
                                src={require('./../../assets/images/popular-icon.png')}
                                alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                          &nbsp;
                          Get your audience on stage for a <span className="text-color-primary-gradient">real-time interaction</span> to increase sales.
                          </div>
                            
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
              </div>
              <br /><br />
            </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;