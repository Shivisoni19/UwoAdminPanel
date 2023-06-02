import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid pb-3">
        {/* Page heading */}
        <div className="row">
          <div className="col-12 col-lg-6">
            <h3 className="text-gray-800" style={{ fontSize: "30px" }}>
              Dashboard
            </h3>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12 col-lg-4">
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="text-gray-600 border-radius p-1 calender-mobile-view"
                />
              </div>
              <div className="col-lg-1 col-12">
                <label for="date" className="text-gray-600 mrgn-none">
                  To:
                </label>
              </div>
              <div className="col-lg-4 col-12">
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="text-gray-600 border-radius mrgn-none p-1 calender-mobile-view"
                />
              </div>
              <div className="col-2">
                <button className="btn-show-details btn-hide btn-display">
                  <i className="fas fa-download fa-sm text-white-50"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Content Row --> */}
        <div class="row pt-4">
          {/* <!-- Earnings (Monthly) Card Example --> */}

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      New Users
                    </div>
                    <button
                      type="button"
                      class="btn h5 mb-0 font-weight-bold text-dark"
                      onclick="showusercount()"
                    >
                      0
                    </button>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-user fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}

          <div class="col-xl-2 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                      New videos
                    </div>
                    <button
                      type="button"
                      class="btn h5 mb-0 font-weight-bold text-dark"
                      onclick="showusercount()"
                    >
                      0
                    </button>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-video fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}

          <div class="col-xl-2 col-md-6 mb-4">
            <div class="card border-left-danger shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                      New Payments
                    </div>
                    <button
                      type="button"
                      class="btn h5 mb-0 font-weight-bold text-dark"
                      onclick="showusercount()"
                    >
                      0
                    </button>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-rupee-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div class="col-xl-2 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Vendor
                    </div>
                    <button
                      type="button"
                      class="btn h5 mb-0 font-weight-bold text-dark"
                      onclick="showusercount()"
                    >
                      0
                    </button>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-money-bill-alt fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Pending Requests Card Example --> */}
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-dark shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-dark text-uppercase mb-1">
                      Earning Creator
                    </div>
                    <button
                      type="button"
                      class="btn h5 mb-0 font-weight-bold text-dark"
                      onclick="showusercount()"
                    >
                      0
                    </button>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-wallet fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
