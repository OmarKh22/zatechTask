import LogIn from './Components/Login/logIn';
import Regst from './Components/Regst/Regst'
import Customer from './Components/Customer/Customer'
import Selaier from './Components/Selaier/Selaier'
import Servies from './Components/Servies/Servies'
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
   <>
   <Router>
   {/* <LogIn/> */}
   <Switch>
    <Route path="/LogIn"  component={LogIn}/>
    <Route path="/" exact  component={LogIn}/>
     <Route path="/Regst"  component={Regst}/>
     <Route path="/Customer"  component={Customer}/>
     <Route path="/Selaier"  component={Selaier}/>
     <Route path="/Servies"  component={Servies}/>
   </Switch>
   </Router>
   </>
  );
}

export default App;
