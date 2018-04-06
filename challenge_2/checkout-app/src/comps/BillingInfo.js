import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';

function BillingInfo() {
  return (
    <div id="billing-info">
      <h2>Billing Info</h2>
      <div className="info-form">
        <form>
          <div>
            CC#:<br />
            Expiration Date:<br />
            CVV:<br />
            Zipcode:
          </div>
          <div className="form-inputs">
            <input id="GET-ccnumber" type="text" name="ccnumber" /><br />
            <input id="GET-expdate" type="text" name="expdate" /><br />
            <input id="GET-cvv" type="text" name="cvv" /><br />
            <input id="GET-cczipcode" type="text" name="cczipcode" />
          </div>
        </form>
      </div>
      <div className="save-button">
        <button>Done</button>
      </div>
    </div>
  );
}

export default BillingInfo;
