import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
