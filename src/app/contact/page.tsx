import React from 'react'

export default function contact() {
  return (
    <div>
        <>
  {/* About Us Section */}
  <div className="about-us-section">
    <div className="about-us-text">Get In Touch</div>
  </div>
  <div className="container form-container">
    <div className="row">
      {/* Form Row */}
      <div className="col-md-6">
        <div className="contact-form">
          <h5>GET IN TOUCH WITH US</h5> <br />
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
            <input type="text" className="form-control" placeholder="Subject" />
            <textarea
              className="form-control"
              rows={4}
              placeholder="Your Message"
              defaultValue={""}
            />
            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </div>
      </div>
      {/* Numbers Row */}
      <div className="col-md-6">
        <div className="icon-column">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-headset"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
            </svg>
          </a>
          <p> 5743186344,</p>
        </div>
        <div className="icon-column">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-map"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"
              />
            </svg>
          </a>
          <p>3086 Detroit Rd, Niles MI 49120</p>
        </div>
        <div className=" icon-column">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
          </a>
          <p> support@skytrackexpressllc.com </p>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}
