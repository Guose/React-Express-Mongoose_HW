import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Add from './add';
import Find from './find';

function App() {
    return (
      <Router>
        <div>
          <div>
            <h1><Link to='/add'>ADD</Link></h1>
            <h1><Link to='/find'>FIND</Link></h1>
          </div>
          <Switch>
            <Route path='/add' exact component={Add} />
            <Route path='/find' exact component={Find} />
          </Switch>
        </div>
      </Router>
    )
}

export default App;
