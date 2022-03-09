import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

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
                <p className="m-0" style={{paddingLeft: '3%', paddingTop: '3%'}}>
                  <img
                      src={require('./../../assets/images/stream-icon.png')}
                      alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                 &nbsp; Livestream your products or <span className="text-color-primary-gradient">take your store </span> live from anywhere in the world to increase sales. 
                </p>
                {/* <br /> */}
                <p className="m-0" style={{paddingLeft: '3%', paddingTop: '3%'}}>
                <img
                      src={require('./../../assets/images/queue-icon.png')}
                      alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                 &nbsp;
                Have hundreds of attendees shop your products live while <span className="text-color-primary-gradient"> interacting </span> with you. <br />
                </p>
                <p className="m-0" style={{paddingLeft: '3%', paddingTop: '3%'}}>
                <img
                      src={require('./../../assets/images/event-icon.png')}
                      alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                 &nbsp;
                Create paid events or spin up your own channel that your audience will happily buy to get <span className="text-color-primary-gradient">exclusive access </span> to you.
                </p>
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
                <h3 className="mt-0 mb-12"> Engage your audience in Real-Time  </h3>
                <p className="m-0" style={{paddingLeft: '3%', paddingTop: '3%'}}>
                <img
                      src={require('./../../assets/images/popular-icon.png')}
                      alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                 &nbsp;
                Get your audience on stage for a <span className="text-color-primary-gradient">real-time interaction</span> to increase sales. <br />
                </p>
                <p className="m-0" style={{paddingLeft: '3%', paddingTop: '3%'}}>
                <img
                      src={require('./../../assets/images/experience-icon.png')}
                      alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                 &nbsp;
                Give your followers a 1:1 and 1:many <span className="text-color-primary-gradient">live experiences </span><span className="text-color-primary-gradient">they will never forget </span> and build your community. <br />
                </p>
                <p className="m-0" style={{paddingLeft: '3%', paddingTop: '3%'}}>
                <img
                      src={require('./../../assets/images/live-icon.png')}
                      alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                 &nbsp;
                Let your followers share your live performance with their social networks to create a <span className="text-color-primary-gradient">viral effect</span> in real-time. <br />
                </p>
                <p className="m-0" style={{paddingLeft: '3%', paddingTop: '3%'}}>
                <img
                      src={require('./../../assets/images/trust-icon.png')}
                      alt="Features tile icon 01" style={{ display: 'inline', width: '25px' }} />
                 &nbsp;
                With Livestream Commerce, now an industry first for luxury brands, creators can form <span className="text-color-primary-gradient">deeper connections </span> and answer questions in real-time through live video.
                </p>
              </div>
              
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