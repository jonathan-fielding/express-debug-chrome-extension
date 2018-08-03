import React from 'react'
import { Link } from 'react-router-dom'

// The sidebar creates links that can be used to navigate
// between routes.
class Sidebar extends React.Component {
  render() {
    return <div className={this.props.className}>
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to='/' className='sidebar__link' activeClassName="sidebar__link--active" onlyActiveOnIndex={true}>Home</Link></li>
            {/* <li><Link to='/audit' className='sidebar__link' activeClassName="sidebar__link--active">Audit</Link></li> */}
            <li><Link to='/settings' className='sidebar__link' activeClassName="sidebar__link--active">Settings</Link></li>
          </ul>
        </nav>
      </aside>
    </div>
  }
}

export default Sidebar
