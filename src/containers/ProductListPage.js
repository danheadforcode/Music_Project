/**
 * Component that lists all Posts
 */
import Inspiration from "../assets/light_bulb.jpg";
import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ProductListPage extends React.Component {

  render() {
    return(
      <section className="hero is-small">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <div className="card"> 
                <div className="card-content">
                  <img src={Inspiration}/>  
                </div>        
              </div>
            </div>  
            <div className="column is-one-third">
              <div className="card"> 
                <div className="card-content">
                  <img src={Inspiration}/>  
                </div>        
              </div>
            </div>  
            <div className="column is-one-third">
              <div className="card"> 
                <div className="card-content">
                  <img src={Inspiration}/>  
                </div>        
              </div>
            </div>  
          </div>  
          <div className="columns">
            <div className="column is-one-third">
              <div className="card"> 
                <div className="card-content">
                  <img src={Inspiration}/>  
                </div>        
              </div>
            </div>  
            <div className="column is-one-third">
              <div className="card"> 
                <div className="card-content">
                  <img src={Inspiration}/>  
                </div>        
              </div>
            </div>  
            <div className="column is-one-third">
              <div className="card"> 
                <div className="card-content">
                  <img src={Inspiration}/>  
                </div>        
              </div>
            </div>  
          </div>  
        </div>
      </section>
    )
  }
}

  

export default ProductListPage
