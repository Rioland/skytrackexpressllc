import React from 'react'

export default function Location() {
  return (
    <div>
        <>
  {/* About Us Section */}
  <div className="about-us-section">
    <div className="about-us-text">Our Location</div>
  </div>
  <div className="yes">
    <h4>
      Where We
      <span>ARE Located</span>
    </h4>
    <p>
      skytrackexpressllc Logistics is a last-mile fulfillment service that delivers packages
      especially for e-retailers and online platforms
    </p>
  </div>
  <div className="container local">
    <div className="row">
      <div className="col-md-6">
        <div className="container mt-4 ">
          <div className="d-flex justify-content-between">
            <h6>Drop Off Centers:</h6>
            <p>
              search:
              <input type="text" />
            </p>
          </div>
          <div>
            <label htmlFor="entriesPerPage">Showing</label>
            <select
              id="entriesPerPage"
              className="form-select d-inline w-auto mx-2"
            >
              <option value={10}>10</option>
              <option value={20}>25</option>
              <option value={30}>50</option>
              <option value={50}>100</option>
            </select>
            <label>entries</label>
          </div>
          <hr />
          <table className="table ">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Opening Times</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anambra State</td>
                <td>Nwanyi bu ife Plaza, Shop 50, 138 Oguta Road, Onitsha</td>
                <td>Onitsha</td>
                <td>8AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Benue State</td>
                <td>1 David Mark Bypass Makurdi</td>
                <td>Makurdi</td>
                <td>9AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Delta State</td>
                <td>
                  Constitutional Plaza opposite Enerhen motel along jefia
                  crescent
                </td>
                <td>Warri</td>
                <td>9AM to 3PM</td>
                <td>Opening Soon</td>
              </tr>
              <tr>
                <td>Delta State</td>
                <td>No 2. Jefia Crescent Enerhen</td>
                <td>Warri</td>
                <td>9AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Ebonyi State</td>
                <td>Lot 3 Warehouse A International Market Abakaliki</td>
                <td>Abakaliki</td>
                <td>9AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Enugu State</td>
                <td>Rail Line Ogbete Market</td>
                <td>Enugu City</td>
                <td>9AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Federal Capital Territory</td>
                <td>1 Bato Pharmacy Besides EFCC Academy Old Karu</td>
                <td>Abuja</td>
                <td>9AM to 5PM</td>
                <td>Opening Soon</td>
              </tr>
              <tr>
                <td>Federal Capital Territory</td>
                <td>DBN Plaza Wuse Zone 1</td>
                <td>Abuja</td>
                <td>9AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Head Office</td>
                <td>64 Seriki-Aro Avenue, Ikeja, Lagos</td>
                <td>Ikeja</td>
                <td>8AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Kano State</td>
                <td>
                  9 Sky Building Naibawa Motor Park, along Naibawa Central Park
                  Road Kano
                </td>
                <td>Kano City</td>
                <td>9AM to 3PM</td>
                <td>Opened</td>
              </tr>
            </tbody>
          </table>
          {/* Pagination Section */}
          <div className="d-flex justify-content-between align-items-center">
            <p>Showing 1-10 of 21 entries</p>
            <nav>
              <ul className="pagination mb-0">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="container mt-4 ">
          <div className="d-flex justify-content-between">
            <h6>collection Centers:</h6>
            <p>
              search:
              <input type="text" />
            </p>
          </div>
          <div>
            <label htmlFor="entriesPerPage">Showing</label>
            <select
              id="entriesPerPage"
              className="form-select d-inline w-auto mx-2"
            >
              <option value={10}>10</option>
              <option value={20}>25</option>
              <option value={30}>50</option>
              <option value={50}>100</option>
            </select>
            <label>entries</label>
          </div>
          <hr />
          <table className="table ">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Opening Times</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anambra State</td>
                <td>Nwanyi bu ife Plaza, Shop 50, 138 Oguta Road, Onitsha</td>
                <td>Onitsha</td>
                <td>8AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Benue State</td>
                <td>1 David Mark Bypass Makurdi</td>
                <td>Makurdi</td>
                <td>9AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Delta State</td>
                <td>
                  Constitutional Plaza opposite Enerhen motel along jefia
                  crescent
                </td>
                <td>Warri</td>
                <td>9AM to 3PM</td>
                <td>Opening Soon</td>
              </tr>
              <tr>
                <td>Delta State</td>
                <td>No 2. Jefia Crescent Enerhen</td>
                <td>Warri</td>
                <td>9AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Ebonyi State</td>
                <td>Lot 3 Warehouse A International Market Abakaliki</td>
                <td>Abakaliki</td>
                <td>9AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Enugu State</td>
                <td>Rail Line Ogbete Market</td>
                <td>Enugu City</td>
                <td>9AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Federal Capital Territory</td>
                <td>1 Bato Pharmacy Besides EFCC Academy Old Karu</td>
                <td>Abuja</td>
                <td>9AM to 5PM</td>
                <td>Opening Soon</td>
              </tr>
              <tr>
                <td>Federal Capital Territory</td>
                <td>DBN Plaza Wuse Zone 1</td>
                <td>Abuja</td>
                <td>9AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Head Office</td>
                <td>64 Seriki-Aro Avenue, Ikeja, Lagos</td>
                <td>Ikeja</td>
                <td>8AM to 5PM</td>
                <td>Opened</td>
              </tr>
              <tr>
                <td>Kano State</td>
                <td>
                  9 Sky Building Naibawa Motor Park, along Naibawa Central Park
                  Road Kano
                </td>
                <td>Kano City</td>
                <td>9AM to 3PM</td>
                <td>Opened</td>
              </tr>
            </tbody>
          </table>
          {/* Pagination Section */}
          <div className="d-flex justify-content-between align-items-center">
            <p>Showing 1-10 of 21 entries</p>
            <nav>
              <ul className="pagination mb-0">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}
