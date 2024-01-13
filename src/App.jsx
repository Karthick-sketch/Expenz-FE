import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Expenses from "./Expenses/Expenses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={<Expenses sectionId="1" section="Dashboard" />}
        />
        <Route
          path="/expenses"
          element={<Expenses sectionId="2" section="Expenses" />}
        />
        <Route
          path="/incomes"
          element={<Expenses sectionId="3" section="Incomes" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
