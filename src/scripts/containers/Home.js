import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import JSONTree from 'react-json-tree'
import Collapsible from 'react-collapsible';

const theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#111111',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};

const mapStateToProps = state => ({
  pageData: state.expressApplication.pageData,
  supportedSite: state.expressApplication.supportedSite,
  performance: state.expressApplication._timings,
})

class Home extends React.Component {
  render() {
    if (this.props.supportedSite) {
      return <div>
        <h1 class="h5">Homepage</h1>
        {/* <p>No sites have been configured, please configure sites in <Link to='/settings'>Settings</Link></p> */}
        
        <h2 class="h6">Page data for localhost:3000</h2>
        <JSONTree data={this.props.pageData} theme={theme} invertTheme={false} hideRoot={true} />

        <h2 className="h6">Performance Metrics</h2>
        <JSONTree data={this.props.performance} theme={theme} invertTheme={false} hideRoot={true} />

      </div>
    }

    return <div>
      <h1 class="h5">Homepage</h1>
      <p>This plugin has not been configured for this site, please configure sites in <Link to='/settings'>Settings</Link></p>
    </div>
  }
}

export default connect(
  mapStateToProps
)(Home);
