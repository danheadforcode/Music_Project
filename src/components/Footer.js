/**
 * Component that lists all Posts
 */
import React from "react";
// import { Link } from 'react-router'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <div className="level">
              <div className="column is-one-sixth"></div>
              <div className="column is-one-sixth"> 
                <a href="https://souncloud.com/dan_is_me">
                  <i className="fab fa-soundcloud fa-4x"></i>
                </a>
              </div>
              <div className="column is-one-sixth">
                <a href="https://www.facebook.com/DanIsMeProductions">
                  <i className="fab fa-facebook-square fa-4x"></i>
                </a>
              </div>
              <div className="column is-one-sixth">
                <a href="https://www.youtube.com/channel/UCQVng41_gOzP4STCR6CV_GA">
                  <i className="fab fa-youtube fa-4x"></i>
                </a>
              </div>
              <div className="column is-one-sixth">
                <a href="https://www.instagram.com/dimproductions">
                  <i className="fab fa-instagram fa-3x"></i>
                </a>
              </div>
              <div className="column is-one-sixth"></div>
              
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
