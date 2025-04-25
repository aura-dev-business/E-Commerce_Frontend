import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Home from '../pages/Home';
import AdminDashboard from '../pages/AdminDashboard';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import ProductDetail from '../pages/ProductDetail';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import { AuthContext } from '../context/AuthContext';
import { Loader } from 'lucide-react';

const AppRoutes = () => {
  const { user: authUser, fetchProfile } = AuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      await fetchProfile();
      setLoading(false);
    };
    loadUser();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={authUser ? <AdminDashboard /> : <Navigate to="/login" />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={authUser ? <Checkout /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/orders" element={authUser ? <Orders /> : <Navigate to="/login" />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/login" />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
