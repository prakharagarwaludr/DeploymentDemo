import React, { Component } from "react";
import { render } from "react-dom";

class MyLink extends Component {
  renderLink() {
    return (
      <div>
        <a href="www.dotnettricks.com">DotNetTricks Link</a>
      </div>
    );
  }
  renderContent() {
    return (
      <div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1>Component Decomposing in React</h1>
        <hr />
        {this.renderLink()}
        <hr />
        {this.renderContent()}
        <hr />
      </div>
    );
  }
}
export default MyLink;
