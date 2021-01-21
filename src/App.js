import Nav from './components/nav';
import Footer from './components/footer'
import Contact from './pages/contact/contact';
import Home from './pages/home/home'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Portfolio from './pages/portfolio/portfolio';
import Videos from './pages/videos/videos'
import Sidebar from './components/sidebar'

function App() {
  return (
    <Router>
      <Nav />
      <Sidebar />
      <Route exact path={["/", "/ReactPortfolio"]} component={Home} />
      <Route path="/ReactPortfolio/contact" component={Contact} />
      <Route path="/ReactPortfolio/portfolio" component={Portfolio} />
      <Route path="/ReactPortfolio/videos" component={Videos} />
      <Footer />
    </Router>
  );
}

export default App;
