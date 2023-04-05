import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import SubHeadder from "./components/Subheadder";
import Login from './components/Login'
import { AuthContextProvider } from "./store/auth-context";
function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <SubHeadder />
              <Home />
            </>
          }
        />
        <Route path="cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <SubFooter />
      <Footer />
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
