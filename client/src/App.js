import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import Home from "./Home";
import CreateUser from './components/CreateUser';
import ViewUsers from "./components/ViewUsers";
import CreateEvent from './components/CreateEvent';
import ViewEvents from './components/ViewEvents';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="/postuser" element={<CreateUser />} />
          <Route path="/getusers" element={<ViewUsers />} />
          <Route path="/postevent" element={<CreateEvent />} />
          <Route path="/getevents" element={<ViewEvents />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
