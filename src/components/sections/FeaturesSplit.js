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

            <div className="split-item split-left">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8"> For Brands  </div>
                <h3 className="mt-0 mb-12"> Livestream to Increase E-Commerce Sales </h3>
                <p className="m-0">
                Livestream your products or take your store live from anywhere in the world to increase sales. <br />
                Have hundreds of attendees shop your products live while interacting with you. <br />
                Create paid events or spin up your own channel that your audience will happily buy to get exclusive access to you.
                </p>
              </div>
              <div className={ classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill' )} data-reveal-container=".split-item">
                <Image
                  src="https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2ZXN0cmVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Features split 01" width={528} height={396} />
              </div>
            </div>

            <div className="split-item split-right">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"> For Influencers  </div>
                <h3 className="mt-0 mb-12"> Engage your audience in Real-Time  </h3>
                <p className="m-0">
                Get your audience on stage for a real-time interaction to increase sales. <br />
                Give your followers a 1:1 and 1:many live experiences they will never forget and build your community. <br />
                Let your followers share your live performance with their social networks to create a viral effect in real-time. <br />
                With Livestream Commerce, now an industry first for luxury brands, creators can form deeper connections and answer questions in real-time through live video.
                </p>
              </div>
              <div className={classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill' )}
                data-reveal-container=".split-item">
                <Image
                  src="https://images.unsplash.com/photo-1593677193813-e99785037dfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Features split 02" width={428} height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;