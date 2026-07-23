import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Listings from "./pages/Listings";
import VenueDetail from "./pages/VenueDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import VenueOwnerDashboard from "./pages/VenueOwnerDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venues" element={<Listings />} />
        <Route path="/venues/:slug" element={<VenueDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/venue-owner-dashboard" element={<VenueOwnerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
