import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Illustration from './pages/illustration/Illustration';
import Visumed from './pages/design/visumed/Visumed';
import Mainhas from './pages/design/mainhas/Mainhas';
import Filmow from './pages/design/filmow/Filmow';
import Fem from './pages/coding/fem/Fem';
import Frontloops from './pages/coding/frontloops/Frontloops';
import About from './pages/about/About';
import {Switch, Route} from 'react-router-dom';
import './global.scss';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>    
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/visumed" component={Visumed}/>
        <Route exact path="/mainhas" component={Mainhas}/>
        <Route exact path="/filmow" component={Filmow}/>
        <Route exact path="/frontloops" component={Frontloops}/>
        <Route exact path="/fem" component={Fem}/>
        <Route exact path="/illustration" component={Illustration}/>
      </Switch>  
      <Footer/>
    </div>
  );
}

export default App;
