import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* {/ <!-- Topbar --> /} */}
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow pt-0 pb-0">
        {/* {/ <!-- Sidebar Toggle (Topbar) --> /} */}
        <button
          id="sidebarToggleTop"
          class="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i class="fa fa-bars"></i>
        </button>
        <ul className="ms-auto">
          {/* {/ <!-- Nav Item - User Information --> /} */}

          <li
            class="nav-item dropdown no-arrow mt-3"
            style={{ listStyle: "none" }}
          >
            <a
              class="nav-link dropdown-toggle"
              to="/"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ whitespace: "nowrap !important" }}
            >
              <div class="topbar-divider d-none d-sm-block border-right"></div>
              <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                username@uwo.com
              </span>
              <img
                class="img-profile rounded-circle"
                src="./images/profile.png"
              />
            </a>
            {/* {/ <!-- Dropdown - User Information --> /} */}
            <div
              class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
              style={{ fontsize: "0.85rem !important" }}
            >
              <a
                class="dropdown-item"
                style={{
                  display: "block !important",
                  Width: "100% !important",
                  padding: "0.25rem 1.5rem !important",
                  clear: "both !important",
                  fontWeight: "400 !important",
                  color: "#3a3b45 !important",
                  textAlign: "inherit !important",
                  whiteSpace: "nowrap !important",
                  backgroundColor: "transparent  !important",
                  border: "0 !important",
                }}
              >
                <i
                  class="fas fa-cogs fa-sm fa-fw mr-2"
                  style={{ color: "#d1d3e2 !important" }}
                ></i>
                Chanage Password
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                to="/"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i
                  class="fas fa-sign-out-alt fa-sm fa-fw mr-2"
                  style={{
                    textAlign: "center !important",
                    Width: "1.25em !important",
                    fontSize: "0.875em !important",
                    color: "#d1d3e2 !important",
                  }}
                ></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      {/* {/ <!-- Logout Modal--> /} */}
      <div
        class="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a class="btn btn-primary" href="index.php?log=out">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
