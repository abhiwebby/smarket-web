import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import Login from '../auth/Login';
import Register from '../auth/Register';
import ForgotPassword from '../auth/ForgotPassword';
import Profile from '../auth/Profile';
import PageNotFound from '../auth/PageNotFound';

class MainRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          {/* Authentication */}
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Route path='/profile' component={Profile} />
          {/* <Route path='/verification' component={Verification} /> */}
          {/* <Route path='/location' component={Location} />
          <Route path='/sidebar' component={SidebarNav} />
          <Route path='/contact' component={Contact} /> */}

          {/* Search */}
          {/* <Route path='/search' component={Search} />
          <Route path='/search-detail' component={SearchDetail} /> */}

          {/* Products */}
          {/* <Route path='/products' component={ListProducts} />
          <Route path='/product/:productId' component={Product} />
          <Route path='/product-detail' component={ProductDetail} />
          <Route path='/edit-product' component={EditProduct} />
          <Route path='/add-product' component={AddProduct} /> */}

          {/* Restaurants */}
          {/* <Route path='/restaurants' component={ListRestaurants} />
          <Route path='/restaurant/:restaurantId' component={Restaurant} />
          <Route path='/restaurant-detail' component={RestaurantDetail} />
          <Route path='/edit-restaurant' component={EditRestaurant} />
          <Route path='/add-restaurant' component={AddRestaurant} /> */}

          {/* Orders */}
          {/* <Route path='/orders' component={ListOrders} />
          <Route path='/order/:orderId' component={Order} />
          <Route path='/order-detail' component={OrderDetail} /> */}

          {/* Cart */}
          {/* <Route path='/cart' component={Cart} />
          <Route path='/cart-item' component={CartItem} />
          <Route path='/addtocart' component={AddToCart} />
          <Route path='/placeorder' component={PlaceOrder} />
          <Route path='/checkout' component={Checkout} /> */}

          {/* Extras */}
          {/* <Route path='/offers' component={Offers} />
          <Route path='/popular' component={Popular} />
          <Route path='/trending' component={Trending} />
          <Route path='/favourites' component={Favourites} />
          <Route path='/terms' component={Terms} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/faqs' component={Faqs} /> */}
          <Route path='/pagenotfound' component={PageNotFound} />
          <Route path='/' exact component={Home} />
          <Redirect to='/pagenotfound' />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainRouter;
