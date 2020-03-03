import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../../../Public/Projects/react-test-app/src/components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();