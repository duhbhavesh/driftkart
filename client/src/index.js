import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';
import './styles.css';

ReactDOM.render(
   <React.StrictMode>
      <DataProvider>
         <Router>
            <AuthProvider>
               <App />
            </AuthProvider>
         </Router>
      </DataProvider>
   </React.StrictMode>,
   document.getElementById('root'),
);
