import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";  
import DashboardPage from "./pages/DashboardPage";  
import AdminPanel from "./pages/AdminPanel";
import ProfitGoal from "./pages/ProfitGoal";
import Sidebar from "./components/Sidebar";  
import { AuthProvider } from "./context/AuthContext";
import Transactions from "./pages/Transactions";
import Report from "./pages/Analytics";

// Layout component with Sidebar
const AppLayout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <Sidebar />  
    <div style={{ flex: 1, padding: "20px", marginLeft: "500px" }}>  
      {children}
    </div>
  </div>
);

// Layout for Login page (without Sidebar but with marginLeft)
const LoginLayout = ({ children }) => (
  <div style={{ marginLeft: "500px" }}>
    {children}
  </div>
);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Login page with marginLeft */}
          <Route path="/" element={<LoginLayout><Login /></LoginLayout>} />  

          {/* All other pages wrapped with AppLayout (includes Sidebar) */}
          <Route path="/dashboard" element={<AppLayout><DashboardPage /></AppLayout>} />
          <Route path="/admin" element={<AppLayout><AdminPanel /></AppLayout>} />
          <Route path="/profit" element={<AppLayout><ProfitGoal /></AppLayout>} />
          <Route path="/transactions" element={<AppLayout><Transactions /></AppLayout>} />
          <Route path="/analytics" element={<AppLayout><Report /></AppLayout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
