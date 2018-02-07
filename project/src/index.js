import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.styl';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
require("./main.css");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
