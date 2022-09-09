import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from "./components/accounts/Account";
import Upload from "./components/upload/Upload";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Loader from "./components/comman/Loader";

class App extends Component {
  state = { title: "Reward Point", loading: false };
  componentWillMount() {
    window.loader = this.setLoader;
  }
  setTitle = (title) => {
    this.setState({ title });
  };

  setLoader = (isLoading = false) => {
    this.setState({ loading: isLoading });
  };

  render() {
    const { loading, title } = this.state;
    return (
      <div id="wrapper">
        <Router>
          <React.Fragment>
            <Sidebar setTitle={this.setTitle} />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Navbar title={title} />
                <div className="container-fluid">
                  <Switch>
                    <Route exact path="/" component={Account} />
                    <Route exact path="/upload" component={Upload} />
                  </Switch>
                </div>
              </div>
            </div>
          </React.Fragment>
        </Router>
        {loading ? <Loader /> : null}
      </div>
    );
  }
}
export default App;
