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
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12"> Founder's Letter </h3>
                <p className="m-0"> Dear Reader,</p>
                {/* <br /> */}
                <p className="m-0">Vavo Digital was born out of tough experiences, out of pain encountered during hundreds of my influencer marketing campaigns. We realised that there are problems on both sides of the Influencer marketing world.</p>
                {/* <br /> */}
                {/* <p className="m-0"> With over database of 50k+ Influencers on LinkedIn, 2,75,000+ active Influencers on Instagram, 2,00,000+ Active Youtube Influencers , 25,000+ active influencers on short video platforms & 12+ Categories of Influencers PAN India presence, we have proudly exceeded our clients expectations.</p> */}
                {/* <br /> */}
                <p className="m-0"> We’ve systemized our learnings and turned them into a service that reimagines the way you approached influencer marketing while boosting the impact of your campaigns at the same time.  </p>
                <br />
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">NEHA PURI <br />
                        Founder, VavoDigital</div>
              </div>
              <div className={ classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill' )} data-reveal-container=".split-item">
                {/* <Image
                  src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm91bmRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Features split 01" width={528} height={296} /> */}
                  <Image
                    src="https://images.unsplash.com/photo-1620161914566-c9f1e8bf023d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvdW5kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Features split 01" width={528} height={296} />
              </div>
            </div>

            {/* <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"> Lightning fast workflow  </div>
                <h3 className="mt-0 mb-12"> Data-driven insights  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className={classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill' )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02" width={528} height={396} />
              </div>
            </div> */}

            {/* <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"> Lightning fast workflow </div>
                <h3 className="mt-0 mb-12"> Data-driven insights </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className={
                classNames('split-item-image center-content-mobile reveal-from-bottom', imageFill && 'split-item-image-fill'  )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03" width={528} height={396} />
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;