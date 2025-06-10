import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Location, Main } from "./pages";
import Consult from "./pages/Consult";
import Consult2 from "./pages/Consult/Consult2";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { InversifyProvider } from "./shared/InversifyProvider";
import { container } from "./shared/inversify.config";
import AdsKeywordStorePage from "./shared/AdsKeywordStorePage";
import LoadingProvider from "./contexts/LoadingProvider";
import ChannelService from "./pages/channel-talk/ChannelService";
import Promotion from "./pages/promotion/Promotion";
import PromotionDetail from "./pages/promotion/PromotionDetail";

function App() {
  useEffect(() => {
    // Boot Channel as an anonymous user
    ChannelService.boot({
      pluginKey: "d826139b-90e9-4132-adeb-8e34b5d79839",
    });

    const orgPushState = window.history.pushState;
    window.history.pushState = (
      data: any,
      unused: string,
      url?: string | URL | null
    ) => {
      if (url) {
        ChannelService.setPage(window.location.host + url.toString());
        // console.log("onChanged !! " + window.location.host + url.toString());
      }
      orgPushState(data, unused, url);
    };
  }, []);
  return (
    <InversifyProvider container={container}>
      <LoadingProvider>
        <RecoilRoot>
          <div className="App">
            <BrowserRouter>
              <AdsKeywordStorePage />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/location" element={<Location />} />
                <Route path="/consult" element={<Consult />} />
                <Route path="/consult2" element={<Consult2 />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/*" element={<Main />} />
                <Route path="/promotion" element={<Promotion />} />
                <Route path="/promotion/:id" element={<PromotionDetail />} />
              </Routes>
            </BrowserRouter>
          </div>
        </RecoilRoot>
      </LoadingProvider>
    </InversifyProvider>
  );
}

export default App;
