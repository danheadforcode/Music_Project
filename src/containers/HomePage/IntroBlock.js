import React from 'react';
// import logo_dim from "../../assets/logo_dim.png";
import Inspiration from "../../assets/light_bulb.jpg";
import Products from "../../assets/guitar_strings.jpg";
// import Showcase from "../../assets/showcase.jpg";
import Contact from "../../assets/phone.jpg";
import {
  Link
} from 'react-router'

class IntroBlock extends React.Component {

  static propTypes = {
    data: React.PropTypes.object,
  }

  render() {

    return (
    
      <section className="hero is-small has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h2 className="title has-text-weight-bold">
              Welcome
            </h2>
            <p className="is-size-3">
              I am an aspiring producer, and have just recently added my fist song to Airbit. Why not check it out below!
            </p>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <iframe id="mfs_html5" src="https://airbit.com/widgets/html5/?uid=213343&config=404371" width="100%" height="510" frameborder="0" scrolling="no"></iframe>
          </div>
        </div>
      </section>
    )
  }




  //     // <section className="homepage-introblock">
  //     //   <div className="container">
  //     //     <div className="columns">    
  //           {/* <div className="column">  
  //             <div className="card">
  //               <div className="card-item">
  //                 <figure className="image is-3by2">
  //                   <a href="/inspiration">
  //                     <img src={Inspiration} alt="Inspiration Photo"/>
  //                   </a>                  
  //                 </figure>
  //               </div>
  //                 <div className="card-content">
  //                   <div className="media-content">
  //                     <h2 className="title is-4">Inspiration</h2> 
  //                       This is a collection of media that users can view and add to to come up  with the next hit!
  //                   </div>
  //                 </div>  
  //             </div>
  //           </div>   */}
  //           // <div className="column">
  //           // </div>
  //           // <div className="column">  
  //           //   <div className="card">
  //           //     <div className="card-item">
  //           //       <figure className="image is-3by2">
  //           //         <a href="/products"> 
  //           //           <img src={Products} alt="Guitar Strings"/>
  //           //         </a>  
  //           //       </figure>
  //           //     </div>
  //           //     <div className="card-content">
  //           //         <div className="media-content">
  //           //           <h2 className="title is-4">Products</h2> 
  //           //             Welcome to the online store! Get great items for great prices with a secure payment process.
  //           //         </div>
  //           //       </div>
  //           //   </div>
  //           // </div>  
  //           {/* <div className="column">  
  //             <div className="card">
  //               <div className="card-item">
  //                 <figure className="image is-3by2">
  //                   <a href="/showcase">
  //                     <img src={Showcase} alt="Placeholder image"/>
  //                   </a>
  //                 </figure>
  //               </div>
  //               <div className="card-content">
  //                   <div className="media-content">
  //                     <h2 className="title is-4">Showcase</h2> 
  //                       This is a collection of pictures, videos and audio clips that users can show off!
  //                   </div>
  //                 </div>
  //             </div>  
  //           </div>   */}
  //           {/* <div className="column">  
  //             <div className="card">
  //               <div className="card-item">
  //                 <figure className="image is-3by2">
  //                   <a href="/contact">
  //                     <img src={Contact} alt="Red Telephone"/>
  //                   </a>
  //                 </figure>
  //               </div>
  //               <div className="card-content">
  //                   <div className="media-content">
  //                     <h2 className="title is-4">Contact</h2> 
  //                       Need help with something or want to get in touch? Visit the contact page for more details!
  //                   </div>
  //                 </div>
  //             </div>
  //           </div> */}
  // //           <div className="column">
  // //           </div>  
  // //         </div>    
  // //       </div>
  // //     </section>
  // //   )
  // // }

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
