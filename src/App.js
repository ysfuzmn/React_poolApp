import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PollList from "./components/PollList";
import PollDetails from "./components/PollDetails";
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
          <Route path="/" element={<PollList />} />
          <Route path="/polls/:pollId" element={<PollDetails />} />
          <Route path="/company/:companyName" element={<CompanyDetails companies={companies} />} />

          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
