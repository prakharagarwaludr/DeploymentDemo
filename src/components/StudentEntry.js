// import React, { Component } from "react";
// class StudentEntry extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div>This is Student Entry Form</div>
//       </React.Fragment>
//     );
//   }
// }

// export default StudentEntry;

// import React, { Component } from "react";

// class StudentEntry extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       header: "Welcome to React Hooks",
//     };
//   }

//   componentDidMount() {
//     const header = document.querySelectorAll("#header")[0];
//     setTimeout(() => {
//       header.innerHTML = this.state.header;
//     }, 3000);
//   }

//   render() {
//     return (
//       <div>
//         <h3 id="header">This is a Class Component</h3>
//       </div>
//     );
//   }
// }

// export default StudentEntry;
import React, { useState, useEffect } from "react";

function StudentEntry() {
  
  const [header, setHeader] = useState("Welcome to React Hooks");

  useEffect(() => {       
    const newheader = document.querySelectorAll("#header")[0];
    setTimeout(() => {
      newheader.innerHTML = header;
    }, 3000);
  }, []);

  const handleHeaderInput = (e) => {    
    setHeader(e.target.value);
  };

  return (
    <div>
      <h3 id="header">This is a Functional Component</h3>
      <input type="text" onChange={handleHeaderInput} value={header} />
    </div>
  );
}

export default StudentEntry;
