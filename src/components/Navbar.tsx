import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* Logo */}
    <a className="navbar-brand" href="/">
      <Image src="/images/logo.jpeg" alt="Logo" width={50} height={35} />
    </a>
    {/* Toggler for small screens */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    {/* Collapsible navbar */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register">
            Register
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/tracking">
            Track
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About Us
          </a>
        </li>
        {/* Dropdown for Services */}
        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="servicesDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Service 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Service 2
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Service 3
              </a>
            </li>
          </ul>
        </li>
         */}
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            Contact Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/our-location">
            Location
          </a>
        </li>
      </ul>
      {/* Login Button */}
      <a className="nav-link login-btn" href="#">
        LOGIN
      </a>
    </div>
  </div>
</nav>

    </div>
  )
}
