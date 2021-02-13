import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

class Login extends Component {
  render() {
    return (
      <div className='sign-inup'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5'>
              <div className='sign-form'>
                <div className='sign-inner'>
                  <div className='sign-logo' id='logo'>
                    <Link to='/home'>
                      <img src={logo} alt='' />
                    </Link>
                    <Link to='/home'>
                      <img
                        className='logo-inverse'
                        src='../assets/images/dark-logo.svg'
                        alt=''
                      />
                    </Link>
                  </div>
                  <div className='form-dt'>
                    <div className='form-inpts checout-address-step'>
                      <form>
                        <div className='form-title'>
                          <h6>Sign In</h6>
                        </div>
                        <div className='form-group pos_rel'>
                          <input
                            id='phone[number]'
                            name='phone'
                            type='text'
                            placeholder='Enter Phone Number'
                            className='form-control lgn_input'
                            required=''
                          />
                          <i className='uil uil-mobile-android-alt lgn_icon'></i>
                        </div>
                        <div className='form-group pos_rel'>
                          <input
                            id='password1'
                            name='password1'
                            type='password'
                            placeholder='Enter Password'
                            className='form-control lgn_input'
                            required=''
                          />
                          <i className='uil uil-padlock lgn_icon'></i>
                        </div>
                        <button className='login-btn hover-btn' type='submit'>
                          Sign In Now
                        </button>
                      </form>
                    </div>
                    <div className='password-forgor'>
                      <Link to='/forgot-password'>Forgot Password?</Link>
                    </div>
                    <div className='signup-link'>
                      <p>
                        Don't have an account? -{' '}
                        <Link to='/register'>Sign Up Now</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='copyright-text text-center mt-3'>
                <i className='uil uil-copyright'></i>Copyright 2021{' '}
                <b>Smarket</b> . All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
