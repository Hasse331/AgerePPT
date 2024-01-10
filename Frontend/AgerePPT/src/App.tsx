import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Dashboard";
import Calendar from "./views/Calendar";
import Goals from "./views/Goals";
import Tools from "./views/Tools";
import Reports from "./views/Reports";
import Layout from "./components/layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
