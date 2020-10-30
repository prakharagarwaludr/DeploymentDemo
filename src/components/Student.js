import React, { Component } from "react";
class Student extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var postList = this.props.Items.length ? (
      this.props.Items.map((item) => {
        return (
          <div className="post card" key={item}>
            <div className="card-content">
              <span className="card-title red-text">{item}</span>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Items to Display</div>
    );

    return <React.Fragment>{postList}</React.Fragment>;
  }
}

export default Student;
