import Head from "./components/head";
import Footer from "./components/footer";
import Home from "./components/home";
import TermsAndConditions from "./components/links/terms-&-conditions";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="termsAndConditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
