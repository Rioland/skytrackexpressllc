import Footer from "@/components/Footer";
import React from "react";

export default function about() {
  return (
    <div className="abt">
      <>
        {/* About Us Section */}
        <div className="about-us-section">
          <div className="about-us-text">About Us</div>
        </div>
        <div className="yes">
          <h4>Who We Are?</h4>
          <p>
            skytrackexpressllc Logistics is a last-mile fulfillment service that delivers
            packages especially for e-retailers and online platforms
          </p>
        </div>
        <div className="container mt-5">
          {/* First Row */}
          <div className="row content-section">
            <div className="col-md-6">
              <h5>About Us</h5>
              <p>
                skytrackexpressllc Logistics is a fulfillment service that delivers packages{" "}
                <br />
                especially for e-retailers and online platforms. We have <br />
                maintained reputation to providing first Class, cost effective{" "}
                <br />
                and efficient logistics solutions to our clients. The services
                are <br />
                tailored to meet our clients needs and satisfaction. This is{" "}
                <br />
                complemented by our website, mobile apps and APIs that <br />
                consumers, merchants, ecommerce platforms uses to better <br />
                their services.
              </p>
              <a href="#">
                <p>View Our Services</p>
              </a>
            </div>
            {/* Second Row */}
            <div className="col-md-6">
              <h5>Our Vision</h5>
              <p>
                To be Michigan ’s most favoured logistics service provider,{" "}
                <br />
                delivering world class service to it’s clients by providing{" "}
                <br />
                integrated supply chain solutions with a focus on achieving{" "}
                <br />
                customer success by leveraging on new technologies. skytrackexpressllc <br />
                Logistics will operate a network of delivery champions serving{" "}
                <br />
                thousands of users and businesses with the aim to become <br />
                the preferred on-demand hyper local fulfilment service <br />
                company in Michigan We aim to create over 2024 jobs across <br />
                US Michigan within 3-5years of our operation with our unique <br />
                business model.
              </p>
              <a href="#">
                <p>View Our Services</p>
              </a>
            </div>
          </div>
        </div>
      </>

    
    </div>
  );
}
