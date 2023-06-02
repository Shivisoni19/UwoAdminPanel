import React from "react";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SidePanel from "./components/SidePanel";
import UserMigration from "./components/UserMigration";
import AddSubAdmin from "./components/AddSubAdmin";
import ProfileVerification from "./components/ProfileVerification";
import Banner from "./components/Banner";
import Notification from "./components/Notification";
import Report from "./components/Report";
import Hashtag from "./components/Hashtag";
import PopularCreator from "./components/PopularCreator";
import Language from "./components/Language";
import VideoCategory from "./components/VideoCategory";
import Question from "./components/Question";
import SubAdminWork from "./components/SubAdminWork";
import AppUsers from "./components/AppUsers";
import DummyUsers from "./components/DummyUsers";
import AllSounds from "./components/AllSounds";
import AllVideos from "./components/AllVideos";
import DiscoverySection from "./components/DiscoverySection";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Content } from "./components/Styles";

import "./App.css";
import ScrollButton from "./components/ScrollButton";
// import "./style.css";

const App = () => {
  return (
    <Router>
      <div className="app-full-page">
        <div className="app-sidepanel">
          <SidePanel />
        </div>
        <div className="app-main-page" style={{ flexGrow: 1 }}>
          <Navbar />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/UserMigration" component={UserMigration} />
          <Route path="/AddSubAdmin" component={AddSubAdmin} />
          <Route path="/ProfileVerification" component={ProfileVerification} />
          <Route path="/Banner" component={Banner} />
          <Route path="/Notification" component={Notification} />
          <Route path="/Report" component={Report} />
          <Route path="/Hashtag" component={Hashtag} />
          <Route path="/PopularCreator" component={PopularCreator} />
          <Route path="/Language" component={Language} />
          <Route path="/VideoCategory" component={VideoCategory} />
          <Route path="/Question" component={Question} />
          <Route path="/SubAdminWork" component={SubAdminWork} />
          <Route path="/AppUsers" component={AppUsers} />
          <Route path="/DummyUsers" component={DummyUsers} />
          <Route path="/AllSounds" component={AllSounds} />
          <Route path="/AllVideos" component={AllVideos} />
          <Route path="/DiscoverySection" component={DiscoverySection} />
          <Content />
          <ScrollButton />
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
