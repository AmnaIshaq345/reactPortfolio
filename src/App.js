import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" ><Home /></Route>
      <Route  path="/about" ><About/></Route>
      <Route  path="/services"><Services /></Route>
      <Route  path="/portfolio"><Portfolio /></Route>
      <Route  path="/blog" ><Blog /></Route>
      <Route  path="/contact" ><Contact /></Route>
      <Footer />
    </Switch>np
    </>
  )
}

export default App;
