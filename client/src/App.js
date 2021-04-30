import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import AuthRoute from './utils/AuthRoute';
const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route exact path="/login!" component={Login} />
          <AuthRoute exact path="/signup!" component={Register} />
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
