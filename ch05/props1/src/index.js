import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calc from './Calc';
import registerServiceWorker from './registerServiceWorker';

let values = { oper:"*" };
ReactDOM.render(<Calc {...values} />, document.getElementById('root'));
registerServiceWorker();
