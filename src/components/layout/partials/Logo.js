import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            className="logo"
            src="https://api.typedream.com/v0/document/public/05b25c61-4a01-4746-b814-94c52ad50af6_StreamZ_Logo_jpg.jpg"
            alt="Open"
            width={52}
            height={32} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;