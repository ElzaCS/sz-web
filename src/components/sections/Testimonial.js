import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className="section-header center-content"  >
            <div className="container-xs">
              <h2 className="mt-0 mb-16">Financial Software that <span className="text-color-primary-gradient"> accelerates</span> your growth</h2>
              <p className="m-0">Cardy allows you to handle your finances with transparency and insights that helps fuel your company's growth.</p>            
            </div>
          </div>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <Image
                     src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFuayUyMGFjY291bnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></Image>
                  <h3 className="testimonial-item-name text-color-high">Get a complete bank account</h3>
                  <p className="text-sm mb-0">Open bank accounts with virtual cards, team management, API access, and more. </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                <Link to="#0"><span className="testimonial-item-link">Learn More</span></Link>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <Image
                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlcG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></Image>
                  <h3 className="testimonial-item-name text-color-high">Auto-Generate Reports</h3>
                  <p className="text-sm mb-0"> Easily generate monthly, quarterly, and yearly reports with just one click.  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  {/* <span className="testimonial-item-name text-color-high">Diana Rynzhuk</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span> */}
                  <span className="testimonial-item-link">  <Link to="#0">Learn More</Link></span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <Image
                     src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuayUyMGluJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></Image>
                  <h3 className="testimonial-item-name text-color-high">Manage from your phone</h3>
                  <p className="text-sm mb-0"> Manage your account with confidence using our powerful mobile app. </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  {/* <span className="testimonial-item-name text-color-high">Ben Stafford</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span> */}
                   <span className="testimonial-item-link">  <Link to="#0">Learn More</Link>  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;