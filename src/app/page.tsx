import Footer from "@/components/Footer";
import SearchTrackingId from "@/components/SearchTrackingId";

export default function Home() {
  return (
    <div className="">
      <SearchTrackingId />
      <div className=" container container-custom">
        <div className="quote-section">
          {/* Image */}
          <img src="./home images/3.jpg" alt="Image" />
          {/* Dropdowns */}
          <div className="dropdown-spacing">
            <select className="form-control">
              <option>Select Country</option>
              <option>US Michigan</option>
              <option>Other Country</option>
            </select>
            <br />
            <select className="form-control">
              <option>Select Country </option>
              <option>US Michigan</option>
              <option>Other Country</option>
            </select>
          </div>
          <select className="form-control dropdown-spacing">
            <option>Select State</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Other States</option>
          </select>
          <input
            type="text"
            className="form-control input-weight"
            placeholder="Weight"
          />
          <button className="quote-btn">Get Quotes</button>
        </div>
      </div>

      <>
        {/* Services Section */}
        <div className="services-section container text-center">
          <h2>Why Choose Us ?</h2>
          <p>
            skytrackexpressllc Logistics provides you with effective One stop logistics
            solution for retail companies with greater focus on highly dynamic
            and rapidly <br />
            growing ecommerce industry in US Michigan.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">SUPERIOR CUSTOMER SERVICE</h5>
                  <p className="card-text">
                    The best customer service backed by advanced <br />
                    technology. <br /> <br />
                    Go Knowledge Base.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">DYNAMIC DELIVERY SERVICE</h5>
                  <p className="card-text">
                    We offer Pay on Delivery, Prepaid and Debit on <br />
                    Delivery services to our clients. <br />
                    <br />
                    Go Knowledge Base.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">ENVIRONMENTALLY FRIENDLY</h5>
                  <p className="card-text">
                    Our bicycle and motorcycle based couriers means <br />
                    traffic will never be a bottleneck. <br />
                    <br />
                    Go Knowledge Base
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="okay">
          <h2>Most popular</h2> <br />
          <h5>
            {" "}
            skytrackexpressllc Logistics offers end-to-end logistics and supply chain solutions
          </h5>{" "}
          <br />
          <br />
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <img
                src="./home images/4.png"
                className="img-fluid"
                alt="Image 1"
              />
            </div>
            <div className="col-md-4">
              <img
                src="./home images/5.png"
                className="img-fluid"
                alt="Image 2"
              />
            </div>
            <div className="col-md-4">
              <img
                src="./home images/6.jpeg"
                className=""
                height={250}
                width={350}
                alt="Image 3"
              />
            </div>
          </div>
        </div>
      </>
     
    </div>
  );
}
