import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify';
import AdminApp from './admin/AdminApp';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Routes>
          {/* ✅ Admin Panel */}
          <Route path="/admin/*" element={<AdminApp />} />

          {/* ✅ Main App */}
          <Route path="/" element={<><Navbar setShowLogin={setShowLogin} /><Home /><Footer /></>} />
          <Route path="/cart" element={<><Navbar setShowLogin={setShowLogin} /><Cart /><Footer /></>} />
          <Route path="/order" element={<><Navbar setShowLogin={setShowLogin} /><PlaceOrder /><Footer /></>} />
          <Route path="/myorders" element={<><Navbar setShowLogin={setShowLogin} /><MyOrders /><Footer /></>} />
          <Route path="/verify" element={<><Navbar setShowLogin={setShowLogin} /><Verify /><Footer /></>} />
        </Routes>
      </div>
    </>
  );
};

export default App;