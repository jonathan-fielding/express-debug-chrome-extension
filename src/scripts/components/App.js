import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

const App = () => (
  <div>
    <div className="grid-x grid-margin-x">
      <Sidebar className="cell small-8" />
      <div className="main cell auto">
        <Main />
      </div>
    </div>
  </div>
)

export default App
