import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import $ from 'jquery';

import '../App.css';

function AccountInfo() {
  function accountInfoSubmit() {
    const fname = document.getElementById('GET-fname').value;
    const lname = document.getElementById('GET-lname').value;
    const email = document.getElementById('GET-email').value;
    const password = document.getElementById('GET-password').value;

    const accountData = {
      fname,
      lname,
      email,
      password,
    };
    console.log('accountData object in AccountInfo object:', accountData);

    $.ajax({
      url: 'http://localhost:8001/createAccount',
      type: 'POST',
      data: JSON.stringify(accountData),
      contentType: 'application/json',
    });
  }

  return (
    <div id="account-info">
      <h2>Account Info</h2>
      <div className="info-form">
        <form>
          <div>
            First Name:<br />
            Last Name:<br />
            Email:<br />
            Password:
          </div>
          <div className="form-inputs">
            <input id="GET-fname" type="text" name="firstName" /><br />
            <input id="GET-lname" type="text" name="lastName" /><br />
            <input id="GET-email" type="text" name="email" /><br />
            <input id="GET-password" type="text" name="password" />
          </div>
        </form>
      </div>
      <div className="save-button">
        <button onClick={accountInfoSubmit}><Link to="/shippingInfo">Next</Link></button>
      </div>
    </div>
  );
}
export default AccountInfo;
