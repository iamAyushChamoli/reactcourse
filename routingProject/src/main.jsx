import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/AboutUs.jsx';
import Contact from './components/Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="Home" element={<Home />}></Route>
      <Route path="About" element={<About />}></Route>
      <Route path="Contact" element={<Contact />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
