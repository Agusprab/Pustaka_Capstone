/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unescaped-entities */
function Dashboard() {
  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Money</p>
                    <h5 className="font-weight-bolder">
                      $53,000
                    </h5>
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">+55%</span>
                      since yesterday
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                    <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Users</p>
                    <h5 className="font-weight-bolder">
                      2,300
                    </h5>
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">+3%</span>
                      since last week
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                    <i className="ni ni-world text-lg opacity-10" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">New Clients</p>
                    <h5 className="font-weight-bolder">
                      +3,462
                    </h5>
                    <p className="mb-0">
                      <span className="text-danger text-sm font-weight-bolder">-2%</span>
                      since last quarter
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                    <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">Sales</p>
                    <h5 className="font-weight-bolder">
                      $103,430
                    </h5>
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">+5%</span>
                      {' '}
                      than last month
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                    <i className="ni ni-cart text-lg opacity-10" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="row mt-4">
        <div className="col-lg-7 mb-lg-0 mb-4">
          <div className="card ">
            <div className="card-header pb-0 p-3">
              <div className="d-flex justify-content-between">
                <h6 className="mb-2">Sales by Country</h6>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center ">
                <tbody>
                  <tr>
                    <td className="w-30">
                      <div className="d-flex px-2 py-1 align-items-center">
                        <div>
                          <img src="../../img/icons/flags/US.png" alt="Country flag" />
                        </div>
                        <div className="ms-4">
                          <p className="text-xs font-weight-bold mb-0">Country:</p>
                          <h6 className="text-sm mb-0">United States</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <p className="text-xs font-weight-bold mb-0">Sales:</p>
                        <h6 className="text-sm mb-0">2500</h6>
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <p className="text-xs font-weight-bold mb-0">Value:</p>
                        <h6 className="text-sm mb-0">$230,900</h6>
                      </div>
                    </td>
                    <td className="align-middle text-sm">
                      <div className="col text-center">
                        <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                        <h6 className="text-sm mb-0">29.9%</h6>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-30">
                      <div className="d-flex px-2 py-1 align-items-center">
                        <div>
                          <img src="../../img/icons/flags/DE.png" alt="Country flag" />
                        </div>
                        <div className="ms-4">
                          <p className="text-xs font-weight-bold mb-0">Country:</p>
                          <h6 className="text-sm mb-0">Germany</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <p className="text-xs font-weight-bold mb-0">Sales:</p>
                        <h6 className="text-sm mb-0">3.900</h6>
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <p className="text-xs font-weight-bold mb-0">Value:</p>
                        <h6 className="text-sm mb-0">$440,000</h6>
                      </div>
                    </td>
                    <td className="align-middle text-sm">
                      <div className="col text-center">
                        <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                        <h6 className="text-sm mb-0">40.22%</h6>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-30">
                      <div className="d-flex px-2 py-1 align-items-center">
                        <div>
                          <img src="../../img/icons/flags/GB.png" alt="Country flag" />
                        </div>
                        <div className="ms-4">
                          <p className="text-xs font-weight-bold mb-0">Country:</p>
                          <h6 className="text-sm mb-0">Great Britain</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <p className="text-xs font-weight-bold mb-0">Sales:</p>
                        <h6 className="text-sm mb-0">1.400</h6>
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <p className="text-xs font-weight-bold mb-0">Value:</p>
                        <h6 className="text-sm mb-0">$190,700</h6>
                      </div>
                    </td>
                    <td className="align-middle text-sm">
                      <div className="col text-center">
                        <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                        <h6 className="text-sm mb-0">23.44%</h6>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-30">
                      <div className="d-flex px-2 py-1 align-items-center">
                        <div>
                          <img src="../../img/icons/flags/BR.png" alt="Country flag" />
                        </div>
                        <div className="ms-4">
                          <p className="text-xs font-weight-bold mb-0">Country:</p>
                          <h6 className="text-sm mb-0">Brasil</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <p className="text-xs font-weight-bold mb-0">Sales:</p>
                        <h6 className="text-sm mb-0">562</h6>
                      </div>
                    </td>
                    <td>
                      <div className="text-center">
                        <p className="text-xs font-weight-bold mb-0">Value:</p>
                        <h6 className="text-sm mb-0">$143,960</h6>
                      </div>
                    </td>
                    <td className="align-middle text-sm">
                      <div className="col text-center">
                        <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                        <h6 className="text-sm mb-0">32.14%</h6>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card">
            <div className="card-header pb-0 p-3">
              <h6 className="mb-0">Categories</h6>
            </div>
            <div className="card-body p-3">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-mobile-button text-white opacity-10" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Devices</h6>
                      <span className="text-xs">
                        250 in stock,
                        <span className="font-weight-bold">346+ sold</span>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i className="ni ni-bold-right" aria-hidden="true" /></button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-tag text-white opacity-10" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Tickets</h6>
                      <span className="text-xs">
                        123 closed,
                        <span className="font-weight-bold">15 open</span>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i className="ni ni-bold-right" aria-hidden="true" /></button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-box-2 text-white opacity-10" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Error logs</h6>
                      <span className="text-xs">
                        1 is active,
                        <span className="font-weight-bold">40 closed</span>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i className="ni ni-bold-right" aria-hidden="true" /></button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-satisfied text-white opacity-10" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Happy users</h6>
                      <span className="text-xs font-weight-bold">+ 430</span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i className="ni ni-bold-right" aria-hidden="true" /></button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
