import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Nav from "./components/Nav";
import PaintingContainer from "./containers/PaintingContainer";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./App.css";

const API = "http://localhost:3000/api/v1";

class App extends React.Component {
  state = {
    user: {},
    error: false,
  };

  componentDidMount() {
    const token = localStorage.token;
    if (token) {
      this.persistUser(token);
    }
  }

  persistUser = (token) => {
    fetch(API + "/persist", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.username) {
          const { username, id } = data;
          this.setState({
            user: {
              username,
              id,
            },
          });
        }
      });
  };

  handleAuthResponse = (data) => {
    if (data.username) {
      const { username, id, token } = data;

      this.setState({
        user: {
          username,
          id,
        },
        error: null,
      });

      localStorage.setItem("token", token);
      this.props.history.push("/paintings");
    } else if (data.error) {
      this.setState({
        error: data.error,
      });
    }
  };

  handleLogin = (e, userInfo) => {
    e.preventDefault();

    fetch(API + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((resp) => resp.json())
      .then((data) => this.handleAuthResponse(data))
      .catch(console.log);
  };

  handleSignup = (e, userInfo) => {
    e.preventDefault();

    fetch(API + "/sign_up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userInfo }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.handleAuthResponse(data);
      })
      .catch(console.log);
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({ user: {} });
  };

  renderLoginPage = () => <Login handleLoginOrSignup={this.handleLogin} />;
  renderSignUpPage = () => <Login handleLoginOrSignup={this.handleSignup} />;
  renderHomePage = () => <Home username={this.state.user.username} />;

  render() {
    const { user, error } = this.state;
    return (
      <div className="App">
        <Nav user={user} handleLogout={this.handleLogout} />

        {!!error && <h1>{error}</h1>}

        <Switch>
          <Route path="/login" render={this.renderLoginPage} />
          <Route path="/signup" render={this.renderSignUpPage} />

          {!user.id && <Redirect to="/login" />}
          <Route exact path="/" render={this.renderHomePage} />
          <Route exact path="/paintings" component={PaintingContainer} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
