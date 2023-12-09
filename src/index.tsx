import React from 'react';
import {createRoot} from 'react-dom/client';
import "./index.css";
import Home from "./pages/Home";

const container = document.getElementById('root');
const root = createRoot(container!); // 添加非空断言

root.render(
  <React.StrictMode>
      <Home/>
  </React.StrictMode>
);