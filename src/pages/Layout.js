import React from 'react'
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-dark bg-primary navbar-expand-sm">
      <a class="navbar-brand" href="#">DadJokesNow</a>
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About Us</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>

    <Outlet />
    </>
  )
};

export default Layout;