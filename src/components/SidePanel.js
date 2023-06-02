import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

export default function SidePanel() {
  const [myStyle, setMyStyle] = useState(false);

  const collapseOnClick = () => {
    setMyStyle(!myStyle);
  };

  return (
    <div style={{ flexBasis: myStyle ? "6%" : "13%" }}>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15"></div>
          <div
            className="sidebar-brand-text mx-3"
            style={{ fontSize: myStyle ? "0rem" : "0.88rem" }}
          >
            UWO app Admin{" "}
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="false"
            aria-controls="collapseUtilities"
            style={{
              flexDirection: myStyle ? "column" : "row",
              width: myStyle ? "5.5rem" : "10.5rem",
            }}
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span
              style={{
                marginLeft: myStyle ? "0rem" : ".5rem",
                fontSize: myStyle ? ".57rem" : ".85rem",
              }}
            >
              Super Admin
            </span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item " to="/UserMigration">
                User Migration
              </Link>
              <Link className="collapse-item " to="/AddSubAdmin">
                Add Sub Admin
              </Link>
              <Link className="collapse-item " to="/ProfileVerification">
                Profile Verification
              </Link>
              <Link className="collapse-item " to="/Banner">
                Banner
              </Link>
              <Link className="collapse-item " to="/Notification">
                Notification
              </Link>
              <Link className="collapse-item " to="/Report">
                Report
              </Link>
              <Link className="collapse-item " to="/Hashtag">
                Hashtag
              </Link>
              <Link className="collapse-item " to="/PopularCreator">
                Popular Creator
              </Link>
              <Link className="collapse-item " to="/Language">
                Language
              </Link>
              <Link className="collapse-item " to="/VideoCategory">
                Video Category
              </Link>
              <Link className="collapse-item " to="/Question">
                Questions
              </Link>
              <Link className="collapse-item " to="/SubAdminWork">
                Sub Admin Work
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item ">
          <Link
            className="nav-link"
            to="/Dashboard"
            style={{
              flexDirection: myStyle ? "column" : "row",
              width: myStyle ? "5.5rem" : "10.5rem",
            }}
          >
            <i className="fas fa-tachometer-alt"></i>
            <span
              style={{
                marginLeft: myStyle ? "0rem" : ".5rem",
                fontSize: myStyle ? ".57rem" : ".85rem",
              }}
            >
              Dashboard
            </span>
          </Link>
        </li>

        <li className="nav-item  ">
          <Link
            className="nav-link"
            to="/AppUsers"
            style={{
              flexDirection: myStyle ? "column" : "row",
              width: myStyle ? "5.5rem" : "10.5rem",
            }}
          >
            <i className="fas fa-user"></i>
            <span
              style={{
                marginLeft: myStyle ? "0rem" : ".5rem",
                fontSize: myStyle ? ".57rem" : ".85rem",
              }}
            >
              App Users
            </span>
          </Link>
        </li>

        <li className="nav-item  ">
          <Link
            className="nav-link"
            to="/DummyUsers"
            style={{
              flexDirection: myStyle ? "column" : "row",
              width: myStyle ? "5.5rem" : "10.5rem",
            }}
          >
            <i className="fas fa-user"></i>
            <span
              style={{
                marginLeft: myStyle ? "0rem" : ".5rem",
                fontSize: myStyle ? ".57rem" : ".85rem",
              }}
            >
              Dummy Users
            </span>
          </Link>
        </li>

        <li className="nav-item ">
          <Link
            className="nav-link"
            to="/AllSounds"
            style={{
              flexDirection: myStyle ? "column" : "row",
              width: myStyle ? "5.5rem" : "10.5rem",
            }}
          >
            <i className="fas fa-music"></i>
            <span
              style={{
                marginLeft: myStyle ? "0rem" : ".5rem",
                fontSize: myStyle ? ".57rem" : ".85rem",
              }}
            >
              All Sounds
            </span>
          </Link>
        </li>

        <li className="nav-item ">
          <Link
            className="nav-link"
            to="/AllVideos"
            style={{
              flexDirection: myStyle ? "column" : "row",
              width: myStyle ? "5.5rem" : "10.5rem",
            }}
          >
            <i className="fas fa-video"></i>
            <span
              style={{
                marginLeft: myStyle ? "0rem" : ".5rem",
                fontSize: myStyle ? ".57rem" : ".85rem",
              }}
            >
              All Videos
            </span>
          </Link>
        </li>

        <li className="nav-item ">
          <Link
            className="nav-link"
            to="/DiscoverySection"
            style={{
              flexDirection: myStyle ? "column" : "row",
              width: myStyle ? "5.5rem" : "10.5rem",
            }}
          >
            <i className="fas fa-crosshairs"></i>
            <span
              style={{
                marginLeft: myStyle ? "0rem" : ".5rem",
                fontSize: myStyle ? ".57rem" : ".85rem",
              }}
            >
              Discovery Section
            </span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            onClick={collapseOnClick}
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    </div>
  );
}
