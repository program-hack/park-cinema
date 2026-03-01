import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Cinemas_Page from './Pages/Cinemas_page/Cinemas_Page';
import Products_Page from './Pages/Product_page/Products_Page';
import Cinemas_Product_Page from './Pages/Cinemas_page/Cinemas_Product_Page/Cinemas_Product_Page';
import Campaigns_Page from './Pages/Campaigns_page/Campaigns_Page';
import Campaigns_Product_Page from './Pages/Campaigns_page/Campaigns_Product_Page/Campaigns_Product_Page';
import FAQ_Page from './Pages/FAQ_Page/FAQ_Page';

function App() {
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);

  const languages = [
    "AZ", "TR", "RU", "EN"
  ]
  const cinemas = [
    "Park Bulvar", "Metro Park", "Flame Towers", "Sevinc Mall", "Shahdag"
  ]
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<Products_Page setSelect3={setSelect3} setSelect4={setSelect4} select3={select3} select4={select4} languages={languages} cinemas={cinemas} />} />
          <Route path="/cinemas" element={<Cinemas_Page />} />
          <Route path="/cinemas/:cinemaId" element={<Cinemas_Product_Page />} />
          <Route path="/campaigns" element={<Campaigns_Page />} />
          <Route path="/campaigns/:campaignId" element={<Campaigns_Product_Page />} />
          <Route path="/faq" element={<FAQ_Page />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
