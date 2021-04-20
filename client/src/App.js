import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/login!" component={Login} />
        <Route exact path="/signup!" component={Register} />

      </Router>
    </div>
  );
};

export default App;
