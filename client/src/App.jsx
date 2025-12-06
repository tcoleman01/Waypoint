import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Account from "./pages/Account.jsx";
import AccountEdit from "./pages/AccountEdit.jsx";
import AccountDelete from "./pages/AccountDelete.jsx";
import StateIndex from "./pages/StateIndex.jsx";
import StateDetail from "./pages/StateDetail.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import Trip from "./pages/Trip.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

export default function App() {
  const { user, logout } = useAuth();

  return (
    <>
      <NavigationBar user={user} logout={logout} />

      <main className="container">
        <Routes>
          {/* Home now renders the Home page component */}
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account/edit"
            element={
              <ProtectedRoute>
                <AccountEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account/delete"
            element={
              <ProtectedRoute>
                <AccountDelete />
              </ProtectedRoute>
            }
          />

          <Route path="/states" element={<StateIndex />} />
          <Route path="/states/:code" element={<StateDetail />} />

          <Route
            path="/mytrips"
            element={
              <ProtectedRoute>
                <Trip />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  );
}
