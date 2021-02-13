import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import logo_dark from '../assets/images/dark-logo-1.svg';
import user_profile from '../assets/images/avatar/img-5.jpg';

class Header extends Component {
  render() {
    return (
      <div>
        <div
          id='category_model'
          class='header-cate-model main-gambo-model modal fade'
          tabindex='-1'
          role='dialog'
          aria-modal='false'
        >
          <div class='modal-dialog category-area' role='document'>
            <div class='category-area-inner'>
              <div class='modal-header'>
                <button
                  type='button'
                  class='close btn-close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <i class='uil uil-multiply'></i>
                </button>
              </div>
              <div class='category-model-content modal-content'>
                <div class='cate-header'>
                  <h4>Select Category</h4>
                </div>
                <ul class='category-by-cat'>
                  <li>
                    <Link to='#' class='single-cat-item'>
                      <div class='icon'>
                        <img src='images/category/icon-1.svg' alt='' />
                      </div>
                      <div class='text'> Fruits and Vegetables </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#' class='single-cat-item'>
                      <div class='icon'>
                        <img src='images/category/icon-2.svg' alt='' />
                      </div>
                      <div class='text'> Grocery & Staples </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#' class='single-cat-item'>
                      <div class='icon'>
                        <img src='images/category/icon-3.svg' alt='' />
                      </div>
                      <div class='text'> Dairy & Eggs </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#' class='single-cat-item'>
                      <div class='icon'>
                        <img src='images/category/icon-4.svg' alt='' />
                      </div>
                      <div class='text'> Beverages </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#' class='single-cat-item'>
                      <div class='icon'>
                        <img src='images/category/icon-5.svg' alt='' />
                      </div>
                      <div class='text'> Snacks </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#' class='single-cat-item'>
                      <div class='icon'>
                        <img src='images/category/icon-6.svg' alt='' />
                      </div>
                      <div class='text'> Home Care </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#' class='single-cat-item'>
                      <div class='icon'>
                        <img src='images/category/icon-7.svg' alt='' />
                      </div>
                      <div class='text'> Noodles & Sauces </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#' class='single-cat-item'>
                      <div class='icon'>
                        <img src='images/category/icon-8.svg' alt='' />
                      </div>
                      <div class='text'> Personal Care </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#' class='single-cat-item'>
                      <div class='icon'>
                        <img src='images/category/icon-9.svg' alt='' />
                      </div>
                      <div class='text'> Pet Care </div>
                    </Link>
                  </li>
                </ul>
                <Link to='#' class='morecate-btn'>
                  <i class='uil uil-apps'></i>More Categories
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id='search_model'
          class='header-cate-model main-gambo-model modal fade'
          tabindex='-1'
          role='dialog'
          aria-modal='false'
        >
          <div class='modal-dialog search-ground-area' role='document'>
            <div class='category-area-inner'>
              <div class='modal-header'>
                <button
                  type='button'
                  class='close btn-close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <i class='uil uil-multiply'></i>
                </button>
              </div>
              <div class='category-model-content modal-content'>
                <div class='search-header'>
                  <form action='#'>
                    <input type='search' placeholder='Search for products...' />
                    <button type='submit'>
                      <i class='uil uil-search'></i>
                    </button>
                  </form>
                </div>
                <div class='search-by-cat'>
                  <Link to='#' class='single-cat'>
                    <div class='icon'>
                      <img src='images/category/icon-1.svg' alt='' />
                    </div>
                    <div class='text'>Fruits and Vegetables</div>
                  </Link>
                  <Link to='#' class='single-cat'>
                    <div class='icon'>
                      <img src='images/category/icon-2.svg' alt='' />
                    </div>
                    <div class='text'> Grocery & Staples </div>
                  </Link>
                  <Link to='#' class='single-cat'>
                    <div class='icon'>
                      <img src='images/category/icon-3.svg' alt='' />
                    </div>
                    <div class='text'> Dairy & Eggs </div>
                  </Link>
                  <Link to='#' class='single-cat'>
                    <div class='icon'>
                      <img src='images/category/icon-4.svg' alt='' />
                    </div>
                    <div class='text'> Beverages </div>
                  </Link>
                  <Link to='#' class='single-cat'>
                    <div class='icon'>
                      <img src='images/category/icon-5.svg' alt='' />
                    </div>
                    <div class='text'> Snacks </div>
                  </Link>
                  <Link to='#' class='single-cat'>
                    <div class='icon'>
                      <img src='images/category/icon-6.svg' alt='' />
                    </div>
                    <div class='text'> Home Care </div>
                  </Link>
                  <Link to='#' class='single-cat'>
                    <div class='icon'>
                      <img src='images/category/icon-7.svg' alt='' />
                    </div>
                    <div class='text'> Noodles & Sauces </div>
                  </Link>
                  <Link to='#' class='single-cat'>
                    <div class='icon'>
                      <img src='images/category/icon-8.svg' alt='' />
                    </div>
                    <div class='text'> Personal Care </div>
                  </Link>
                  <Link to='#' class='single-cat'>
                    <div class='icon'>
                      <img src='images/category/icon-9.svg' alt='' />
                    </div>
                    <div class='text'> Pet Care </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='bs-canvas bs-canvas-left position-fixed bg-cart h-100'>
          <div class='bs-canvas-header side-cart-header p-3 '>
            <div class='d-inline-block  main-cart-title'>
              My Cart <span>(2 Items)</span>
            </div>
            <button
              type='button'
              class='bs-canvas-close close'
              aria-label='Close'
            >
              <i class='uil uil-multiply'></i>
            </button>
          </div>
          <div class='bs-canvas-body'>
            <div class='cart-top-total'>
              <div class='cart-total-dil'>
                <h4>Gambo Super Market</h4>
                <span>$34</span>
              </div>
              <div class='cart-total-dil pt-2'>
                <h4>Delivery Charges</h4>
                <span>$1</span>
              </div>
            </div>
            <div class='side-cart-items'>
              <div class='cart-item'>
                <div class='cart-product-img'>
                  <img src='images/product/img-1.jpg' alt='' />
                  <div class='offer-badge'>6% OFF</div>
                </div>
                <div class='cart-text'>
                  <h4>Product Title Here</h4>
                  <div class='cart-radio'>
                    <ul class='kggrm-now'>
                      <li>
                        <input type='radio' id='a1' name='cart1' />
                        <label for='a1'>0.50</label>
                      </li>
                      <li>
                        <input type='radio' id='a2' name='cart1' />
                        <label for='a2'>1kg</label>
                      </li>
                      <li>
                        <input type='radio' id='a3' name='cart1' />
                        <label for='a3'>2kg</label>
                      </li>
                      <li>
                        <input type='radio' id='a4' name='cart1' />
                        <label for='a4'>3kg</label>
                      </li>
                    </ul>
                  </div>
                  <div class='qty-group'>
                    <div class='quantity buttons_added'>
                      <input type='button' value='-' class='minus minus-btn' />
                      <input
                        type='number'
                        step='1'
                        name='quantity'
                        value='1'
                        class='input-text qty text'
                      />
                      <input type='button' value='+' class='plus plus-btn' />
                    </div>
                    <div class='cart-item-price'>
                      $10 <span>$15</span>
                    </div>
                  </div>
                  <button type='button' class='cart-close-btn'>
                    <i class='uil uil-multiply'></i>
                  </button>
                </div>
              </div>
              <div class='cart-item'>
                <div class='cart-product-img'>
                  <img src='images/product/img-2.jpg' alt='' />
                  <div class='offer-badge'>6% OFF</div>
                </div>
                <div class='cart-text'>
                  <h4>Product Title Here</h4>
                  <div class='cart-radio'>
                    <ul class='kggrm-now'>
                      <li>
                        <input type='radio' id='a5' name='cart2' />
                        <label for='a5'>0.50</label>
                      </li>
                      <li>
                        <input type='radio' id='a6' name='cart2' />
                        <label for='a6'>1kg</label>
                      </li>
                      <li>
                        <input type='radio' id='a7' name='cart2' />
                        <label for='a7'>2kg</label>
                      </li>
                    </ul>
                  </div>
                  <div class='qty-group'>
                    <div class='quantity buttons_added'>
                      <input type='button' value='-' class='minus minus-btn' />
                      <input
                        type='number'
                        step='1'
                        name='quantity'
                        value='1'
                        class='input-text qty text'
                      />
                      <input type='button' value='+' class='plus plus-btn' />
                    </div>
                    <div class='cart-item-price'>
                      $24 <span>$30</span>
                    </div>
                  </div>
                  <button type='button' class='cart-close-btn'>
                    <i class='uil uil-multiply'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class='bs-canvas-footer'>
            <div class='cart-total-dil saving-total '>
              <h4>Total Saving</h4>
              <span>$11</span>
            </div>
            <div class='main-total-cart'>
              <h2>Total</h2>
              <span>$35</span>
            </div>
            <div class='checkout-cart'>
              <Link to='#' class='promo-code'>
                Have a promocode?
              </Link>
              <Link to='#' class='cart-checkout-btn hover-btn'>
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>

        <header class='header clearfix'>
          <div class='top-header-group'>
            <div class='top-header'>
              <div class='res_main_logo'>
                <Link to='/home'>
                  <img src={logo_dark} alt='' />
                </Link>
              </div>
              <div class='main_logo' id='logo'>
                <Link to='/home'>
                  <img src={logo} alt='' />
                </Link>
                <Link to='/home'>
                  <img class='logo-inverse' src={logo_dark} alt='' />
                </Link>
              </div>
              <div class='select_location'>
                <div class='ui inline dropdown loc-title'>
                  <div class='text'>
                    <i class='uil uil-location-point'></i>
                    Gurugram
                  </div>
                  <i class='uil uil-angle-down icon__14'></i>
                  <div class='menu dropdown_loc'>
                    <div class='item channel_item'>
                      <i class='uil uil-location-point'></i>
                      Gurugram
                    </div>
                    <div class='item channel_item'>
                      <i class='uil uil-location-point'></i>
                      New Delhi
                    </div>
                    <div class='item channel_item'>
                      <i class='uil uil-location-point'></i>
                      Bangaluru
                    </div>
                    <div class='item channel_item'>
                      <i class='uil uil-location-point'></i>
                      Mumbai
                    </div>
                    <div class='item channel_item'>
                      <i class='uil uil-location-point'></i>
                      Hyderabad
                    </div>
                    <div class='item channel_item'>
                      <i class='uil uil-location-point'></i>
                      Kolkata
                    </div>
                    <div class='item channel_item'>
                      <i class='uil uil-location-point'></i>
                      Ludhiana
                    </div>
                    <div class='item channel_item'>
                      <i class='uil uil-location-point'></i>
                      Chandigrah
                    </div>
                  </div>
                </div>
              </div>
              <div class='search120'>
                <div class='ui search'>
                  <div class='ui left icon input swdh10'>
                    <input
                      class='prompt srch10'
                      type='text'
                      placeholder='Search for products..'
                    />
                    <i class='uil uil-search-alt icon icon1'></i>
                  </div>
                </div>
              </div>
              <div class='header_right'>
                <ul>
                  <li>
                    <Link to='#' class='offer-link'>
                      <i class='uil uil-phone-alt'></i>1800-000-000
                    </Link>
                  </li>
                  <li>
                    <Link to='offers.html' class='offer-link'>
                      <i class='uil uil-gift'></i>Offers
                    </Link>
                  </li>
                  <li>
                    <Link to='faq.html' class='offer-link'>
                      <i class='uil uil-question-circle'></i>Help
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='dashboard_my_wishlist.html'
                      class='option_links'
                      title='Wishlist'
                    >
                      <i class='uil uil-heart icon_wishlist'></i>
                      <span class='noti_count1'>3</span>
                    </Link>
                  </li>
                  <li class='ui dropdown'>
                    <Link to='#' class='opts_account'>
                      <img src={user_profile} alt='' />
                      <span class='user__name'>John Doe</span>
                      <i class='uil uil-angle-down'></i>
                    </Link>
                    <div class='menu dropdown_account'>
                      <div class='night_mode_switch__btn'>
                        <Link to='#' id='night-mode' class='btn-night-mode'>
                          <i class='uil uil-moon'></i> Night mode
                          <span class='btn-night-mode-switch'>
                            <span class='uk-switch-button'></span>
                          </span>
                        </Link>
                      </div>
                      <Link
                        to='dashboard_overview.html'
                        class='item channel_item'
                      >
                        <i class='uil uil-apps icon__1'></i>Dashbaord
                      </Link>
                      <Link
                        to='dashboard_my_orders.html'
                        class='item channel_item'
                      >
                        <i class='uil uil-box icon__1'></i>My Orders
                      </Link>
                      <Link
                        to='dashboard_my_wishlist.html'
                        class='item channel_item'
                      >
                        <i class='uil uil-heart icon__1'></i>My Wishlist
                      </Link>
                      <Link
                        to='dashboard_my_wallet.html'
                        class='item channel_item'
                      >
                        <i class='uil uil-usd-circle icon__1'></i>My Wallet
                      </Link>
                      <Link
                        to='dashboard_my_addresses.html'
                        class='item channel_item'
                      >
                        <i class='uil uil-location-point icon__1'></i>My Address
                      </Link>
                      <Link to='offers.html' class='item channel_item'>
                        <i class='uil uil-gift icon__1'></i>Offers
                      </Link>
                      <Link to='faq.html' class='item channel_item'>
                        <i class='uil uil-info-circle icon__1'></i>Faq
                      </Link>
                      <Link to='sign_in.html' class='item channel_item'>
                        <i class='uil uil-lock-alt icon__1'></i>Logout
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class='sub-header-group'>
            <div class='sub-header'>
              <div class='ui dropdown'>
                <Link
                  to='#'
                  class='category_drop hover-btn'
                  data-toggle='modal'
                  data-target='#category_model'
                  title='Categories'
                >
                  <i class='uil uil-apps'></i>
                  <span class='cate__icon'>Select Category</span>
                </Link>
              </div>
              <nav class='navbar navbar-expand-lg navbar-light py-3'>
                <div class='container-fluid'>
                  <button
                    class='navbar-toggler menu_toggle_btn'
                    type='button'
                    data-target='#navbarSupportedContent'
                  >
                    <i class='uil uil-bars'></i>
                  </button>
                  <div
                    class='collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu'
                    id='navbarSupportedContent'
                  >
                    <ul class='navbar-nav main_nav align-self-stretch'>
                      <li class='nav-item'>
                        <Link
                          to='index.html'
                          class='nav-link active'
                          title='Home'
                        >
                          Home
                        </Link>
                      </li>
                      <li class='nav-item'>
                        <Link
                          to='shop_grid.html'
                          class='nav-link new_item'
                          title='New Products'
                        >
                          New Products
                        </Link>
                      </li>
                      <li class='nav-item'>
                        <Link
                          to='shop_grid.html'
                          class='nav-link'
                          title='Featured Products'
                        >
                          Featured Products
                        </Link>
                      </li>
                      <li class='nav-item'>
                        <div class='ui icon top left dropdown nav__menu'>
                          <Link class='nav-link' title='Pages'>
                            Pages <i class='uil uil-angle-down'></i>
                          </Link>
                          <div class='menu dropdown_page'>
                            <Link
                              to='dashboard_overview.html'
                              class='item channel_item page__links'
                            >
                              Account
                            </Link>
                            <Link
                              to='about_us.html'
                              class='item channel_item page__links'
                            >
                              About Us
                            </Link>
                            <Link
                              to='shop_grid.html'
                              class='item channel_item page__links'
                            >
                              Shop Grid
                            </Link>
                            <Link
                              to='single_product_view.html'
                              class='item channel_item page__links'
                            >
                              Single Product View
                            </Link>
                            <Link
                              to='checkout.html'
                              class='item channel_item page__links'
                            >
                              Checkout
                            </Link>
                            <Link
                              to='request_product.html'
                              class='item channel_item page__links'
                            >
                              Product Request
                            </Link>
                            <Link
                              to='order_placed.html'
                              class='item channel_item page__links'
                            >
                              Order Placed
                            </Link>
                            <Link
                              to='bill.html'
                              class='item channel_item page__links'
                            >
                              Bill Slip
                            </Link>
                            <Link
                              to='sign_in.html'
                              class='item channel_item page__links'
                            >
                              Sign In
                            </Link>
                            <Link
                              to='sign_up.html'
                              class='item channel_item page__links'
                            >
                              Sign Up
                            </Link>
                            <Link
                              to='forgot_password.html'
                              class='item channel_item page__links'
                            >
                              Forgot Password
                            </Link>
                            <Link
                              to='contact_us.html'
                              class='item channel_item page__links'
                            >
                              Contact Us
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li class='nav-item'>
                        <div class='ui icon top left dropdown nav__menu'>
                          <Link class='nav-link' title='Blog'>
                            Blog <i class='uil uil-angle-down'></i>
                          </Link>
                          <div class='menu dropdown_page'>
                            <Link
                              to='our_blog.html'
                              class='item channel_item page__links'
                            >
                              Our Blog
                            </Link>
                            <Link
                              to='blog_no_sidebar.html'
                              class='item channel_item page__links'
                            >
                              Our Blog Two No Sidebar
                            </Link>
                            <Link
                              to='blog_left_sidebar.html'
                              class='item channel_item page__links'
                            >
                              Our Blog with Left Sidebar
                            </Link>
                            <Link
                              to='blog_right_sidebar.html'
                              class='item channel_item page__links'
                            >
                              Our Blog with Right Sidebar
                            </Link>
                            <Link
                              to='blog_detail_view.html'
                              class='item channel_item page__links'
                            >
                              Blog Detail View
                            </Link>
                            <Link
                              to='blog_left_sidebar_single_view.html'
                              class='item channel_item page__links'
                            >
                              Blog Detail View with Sidebar
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li class='nav-item'>
                        <Link
                          to='contact_us.html'
                          class='nav-link'
                          title='Contact'
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div class='catey__icon'>
                <Link
                  to='#'
                  class='cate__btn'
                  data-toggle='modal'
                  data-target='#category_model'
                  title='Categories'
                >
                  <i class='uil uil-apps'></i>
                </Link>
              </div>
              <div class='header_cart order-1'>
                <Link
                  to='#'
                  class='cart__btn hover-btn pull-bs-canvas-left'
                  title='Cart'
                >
                  <i class='uil uil-shopping-cart-alt'></i>
                  <span>Cart</span>
                  <ins>2</ins>
                  <i class='uil uil-angle-down'></i>
                </Link>
              </div>
              <div class='search__icon order-1'>
                <Link
                  to='#'
                  class='search__btn hover-btn'
                  data-toggle='modal'
                  data-target='#search_model'
                  title='Search'
                >
                  <i class='uil uil-search'></i>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
