import React from "react";
import "./App.scss";
import "antd/dist/reset.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import CreatorDashbaord from "./components/CreatorPage/CreatorDashboard/CreatorDashbaord";
import CreatorContent from "./components/CreatorPage/CreatorContent/CreatorContent";
import Creator from "./components/CreatorPage/Creator";
import CreatorDraft from "./components/CreatorPage/CreatorDraft/CreatorDraft";
import CreatorProfile from "./components/CreatorPage/CreatorProfile/CreatorProfile";
import Rainbow from "./components/RainbowKit/RainbowKit";
import RefuelPage from "./components/RefuelPage/RefuelPage";
import UploadPage from "./components/UploadPage/UploadPage";
import UserPage from "./components/UserPage/UserPage";
import UserFeed from "./components/UserPage/UserFeed/UserFeed";
import UserSearch from "./components/UserPage/UserSearch/UserSearch";
import UserNotification from "./components/UserPage/UserNotification/UserNotification";
import UserSubscription from "./components/UserPage/UserSubscription/UserSubscription";
import UserProfile from "./components/UserPage/UserProfile/UserProfile";
import FAQPage from "./components/FAQPage/FAQPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Rainbow>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/refuel" element={<RefuelPage />} />
          {/* <Route path="/faq" element={} /> */}
          <Route path="/creator/upload" element={<UploadPage />} />
          <Route path="/creator" element={<Creator />}>
            <Route path="dashboard" element={<CreatorDashbaord />} />
            <Route path="content" element={<CreatorContent />} />
            <Route path="draft" element={<CreatorDraft />} />
            <Route path="profile" element={<CreatorProfile />} />
            <Route path="" element={<Navigate to="dashboard" replace />} />
          </Route>
          <Route path="/user" element={<UserPage />}>
            <Route path="feed" element={<UserFeed/>} />
            <Route path="search" element={<UserSearch/>} />
            <Route path="notification" element={<UserNotification/>} />
            <Route path="subscription" element={<UserSubscription/>} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="" element={<Navigate to="feed" replace />} />
          </Route>
        </Routes>
        
        </Rainbow>
      </Router>
    </div>
  );
}

export default App;
