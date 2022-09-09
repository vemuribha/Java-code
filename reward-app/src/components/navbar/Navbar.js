import React, { PureComponent } from "react";

export default class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow bg-gradient-primary ">
        <div>
          <h6 style={{ color: '#fff' }}>{this.props.title}</h6>
        </div>
      </nav>
    );
  }
}
