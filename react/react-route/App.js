import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import Home from './Home';
import About from './About';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <a className="btn btn-danger btn-lg" href="/">Home</a>
      <a className="btn btn-danger btn-lg" href="/About">About</a>
      <Link className="btn btn-info btn-lg" to="/">Home</Link>
      <Link className="btn btn-info btn-lg" to="/About">About</Link>
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />

    </Router>
  );
}

export default App;
