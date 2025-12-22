import './App.css';
import PrivacyPolicy from './screen/privacy-policy';

import { Routes, Route, Navigate } from "react-router-dom";
import TermCondition from './screen/term-condition';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/privacy-policy" />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/term-condition" element={<TermCondition />} />
    </Routes>
  );
};

export default App;
