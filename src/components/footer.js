import React, { Component } from 'react';
require('../css/footer.scss');

class Footer extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="footer-container">
      <div className="footer container">
        <div className="left-footer-column">
            <ul>
                <li><a href="" title="About us">About Us</a></li>
                <li><a href="" title="Contact us">Contact Us</a></li>
                <li><a href="" title="Blog">Blog</a></li>
            </ul>
        </div>
         <div className="center-footer-column">
              <ul>
                <li><a href="" title="About us">DELIVERY & RETURNS</a></li>
                <li><a href="" title="Contact us">LOGIN/REGISTER</a></li>
                <li><a href="" title="Blog">MY BASKET</a></li>
            </ul>
        </div>
         <div className="right-footer-column">
              <ul>
                <li><a href="" title="About us">About Us</a></li>
                <li><a href="" title="Contact us">Contact Us</a></li>
                <li><a href="" title="Blog">Blog</a></li>
            </ul>
        </div>
    </div>
    </div>
    );
  }

}

export default Footer;
