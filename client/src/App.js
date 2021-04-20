import './App.css';
import { useState } from 'react';
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
        <Route exact path="/register!" component={Register} />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </Router>
    </div>
  );
};

export default App;
