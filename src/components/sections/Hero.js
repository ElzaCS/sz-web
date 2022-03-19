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
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h4 className="hero-h mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{display: "block"}}>
            <span className="text-color-primary-gradient">StreamZ</span> empowers influencers <br />
            {/* <TextTransition
              text={ TEXTS[index % TEXTS.length] }
              springConfig={ presets.wobbly }
              inline={true}
            /> */}
            <Typewriter  
                loop="true"
                options={{
                  loop: true
                }}
                onInit={(typewriter)=> {
                typewriter
                .changeDelay(60)
                .changeDeleteSpeed(1)
                .typeString("to introduce their stores live")
                .pauseFor(1000)
                .deleteAll()
                .typeString("to engage with the audience")
                .pauseFor(1000)
                .deleteAll()
                .typeString("to collect and trade NFTs")
                .pauseFor(1000)
                .deleteAll()
                .typeString("to collaborate with advertisers in the Metaverse")
                .pauseFor(1000)
                .start();
                }}
            />
             {/* is a new kind of social network where influencers share their lifestyle with live stream shopping and engage with the audience, collect and trade NFTs and collaborate with advertisers in the Metaverse */}
            </h4>
            <a href=""><Button className="btn-info">Read Our Whitepaper</Button></a>
            {/* <h3 className="text-color-primary-gradient"><a href="">Read Our Whitepaper</a></h3> */}
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
                  src={require('./../../assets/images/video-placeholder.jpg')}
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
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;