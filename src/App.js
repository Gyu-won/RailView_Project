import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";

import MainPage from "./components/page/MainPage";
import MapViewPage from "./components/page/MapViewPage";

function App(props) {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="view/:cityId" element={<MapViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;