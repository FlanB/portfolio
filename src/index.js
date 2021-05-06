import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './scenes/App';
import 'bootstrap/dist/css/bootstrap.min.css';

// You can choose your kind of history here (e.g. browserHistory)
import { Router, hashHistory as history } from 'react-router';
// Your routes.js file
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
     <App/>
     {/* <Router routes={routes} history={history} />, */}
  </React.StrictMode>,
  document.getElementById('root')
  );
