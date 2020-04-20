import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Illustration from './pages/illustration/Illustration';
import Design from './pages/design/Design';
import Coding from './pages/coding/Coding';
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
        <Route exact path="/design" component={Design}/>
        <Route exact path="/coding" component={Coding}/>
        <Route exact path="/illustration" component={Illustration}/>
      </Switch>  
      <Footer/>
    </div>
  );
}

export default App;
