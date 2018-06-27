import React from 'react'
import { Link } from 'react-router-dom'

// The sidebar creates links that can be used to navigate
// between routes.
const Sidebar = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/audit'>Audit</Link></li>
      </ul>
    </nav>
  </header>
)

export default Sidebar
