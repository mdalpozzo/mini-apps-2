import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import AccountInfo from './comps/AccountInfo';
import BillingInfo from './comps/BillingInfo';
import ShippingInfo from './comps/ShippingInfo';


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/accountInfo">Account Info</Link></li>
            <li><Link to="/shippingInfo">Shipping Info</Link></li>
            <li><Link to="/billingInfo">Billing Info</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/accountInfo" component={AccountInfo} />
          <Route path="/shippingInfo" component={ShippingInfo} />
          <Route path="/billingInfo" component={BillingInfo} />
        </div>
      </Router>
    );
  }
}


export default App;
