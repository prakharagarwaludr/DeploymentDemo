import React, { useState } from "react";
import Rainbow from "../hoc/Rainbow";
import Student from "./Student";

const Contact = () => {
  const [Contacts, setContact] = useState([
    "Contact 1",
    "Contact 2",
    "Contact 3",
  ]);

  return (
    <React.Fragment>
      <div className="container">
        <h4 className="center">Contact</h4>
        <Student Items={Contacts} />
      </div>
    </React.Fragment>
  );
};

export default Rainbow(Contact);
