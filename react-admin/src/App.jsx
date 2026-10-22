import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./lib/AuthContext.jsx";
import { ToastProvider } from "./ui/Toast.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Complaint from "./pages/Complaint.jsx";
import Chats from "./pages/Chats.jsx";
import Room from "./pages/Room.jsx";
import Settings from "./pages/Settings.jsx";

function Guard({ children }) {
  const { user, ready } = useAuth();
  const location = useLocation();

  if (!ready) return null;

  if (!user) {
    return (
      <Navigate
        to={"/login?next=" + encodeURIComponent(location.pathname)}
        replace
      />
    );
  }

  return children;
}

export default function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <ToastProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <Guard>
                  <Home />
                </Guard>
              }
            />
            <Route
              path="/complaint/:id"
              element={
                <Guard>
                  <Complaint />
                </Guard>
              }
            />
            <Route
              path="/chats"
              element={
                <Guard>
                  <Chats />
                </Guard>
              }
            />
            <Route
              path="/chats/:id"
              element={
                <Guard>
                  <Room />
                </Guard>
              }
            />
            <Route
              path="/settings"
              element={
                <Guard>
                  <Settings />
                </Guard>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ToastProvider>
      </AuthProvider>
    </HashRouter>
  );
}
