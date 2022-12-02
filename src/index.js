import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./i18next"
import { BrowserRouter as Router } from 'react-router-dom';
import { GaleryProvider } from './context/galery';
import { HotelOurProvider } from './context/our-hotel';
import { ReservProvider } from './context/reserv';
import { ReviewsProvider } from './context/revais';
import { NewsProvider } from './context/news';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GaleryProvider>
        <HotelOurProvider>
          <ReservProvider>
            <ReviewsProvider>
              <NewsProvider>
                <App />
              </NewsProvider>
            </ReviewsProvider>
          </ReservProvider>
        </HotelOurProvider>
      </GaleryProvider>
    </Router>
  </React.StrictMode>
);
