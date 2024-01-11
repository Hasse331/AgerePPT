import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Dashboard";
import Calendar from "./views/Calendar";
import Goals from "./views/Goals";
import Productivity from "./views/Productivity";
import Reports from "./views/Financials";
import Layout from "./components/layout";
import SignInSide from "./views/SignInSide";
import SignUp from "./views/SignUp";
import Spm from "./views/spm";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/productivity" element={<Productivity />} />
          <Route path="/financials" element={<Reports />} />
          <Route path="/sign-in" element={<SignInSide />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/spm" element={<Spm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
