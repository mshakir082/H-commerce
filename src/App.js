import "./App.css";
import AllRutes from "./Router/AllRutes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { AuthProvider } from "react-auth-kit";

function App() {
  return (
    <>
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        // cookieSecure={window.location.protocol === "https:"}
        cookieSecure={false}
      >
        <Router>
          <Navbar />
          <AllRutes></AllRutes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
