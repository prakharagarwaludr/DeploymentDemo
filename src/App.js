import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Contact from "./components/Contact";
import Post from "./components/Post";
import ToggleButtonNotEmpty from "./components/ToggleButton";
import LineChart from "./components/LineChart";
import Studententry from "./components/StudentEntry";
import FileUpload from "./components/FileUpload";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/linechart" component={LineChart} />
            <Route path="/create" component={CreatePost} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="/fileupload" component={FileUpload} /> */}
            <Route path="/:studententry" component={Studententry} />
            <Route path="/toggle" component={ToggleButtonNotEmpty} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
