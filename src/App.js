import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AboutUs from './pages/aboutus/aboutus.component';
import Products from './pages/products/products.component';
import Service from './pages/services/services.component';
import CareerPage from './pages/Careers/career.component';
import Contact from './pages/contact/contact.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/AboutUs' component={AboutUs} />
          <Route exact path='/Products' component={Products} />
          <Route exact path='/Services' component={Service} />
          <Route exact path='/CareerPage' component={CareerPage} />
          <Route exact path='/Contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
