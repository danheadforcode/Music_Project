import React from 'react';
// import logo_dim from "../../assets/logo_dim.png";
import Inspiration from "../assets/light_bulb.jpg";
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
            <div className="column">  
              <div className="card">
                <div className="card-item">
                  <figure className="image is-3by2">
                    <img src={Inspiration} alt="Placeholder image"/>
                  </figure>
                </div>
                  <div className="card-content">
                    <div className="media-content">
                      <h2 className="title is-4">Inspiration</h2> 
                        This is a collection of media that users can view and add to to come up  with the next hit!
                        
                    </div>
                  </div>  
              </div>
            </div>  
            <div className="column">  
              <div className="card">
                <div className="card-item">
                  <figure className="image is-3by2">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                  </figure>
                </div>
              </div>
            </div>  
            <div className="column">  
              <div className="card">
                <div className="card-item">
                  <figure className="image is-3by2">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                  </figure>
                </div>
              </div>
            </div>  
            <div className="column">  
              <div className="card">
                <div className="card-item">
                  <figure className="image is-3by2">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                  </figure>
                </div>
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
