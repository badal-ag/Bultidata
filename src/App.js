import React from 'react';
import Home from './pages/Home';
import { Route, Switch } from "react-router";
import Contact from './components/Contact';
import Service from './pages/Service';
import Aboutus from './pages/Aboutus';
import Error from './pages/Error';

export default function App() {
  return (
    <>     
         <Home/>
         {/*}  <Route exact path="/" component={Home}></Route>
           <Route path="/about" component={About}></Route>
           <Route path="/contact" component={Contact}></Route>
           <Route path="/service" component={Service}></Route>
           <Route component={Error}></Route>*/}
         
    </>
  );
}
