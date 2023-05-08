
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from './containers/HomePage';
import DashboardPage from './containers/DashboardPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/dashboard" element={<DashboardPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
  </Router>
);

export default App;

