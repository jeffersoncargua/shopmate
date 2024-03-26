import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import { CartProvider } from './context/CartContext';
=======
>>>>>>> b373ceea60e3e307791f0aa3d0213875bc242d93
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
<<<<<<< HEAD
      <CartProvider>
        <App />
      </CartProvider>      
    </Router>
  </React.StrictMode>
);
=======
      <App />
    </Router>
  </React.StrictMode>
);
>>>>>>> b373ceea60e3e307791f0aa3d0213875bc242d93
