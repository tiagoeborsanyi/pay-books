import './App.css';
import { Switch, Route } from 'react-router-dom';

import Purchasing from './pages/purchasing/puchasing';
import Payment from './pages/payment/payment';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Purchasing} />
        <Route path='/pay' component={Payment} />
      </Switch>
    </div>
  );
}

export default App;
