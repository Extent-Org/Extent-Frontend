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
import CreatorAnalytics from "./components/CreatorPage/CreatorAnalytics/CreatorAnalytics";
import CreatorProfile from "./components/CreatorPage/CreatorProfile/CreatorProfile";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { goerli, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains([goerli], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "Extent App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <div className="App">
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/creator" element={<Creator />}>
                <Route path="dashboard" element={<CreatorDashbaord />} />
                <Route path="content" element={<CreatorContent />} />
                <Route path="draft" element={<CreatorDraft />} />
                <Route path="analytics" element={<CreatorAnalytics />} />
                <Route path="profile" element={<CreatorProfile />} />
                <Route path="" element={<Navigate to="dashboard" replace />} />
              </Route>
            </Routes>
          </Router>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
