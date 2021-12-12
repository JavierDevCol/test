
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './components/Dashboard/DashBoard';
import Blog from './components/Home/Blog';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Blog />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
