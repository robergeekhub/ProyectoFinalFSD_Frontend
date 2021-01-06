import React from 'react';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Store from '../src/Redux/Store';
import {render} from 'react-dom';

// Cuando importamos el modulo Store,
// lo llamamos para crear la tienda  basada en nuestros reductores.
// Esto también es para que no tengamos que importar nuestros reductores en este archivo.

const store = Store();
const root = document.getElementById('root')

// Provider hace que cada componente  conectado a la tienda 
// obtenga acceso a ella.
render(<Provider store={store}>
   <App />
 </Provider>,root);
