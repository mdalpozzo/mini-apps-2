import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';

function ShippingInfo(props) {
  return (
    <div id="shipping-info">
      <h2>Shipping Info</h2>
      <div className="info-form">
        <form>
          <div>
            Line 1:<br />
            Line 2:<br />
            City:<br />
            State:<br />
            Zipcode:
          </div>
          <div className="form-inputs">
            <input id="GET-line1" type="text" name="firstName" /><br />
            <input id="GET-line2" type="text" name="lastName" /><br />
            <input id="GET-city" type="text" name="email" /><br />
            <input id="GET-state" type="text" name="password" /><br />
            <input id="GET-zipcode" type="text" name="password" />
          </div>
        </form>
      </div>
      <div className="save-button">
        <button><Link to="/billingInfo">Next</Link></button>
      </div>
    </div>
  );
}

export default ShippingInfo;
