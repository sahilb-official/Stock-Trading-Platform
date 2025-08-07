import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import OrdersPage from "./components/OrdersPage";
import HoldingsPage from "./components/HoldingsPage";
import PositionsPage from "./components/PositionsPage";
import FundsPage from "./components/FundsPage";
import AppsPage from "./components/AppsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/holdings"
          element={
            <ProtectedRoute>
              <HoldingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/positions"
          element={
            <ProtectedRoute>
              <PositionsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/funds"
          element={
            <ProtectedRoute>
              <FundsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apps"
          element={
            <ProtectedRoute>
              <AppsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
