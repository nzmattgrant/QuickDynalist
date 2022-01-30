import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import { Setup } from './components/Setup';
import { Inbox } from './components/Inbox';
import { UseAsApp } from './components/UseAsApp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Route exact path='/' component={Inbox} />
        <Route exact path='/setup' component={Setup} />
        <Route exact path='/use-as-app' component={UseAsApp} />
    </Router>
  );
}

export default App;
