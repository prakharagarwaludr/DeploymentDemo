import React, { Component } from "react";
import axios from "axios";
class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {
      file: "",
      fileName: "Choose File",
      uploadDisabled: true,
      controller: "",
      test: "",
      protocol: "",
    };
  }
  handleFileChange(e) {
    let index = e.target.files[0].name.search(
      /\w+[_]\w+[_]\w+[_]uut.yaml-example/i
    );
    if (index === 0) {
      this.setState({ file: e.target.files[0] });
      this.setState({ fileName: e.target.files[0].name });
      this.setState({ uploadDisabled: false });
    } else {
      window.alert(
        "File name or format is not correct ! \nCorrect format is controller_test_protocol_uut.yaml-example"
      );
    }
    e.target.value = null;
  }
  handleUpload(e) {
    console.log("Starting upload");
    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("controller", this.state.controller);
    formData.append("test", this.state.test);
    formData.append("protocol", this.state.protocol);

    try {
      const res = axios.post(this.props.url + "/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { status } = res.data;
      if (status === "ok") {
        this.props.refreshOptions();
        //this.setState({...this.state,file: "", fileName:"Choose File", controller: "", test: "", protocol:""})
        this.setState({ file: "" });
        this.setState({ fileName: "Choose File" });
        this.setState({ controller: "" });
        this.setState({ test: "" });
        this.setState({ protocol: "" });
        alert("File Uploaded Successfully");
        document.getElementById("closeButton").click();
      } else if (status === "invalid") {
        const { error } = res.data;
        var errmsg = "Invalid Syntax!!" + error.message;
        window.alert(errmsg);
        this.setState({ file: "" });
        this.setState({ fileName: "Choose File" });
        this.setState({ uploadDisabled: true });
        document.getElementById("closeButton").click();
      } else if (status === "Invalid File") {
        alert("Invalid File: Expecting a comment in each line!");
        this.setState({ file: "" });
        this.setState({ fileName: "Choose File" });
        document.getEementById("closeButton").click();
      } else if (status === "Invalidvalues") {
        alert("Please input the correct values");
        this.setState({ file: "" });
        this.setState({ controller: "" });
        this.setState({ test: "" });
        this.setState({ protocol: "" });
        this.setState({ fileName: "Choose File" });
        document.getEementById("closeButton").click();
      } else if (status === "Blank") {
        alert("Please replace the blank file with a valid YAML file!");
        this.setState({ file: "" });
        this.setState({ fileName: "Choose File" });
        document.getEementById("closeButton").click();
      }
    } catch (err) {
      console.log(err);
    }
  }

  handleTextChange(e) {
    this.setState({ ...this.state, [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div className="mt-1">
        {/* <input type="file" name="file" /> */}
        <button
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Upload YAML-example File
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Upload File
                </h5>
                <button
                  id="closeButton"
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder="Controller"
                  id="controller"
                  text={this.state.controller}
                  onChange={this.handleTextChange}
                ></input>
                <input
                  type="text"
                  id="test"
                  className="form-control my-2"
                  placeholder="Test"
                  text={this.state.test}
                  onChange={this.handleTextChange}
                ></input>
                <input
                  type="text"
                  id="protocol"
                  className="form-control my-2"
                  placeholder="Protocol"
                  text={this.state.protocol}
                  onChange={this.handleTextChange}
                ></input>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    onChange={this.handleFileChange}
                    accept=".yaml-example"
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    {this.state.fileName}
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  id="uploadbutton"
                  type="button"
                  className="btn btn-primary"
                  disabled={this.state.uploadDisabled}
                  onClick={this.handleUpload}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FileUpload;
