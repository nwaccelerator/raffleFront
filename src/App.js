import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import Raffle from "./components/Raffle/Raffle";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/raffles/:id"
            element={<Raffle part={null} winner={null} />}
          />
          <Route
            path="/raffles/:id/participants"
            element={<Raffle part={true} winner={null} />}
          />
          <Route
            path="/raffles/:id/winner"
            element={<Raffle part={null} winner={true} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
