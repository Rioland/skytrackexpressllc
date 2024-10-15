import React from 'react'

export default function register() {
  return (
    <div className='reg'>
        <div className="container form-container">
  {/* Logo */}
  <div  className="form mb-4">
   <center>
   <img src="./images/logo.jpeg" width={100} height={100} alt="Logo" />
   </center>
  </div>
  {/* Form */}
  <form>
    <h2>SIGN UP</h2>
    <br />
    <div className="row">
      {/* Left Column */}
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="nin" className="form-label">
            NIN
          </label>
          <input type="text" className="form-control" id="nin" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input type="text" className="form-control" id="phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input type="text" className="form-control" id="country" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" id="address" />
        </div>
        <div className="mb-3">
          <label htmlFor="accountType" className="form-label">
            Select Account Type
          </label>
          <select className="form-control" id="accountType">
            <option>Personal</option>
            <option>Business</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
      </div>
      {/* Right Column */}
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="lastName" />
        </div>
        <div className="mb-3">
          <label htmlFor="english" className="form-label">
            English
          </label>
          <select className="form-control" id="english">
            <option>French</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="businessName" className="form-label">
            Name of Business
          </label>
          <input type="text" className="form-control" id="businessName" />
        </div>
        {/* Phone Number and Whatsapp in the Same Row */}
        <div className="mb-3 row-spacing">
          <input
            type="text"
            className="form-control half-width"
            id="phone2"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="form-control half-width"
            id="whatsapp"
            placeholder="Whatsapp Number"
          />
        </div>
        {/* State and City in the Same Row */}
        <div className="mb-3 row-spacing">
          <select className="form-control half-width" id="state">
            <option>Select State</option>
          </select>
          <select className="form-control half-width" id="city">
            <option>Select City</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="postalCode" className="form-label">
            Enter Postal Code
          </label>
          <input type="text" className="form-control" id="postalCode" />
        </div>
        <div className="mb-3">
          <label htmlFor="rePassword" className="form-label">
            Re-Password
          </label>
          <input type="password" className="form-control" id="rePassword" />
        </div>
      </div>
    </div>
    {/* Checkbox & Terms */}
    <div className="form-check mb-3">
      <input className="form-check-input" type="checkbox" id="termsCheck" />
      <label className="form-check-label" htmlFor="termsCheck">
        I agree
      </label>
      <span className="terms-text">
        By clicking Register, you agree to the Terms and Conditions set out by
        this site, including our Cookie Use.
      </span>
    </div>
    {/* Footer Text */}
    <div className="footer-text mb-3">
      Already registered? <a href="#">Login</a> | <a href="#">HOME</a>
    </div>
    {/* Register Button */}
    <button type="submit" className="register-btn">
      Register
    </button>
  </form>
</div>

    </div>
  )
}
