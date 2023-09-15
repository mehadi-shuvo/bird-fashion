import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { Provider } from 'react-redux';
import store from './store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { productsApiSlice } from './store/products-slice';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productsApiSlice}>
        <RouterProvider router={router} />
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
)
