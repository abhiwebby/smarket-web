import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import payment_icon1 from '../assets/images/footer-icons/pyicon-1.svg';
import payment_icon2 from '../assets/images/footer-icons/pyicon-2.svg';
import payment_icon3 from '../assets/images/footer-icons/pyicon-3.svg';
import payment_icon4 from '../assets/images/footer-icons/pyicon-4.svg';
import payment_icon6 from '../assets/images/footer-icons/pyicon-6.svg';

import download_icon1 from '../assets/images/download-1.svg';
import download_icon2 from '../assets/images/download-2.svg';

class Footer extends Component {
  render() {
    return (
      <footer class='footer'>
        <div class='footer-first-row'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-6 col-sm-6'>
                <ul class='call-email-alt'>
                  <li>
                    <Link to='#' class='callemail'>
                      <i class='uil uil-dialpad-alt'></i>1800-000-000
                    </Link>
                  </li>
                  <li>
                    <Link to='#' class='callemail'>
                      <i class='uil uil-envelope-alt'></i>
                      <span
                        class='__cf_email__'
                        data-cfemail='0f666169604f686e626d607c7a7f6a7d626e7d646a7b216c6062'
                      >
                        [email&#160;protected]
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div class='col-md-6 col-sm-6'>
                <div class='social-links-footer'>
                  <ul>
                    <li>
                      <Link to='#'>
                        <i class='fab fa-facebook-f'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i class='fab fa-twitter'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i class='fab fa-google-plus-g'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i class='fab fa-linkedin-in'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i class='fab fa-instagram'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i class='fab fa-pinterest-p'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='footer-second-row'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-3 col-md-6 col-sm-6'>
                <div class='second-row-item'>
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <Link to='#'>Fruits and Vegetables</Link>
                    </li>
                    <li>
                      <Link to='#'>Grocery & Staples</Link>
                    </li>
                    <li>
                      <Link to='#'>Dairy & Eggs</Link>
                    </li>
                    <li>
                      <Link to='#'>Beverages</Link>
                    </li>
                    <li>
                      <Link to='#'>Snacks</Link>
                    </li>
                    <li>
                      <Link to='#'>Home Care</Link>
                    </li>
                    <li>
                      <Link to='#'>Noodles & Sauces</Link>
                    </li>
                    <li>
                      <Link to='#'>Personal Care</Link>
                    </li>
                    <li>
                      <Link to='#'>Pet Care</Link>
                    </li>
                    <li>
                      <Link to='#'>Meat & Seafood</Link>
                    </li>
                    <li>
                      <Link to='#'>Electronics</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-sm-6'>
                <div class='second-row-item'>
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <Link to='about_us.html'>About US</Link>
                    </li>
                    <li>
                      <Link to='shop_grid.html'>Featured Products</Link>
                    </li>
                    <li>
                      <Link to='offers.html'>Offers</Link>
                    </li>
                    <li>
                      <Link to='our_blog.html'>Blog</Link>
                    </li>
                    <li>
                      <Link to='faq.html'>Faq</Link>
                    </li>
                    <li>
                      <Link to='career.html'>Careers</Link>
                    </li>
                    <li>
                      <Link to='contact_us.html'>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-sm-6'>
                <div class='second-row-item'>
                  <h4>Top Cities</h4>
                  <ul>
                    <li>
                      <Link to='#'>Gurugram</Link>
                    </li>
                    <li>
                      <Link to='#'>New Delhi</Link>
                    </li>
                    <li>
                      <Link to='#'>Bangaluru</Link>
                    </li>
                    <li>
                      <Link to='#'>Mumbai</Link>
                    </li>
                    <li>
                      <Link to='#'>Hyderabad</Link>
                    </li>
                    <li>
                      <Link to='#'>Kolkata</Link>
                    </li>
                    <li>
                      <Link to='#'>Ludhiana</Link>
                    </li>
                    <li>
                      <Link to='#'>Chandigrah</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-lg-3 col-md-6 col-sm-6'>
                <div class='second-row-item-app'>
                  <h4>Download App</h4>
                  <ul>
                    <li>
                      <Link to='#'>
                        <img class='download-btn' src={download_icon1} alt='' />
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <img class='download-btn' src={download_icon2} alt='' />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class='second-row-item-payment'>
                  <h4>Payment Method</h4>
                  <div class='footer-payments'>
                    <ul id='paypal-gateway' class='financial-institutes'>
                      <li class='financial-institutes__logo'>
                        <img alt='Visa' title='Visa' src={payment_icon6} />
                      </li>
                      <li class='financial-institutes__logo'>
                        <img alt='Visa' title='Visa' src={payment_icon1} />
                      </li>
                      <li class='financial-institutes__logo'>
                        <img
                          alt='MasterCard'
                          title='MasterCard'
                          src={payment_icon2}
                        />
                      </li>
                      <li class='financial-institutes__logo'>
                        <img
                          alt='American Express'
                          title='American Express'
                          src={payment_icon3}
                        />
                      </li>
                      <li class='financial-institutes__logo'>
                        <img
                          alt='Discover'
                          title='Discover'
                          src={payment_icon4}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='second-row-item-payment'>
                  <h4>Newsletter</h4>
                  <div class='newsletter-input'>
                    <input
                      id='email'
                      name='email'
                      type='text'
                      placeholder='Email Address'
                      class='form-control input-md'
                      required=''
                    />
                    <button class='newsletter-btn hover-btn' type='submit'>
                      <i class='uil uil-telegram-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='footer-last-row'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-12'>
                <div class='footer-bottom-links'>
                  <ul>
                    <li>
                      <Link to='about_us.html'>About</Link>
                    </li>
                    <li>
                      <Link to='contact_us.html'>Contact</Link>
                    </li>
                    <li>
                      <Link to='privacy_policy.html'>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to='term_and_conditions.html'>
                        Term & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to='refund_and_return_policy.html'>
                        Refund & Return Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class='copyright-text'>
                  <i class='uil uil-copyright'></i>Copyright 2021 <b>Smarket</b>{' '}
                  . All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
