import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <div className="App">
        <header className="App-header">
          <h1>Squawk!</h1>
        </header>
      </div>
    </Router>
  );
};

export default App;
