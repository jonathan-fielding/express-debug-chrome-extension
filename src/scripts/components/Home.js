import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Homepage</h1>
    <p>No sites have been configured, please configure sites in <Link to='/settings'>Settings</Link></p>
  </div>
)

export default Home
