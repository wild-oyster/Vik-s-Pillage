import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NavalBase from './components/NavalBase/NavalBase';
import LoginPage from './components/LoginPage/LoginPage';
import Navbar from './components/NavBar/Navbar';
import Exploration from './components/Exploration/Exploration';
import Error404 from './components/Error404/Error404';
import Profile from './components/Profil/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Exploration'>
          <Exploration />
        </Route>
        <Route path='/navalbase'>
          <NavalBase />
        </Route>
        <Route path='/Login'>
          <LoginPage />
        </Route>
        <Route path='/profile/:id' component={Profile} />
        <Route path='*' exact={true} component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
