import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Typewriter from "typewriter-effect";
import TextTransition, { presets } from "react-text-transition";
// import RotationBox from "react-3d-rotation-box";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

let i = 1;
function flipCard () {
  let cardTransitionTime = 500;
  var card = document.getElementById("js-card");
  let switching = false
  
  if (switching) {
     return false
  }
  switching = true
  // if (i)
    // card.classList.toggle("is-switched");
  // else
  //   card.classList.remove("is-switched");
  // i = 1 - i;

  
  window.setTimeout(function () {
    //  card.children.classList.toggle('is-active')
    // card.classList.remove("is-switched")
     switching = false
  }, cardTransitionTime / 2)
}

window.setTimeout(flipCard, 3000);

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const TEXTS = [
    "to introduce their stores live",
    "to engage with the audience",
    "to collect and trade NFTs",
    "to collaborate with advertisers in the Metaverse"
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
      style={{backgroundImage: "linear-gradient(to bottom right, #000000, #25143D, #000000)"}}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h4 className="hero-h mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{display: "block"}}>
            {/* <span className="text-color-primary-gradient">StreamZ</span> empowers influencers <br /> */}
            <span className="text-color-primary-gradient">StreamZ</span> is a new kind of social network where influencers share their lifestyle with live stream shopping and engage with the audience, collect and trade NFTs and collaborate with advertisers in the Metaverse.
            </h4>

            {/* <div class="card js-card" id="js-card">
              <div class="card__wrapper">
                <div class="card__side is-active">
                  <span className="text-color-primary-gradient">StreamZ</span> is a new kind of social network where influencers share their lifestyle with live stream shopping and engage with the audience, collect and trade NFTs and collaborate with advertisers in the Metaverse.
                </div>
                <div class="card__side card__side--back">
                  We are on a mission to change how <span className="text-color-primary-gradient">Brands</span> and <span className="text-color-primary-gradient">Creators</span> monetize their passion and products blending the convenience of online shopping and storytelling with the engaging <span className="text-color-primary-gradient">LiveStreams</span>.
                </div>
              </div>
            </div> */}

            {/* <Typewriter  
                loop="true"                options={{ loop: true }}
                onInit={(typewriter)=> {
                typewriter
                .changeDelay(60)                .changeDeleteSpeed(1)
                .typeString("to introduce their stores live")                .pauseFor(1000)                .deleteAll()
                .typeString("to engage with the audience")                .pauseFor(1000)                .deleteAll()
                .typeString("to collect and trade NFTs")                .pauseFor(1000)                .deleteAll()
                .typeString("to collaborate with advertisers in the Metaverse")                .pauseFor(1000)
                .start();
                }}
            /> */}

            {/* <a href=""><Button className="btn-info">Read Our Whitepaper</Button></a> */}
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              {/* <RotationBox> */}
                <Image
                  className="has-shadow"
                  src={require('./../../assets/images/brands1.jpg')}
                  // src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Fa419fbf4-9fb3-4a61-a015-1a454cf64096_livestream_jpg.jpg%3Fbucket%3Ddocument&w=1200&q=75"
                  alt="Hero"
                  width={896}
                  height={504} />
              {/* </RotationBox> */}
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </div>
        <h4 className="hero-h mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{display: "block"}}>
            We are on a mission to change how <span className="text-color-primary-gradient">Brands</span> and <span className="text-color-primary-gradient">Creators</span> monetize their passion and products blending the convenience of online shopping and storytelling with the engaging <span className="text-color-primary-gradient">LiveStreams</span>.
        </h4>
        <br /><br />
        {/* <Image
              className="has-shadow"
              src={require('./../../assets/images/creators1.jpg')}
              // src="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Fa419fbf4-9fb3-4a61-a015-1a454cf64096_livestream_jpg.jpg%3Fbucket%3Ddocument&w=1200&q=75"
              alt="Hero"
              width={896}
              height={504} /> */}
        
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;