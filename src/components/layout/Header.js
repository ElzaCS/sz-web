import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const changeBg = () => {
    if (window.scrollY >= 60) {
      // setNavbarLogo(logoBlue)
    } else {
      // setNavbarLogo(logo)
    }
  }

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className,
    // 'sticky'
  );

  return (
    <StickyHeader
      className="stickyheader"
    // This is the sticky part of the header.
    header={
      // <header      {...props}      className={classes}    >
        <div className="sticky">
        {/* <div className="container" style={{position: 'sticky', top: 0}}> */}

          <div className={ classNames( 'site-header-inner', bottomDivider && 'has-bottom-divider' )}>
          {/* &ensp;&ensp; &ensp;&ensp; &ensp;&ensp; */}
          <Logo /> &ensp;&ensp;
            <h2 className="brand-name">StreamZ</h2>
            {!hideNav &&
              <>
                <button ref={hamburger}  className="header-nav-toggle"  onClick={isActive ? closeMenu : openMenu}   >
                  <span className="screen-reader">Menu</span>
                  <span className="hamburger">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <nav ref={nav} className={ classNames( 'header-nav',  isActive && 'is-active'  )}>
                  <div className="header-nav-inner">
                    <ul className={classNames('list-reset text-xs', navPosition && `header-nav-${navPosition}`)}>
                      <li> <a href="#for-brands" onClick={closeMenu}>Brands</a> </li>
                    </ul>
                    <ul className={classNames('list-reset text-xs', navPosition && `header-nav-${navPosition}`)}>
                      <li> <a href="#for-creators" onClick={closeMenu}>Creators</a> </li>
                    </ul>
                    <ul className={classNames('list-reset text-xs', navPosition && `header-nav-${navPosition}`)}>
                      <li> <a href="#connect" onClick={closeMenu}>Connect With Us</a> </li>
                    </ul>
                    {/* <ul className={classNames('list-reset text-xs', navPosition && `header-nav-${navPosition}`)}>
                      <li> <a href="https://twitter.com/IncStreamz" onClick={closeMenu}>Twitter</a> </li>
                    </ul>
                    <ul className={classNames('list-reset text-xs', navPosition && `header-nav-${navPosition}`)}>
                      <li> <Link to="#0" onClick={closeMenu}>Instagram</Link> </li>
                    </ul> */}
                    {!hideSignin &&
                      <ul className="list-reset header-nav-right" >
                        <li><Link to="#0" className="button button-primary button-wide-mobile button-sm" onClick={closeMenu}>Schedule a Meet</Link> </li>
                      </ul>}
                      &ensp;&ensp;&ensp;&ensp;
                  </div>
                  
                </nav>
              </>
            }
          </div>
        </div>
      // {/* </header> */}
    }
    ></StickyHeader>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
