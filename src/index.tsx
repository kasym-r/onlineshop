import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App/App';
import { Provider } from 'react-redux';
import { store } from './store/store'
import {  Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import Detail from './Pages/Detail';
import Header from './components/Header';
import { logo } from './assets';
import Footer from './components/Footer';
 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Header logo={logo}/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:id' element={<Detail />} />
      </Routes>
      <Footer logo={logo} />
    </BrowserRouter>
  </Provider>
);