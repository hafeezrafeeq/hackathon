import { useState } from "react";
import { AuthPage } from "./components/AuthPage";
import { Dashboard } from "./components/Dashboard";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserEmail("");
  };

  if (!isAuthenticated) {
    return <AuthPage onLogin={handleLogin} />;
  }

  return (
    <>
      <Dashboard userEmail={userEmail} onLogout={handleLogout} />
      <Toaster position="top-right" richColors />
    </>
  );
}
