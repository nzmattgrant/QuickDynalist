import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import { Setup } from './components/Setup';
import { Inbox } from './components/Inbox';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
        <Route exact path='/' component={Inbox} />
        <Route exact path='/setup' component={Setup} />
    </Router>
  );
}

export default App;
