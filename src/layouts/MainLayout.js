import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Nav from '../components/Nav'
// import { Link } from "react-router";
import { graphql } from "react-apollo";
import { withRouter } from "react-router";
import gql from "graphql-tag";

class MainLayout extends React.Component {
  static propTypes = {
    router: React.PropTypes.object.isRequired,
    data: React.PropTypes.object
  };

  _logout = () => {
    // remove token from local storage and reload page to reset apollo client
    window.localStorage.removeItem("graphcoolToken");
    location.reload();
    // this.props.router.push('/')
  };

  _showLogin = () => {
    this.props.router.push("/login");
  };

  _createEvent = () => {
    this.props.router.push("/events/create");
  };

  _showSignup = () => {
    this.props.router.push("/signup");
  };

  _isLoggedIn = () => {
    return this.props.data.user;
  };

  render = () => {
    return (
      <main>
        <Header />
        {this.props.children}

        <Footer />
      </main>
    );
  };
}

const userQuery = gql`
  query {
    user {
      id
      name
    }
  }
`;

export default graphql(userQuery, { options: { forceFetch: true } })(
  withRouter(MainLayout)
);
