import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.min.css'; 
import StartGame from './page/StartGame';
import Choices from './page/Choices';
import Play from './page/Play';
import ErrorDisplay from './page/ErrorDisplay';
import DisconnectContextProvider from './component/DisconnectContextProvider'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/LuckyGame/Choices',
    element: <Choices/>,
  },
  {
    path: '/LuckyGame/StartGame/:id/:ib',
    element: <StartGame/>,
  },
  {
    path:'/LuckyGame/Play/:id/:ib',
    element: <Play/>
  },
  {
    path:'/LuckyGame/error',
    element: <ErrorDisplay/>
  },
])

ReactDOM.createRoot(document.getElementById('clock-app-gam')).render(

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

  ,
)
