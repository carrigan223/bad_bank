import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllData from "./components/all_data/AllData";
import Deposit from "./components/deposit/Deposit";
import Withdrawl from "./components/withdrawl/Withdrawl";
import CreateAccount from "./components/create_account/CreateAccount";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create_account">Create Account</Link>
            </li>
            <li>
              <Link to="/deposit">Deposit</Link>
            </li>
            <li>
              <Link to="/withdraw">Withdraw</Link>
            </li>
            <li>
              <Link to="/all_data">All Data</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/all_data" element={<AllData />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdrawl />} />
          <Route path="/create_account" element={<CreateAccount />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
