import Layout from "./components/layout/layout";
import Home from "./components/home";
import TermsAndConditions from "./components/links/terms-&-conditions";
import Services from "./components/services";
import FAQ from "./components/faq";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/termsAndConditions" element={<TermsAndConditions />} />
      <Route path="/services" element={<Services />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}

export default App;
