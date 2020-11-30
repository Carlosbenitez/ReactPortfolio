import Nav from './components/nav';
import Footer from './components/footer'
import Contact from './pages/contact';
import Home from './pages/home'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Portfolio from './pages/portfolio';
function App() {
  return (
    <Router>
      <Nav />
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/contact" component={Contact}/>
      <Route exact path = "/portfolio" component={Portfolio}/>
      <Footer />
    </Router>
  );
}

export default App;
