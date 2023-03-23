import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import SubHeadder from "./components/Subheadder";

function App() {
  return (
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
      </Routes>
      <SubFooter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
