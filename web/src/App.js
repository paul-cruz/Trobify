import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './Routes/app.routes';
import { positions, Provider } from 'react-alert';
import AlertMUITemplate from 'react-alert-template-oldschool-dark';

const alert_options = {
  position: positions.MIDDLE
};

function App() {

  return (
    <div className="App">
      <Provider template={AlertMUITemplate} {...alert_options}>
          <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;