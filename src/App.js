import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PollList from "./components/PollList";
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/Contact/ContactForm";
import CompanyDetails from "./components/companyDetails";
import companies from "./Data/companiesData";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/React_poolApp" element={<PollList />} />
          <Route path="/company/:companyName" element={<CompanyDetails companies={companies} />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
