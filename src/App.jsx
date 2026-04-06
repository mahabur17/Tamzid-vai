// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// নতুন ScrollToTop কম্পোনেন্ট ইম্পোর্ট করলাম
import ScrollToTop from './components/ScrollToTop';

// গ্লোবাল কম্পোনেন্টগুলো 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// আলাদা আলাদা পেজগুলো
import Home from './pages/Home';
import BatchDetails from './pages/BatchDetails';
import CollegeDetails from './pages/CollegeDetails'; 

function App() {
  return (
    <Router>
      {/* রাউটারের ঠিক নিচেই ScrollToTop বসিয়ে দিলাম */}
      <ScrollToTop />
      
      <div className="min-h-screen bg-surface text-on-surface">
        {/* ন্যাভবার সব পেজেই উপরে থাকবে */}
        <Navbar />
        
        <Routes>
          {/* হোম পেজ */}
          <Route path="/" element={<Home />} />
          
          {/* ব্যাচ বা কোর্সের বিস্তারিত পেজ */}
          <Route path="/admission/:batchId" element={<BatchDetails />} />
          
          {/* কলেজের বিস্তারিত পেজ */}
          <Route path="/college/:collegeId" element={<CollegeDetails />} />
        </Routes>
        
        {/* ফুটার সব পেজেই নিচে থাকবে */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;