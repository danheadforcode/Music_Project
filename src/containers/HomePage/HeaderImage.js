import React from 'react';
import headerimage from "../../assets/headerimage.png";
 import {
   Link
 } from 'react-router'

class HeaderImage extends React.Component {

  static propTypes = {
    data: React.PropTypes.object,
  }

  render() {

    return (
      <section className="homepage-headerimage">    
          <div className="level">
            <div className="level-left"></div>
            <div className="level-item image">
              <img src={headerimage} alt="D_I_M logo on spain background"/>
            </div>
            <div className="level-right"></div>  
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

export default HeaderImage;
