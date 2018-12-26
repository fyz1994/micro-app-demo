import React from 'react';
import { Icon } from 'antd'
import { withLogin, logout, handleTokenInvalid } from '../sso-login/index'

const domain = 'http://test-roster.i.trpcdn.net'


class AB extends React.Component {

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo activator" href="#">
                <i />
                single-spa-demo
              </a>

              <span className="right hide-on-med-and-down" style={{ marginRight: 12, marginLeft: 36, }} >
                <span style={{ marginRight: 8 }}>范溢贞</span>
                <a onClick={() => logout(domain)}><Icon type="logout" /></a>
              </span>

              <ul className="right hide-on-med-and-down">
                {menuItems.call(this)}
              </ul>

            </div>
          </nav>
        </div>
        <ul className="side-nav" id="mobile-demo">
          {menuItems.call(this)}
        </ul>
      </div>
    );
  }

  navigateTo = url => window.history.pushState(null, null, url)
}

function menuItems() {
  return (
    <div>
      <li>
        <a onClick={() => this.navigateTo("/react")}>
          微应用1
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/demo2")}>
          微应用2
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/demo3")}>
          微应用3
        </a>
      </li>
    </div>
  )
}
// const Navbar = withLogin(domain)(AB)
// export default Navbar
export default AB
