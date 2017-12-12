import React from 'react';
import logo_dim from "../../assets/logo_dim.png";
import {
  Link
} from 'react-router'

class IntroBlock extends React.Component {

  static propTypes = {
    data: React.PropTypes.object,
  }

  render() {

    return (
      <section className="homepage-introblock">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h2 className="title">Welcome</h2>
              <div className="content is-large">
                <p>
                  <br/>
                  Be sure to follow me on my social media to be notified for the lastest updates!
                </p>
              </div>
            </div>
            <div className="column is-half">
              <h2 className="title"></h2>
              <div className="content is-large">
                <p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Dan, If not logged in show the Register button, otherwise show the view all photos button
  _renderButton() {
    if (!this.props.data.user) {
      return <Link className="f3 fw4 hover-red no-underline black-70 dib pv2 ph3 ba" to="/signup" >Register Now!</Link>
    } else {
      return <Link className="f3 fw4 hover-red no-underline black-70 dib pv2 ph3 ba" to="/Photo" >View all photos</Link>
    }
  }

  _showText() {
    if (!this.props.data.user) {
      return <h3 className="f3">1. Sign-up</h3>
    } else {
      return <h3 className="f3">2. Add photos</h3>
    }
  }
}

export default IntroBlock
