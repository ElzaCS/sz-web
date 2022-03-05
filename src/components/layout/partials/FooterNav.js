import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      {/* <ul className="list-reset">
        <li>  <Link to="#0">Contact</Link>       </li>
        <li>  <Link to="#0">Quick Links</Link>   </li>
        <li>  <Link to="#0">FAQ's</Link>
          <ul className="sub-list">
            <li>1</li>
            <li>2</li>
          </ul>
        </li>
        <li>  <Link to="#0">Recent Blogs</Link>   </li>
      </ul> */}
      <table>
        <tbody>
          <tr>
            <th><center>Product</center></th>
            <th><center>Company</center></th>
          </tr>
          <tr>
            <td>Overview</td>
            <td>About Cardy</td>
          </tr>
          <tr>
            <td>Business Account</td>
            <td>Contact</td>
          </tr>
          <tr>
            <td>Credit card</td>
            <td>Careers</td>
          </tr>
          <tr>
            <td>Reports</td>
            <td>Blog</td>
          </tr>
          <tr>
            <td>Analytics</td>
            <td>Press</td>
          </tr>
          <tr>
            <td>Team management</td>
            <td></td>
          </tr>
          <tr>
            <td>Integrations</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </nav>
  );
}

export default FooterNav;