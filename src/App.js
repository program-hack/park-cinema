import { useEffect, useState } from 'react';
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
import Contacts_Page from './Pages/Contacts_Page/Contacts_Page';
import Profile_Page from './Pages/Profile_page/Profile_Page';
import { Box } from '@mui/material';
import Trailers_Page from './Pages/Trailers_page/Trailers_Page';
import Terms_Conditions_page from './Pages/Terms_Conditions_page/Terms_Conditions_page';
import Picture from "./Wedges@1x-3.0s-200px-200px.svg";

function App() {
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);

  const [loading, setLoading] = useState("");
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(false);
      setLoading(
        <Box sx={{ backgroundColor: "#373737", overflow: "hidden" }}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:movieId" element={<Products_Page setSelect3={setSelect3} setSelect4={setSelect4} select3={select3} select4={select4} />} />
              <Route path="/cinemas" element={<Cinemas_Page />} />
              <Route path="/cinemas/:cinemaId" element={<Cinemas_Product_Page />} />
              <Route path="/campaigns" element={<Campaigns_Page />} />
              <Route path="/campaigns/:campaignId" element={<Campaigns_Product_Page />} />
              <Route path="/faq" element={<FAQ_Page />} />
              <Route path="/contacts" element={<Contacts_Page />} />
              <Route path="/profile" element={<Profile_Page />} />
              <Route path="/trailers" element={<Trailers_Page />} />
              <Route path="/terms-conditions" element={<Terms_Conditions_page />} />
            </Routes>
            <Footer />
          </Router>
        </Box>
      )
    }, 3000)
  }, [])
  return (
    <>
      {showImage ? (
        <Box sx={{ bgcolor: "#000", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <img src={Picture} alt="Loading..." />
        </Box>
      ) : (
        <>
          {loading}
        </>
      )}
    </>
  );
}

export default App;
