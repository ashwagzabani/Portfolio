import cover from './cover.jpg';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/Home';
import About_me from './components/About_me';
import What_i_do from './components/What_i_do';
import Projects from './components/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (

    <div className="container-fluid">
      <Router >
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#"><img src={logo} alt="logo" width="44px" height="44px" /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/" class="nav-link">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/About-me" class="nav-link">About Me</Link>
              </li>
              <li class="nav-item">
                <Link to="/What-i-do" class="nav-link">What Can I do</Link>
              </li>
              <li class="nav-item">
                <Link to="/Projects" class="nav-link">Projects</Link>
              </li>
            </ul>
            <a className="resume-btn" href="/Ashwag Ahmad Zabani - Software Engineer.pdf" download>Download Resume</a>
          </div>
        </nav>

        <div className="row">
          <div className="col-md-5 left-side">
            <img src={cover} alt="cover" className="cover-img" />
          </div>
          <div className="col-md-6 center-side">
            <Route exact path="/" component={Home} />
            <Route path="/About-me" component={About_me} />
            <Route path='/What-I-do' component={What_i_do} />
            <Route path='/Projects' component={Projects} />
          </div>
          <div className="col-md-1 right-side">
            <a className="linkedin" href="https://www.linkedin.com/in/ashwagzabani/" target="_blanck">
              <i className="fa fa-linkedin" ></i>
            </a>
            <a className="github" href="https://github.com/ashwagzabani/" target="_blanck">
              <i className="fa fa-github"></i>
            </a>
            <a className="email" href="mailto:ashwag.amz@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </Router>
    </div >
  );
}

export default App;
