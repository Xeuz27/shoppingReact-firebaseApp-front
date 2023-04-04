import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PorTuCompraUsaAPP from './PorTuCompraUsaAPP';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration.js';
// import './service-worker';

import { register } from './serviceWorker';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <React.StrictMode>
      <PorTuCompraUsaAPP />
    </React.StrictMode>
);


register();




