/**
 * Component that lists all Posts
 */
import Inspiration from "../assets/light_bulb.jpg";
import Spain1 from "../assets/spain_1.jpg";
import Spain2 from "../assets/spain_2.jpg";
import Spain3 from "../assets/spain_3.jpg";
import Guildford_Views from "../assets/Guilford_Views.jpg";
import Wellington_Statue from "../assets/wellington statue.jpg";
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
                  <img src={Spain1}/>  
                </div>        
              </div>
            </div>  
            <div className="column is-one-third">
              <div className="card"> 
                <div className="card-content">
                  <img src={Spain2}/>  
                </div>        
              </div>
            </div>  
          </div>  
          <div className="columns">
            <div className="column is-one-third">
              <div className="card"> 
                <div className="card-content">
                  <img src={Spain3}/>  
                </div>        
              </div>
            </div>  
            <div className="column is-one-third">
              <div className="card"> 
                <div className="card-content">
                  <img src={Guildford_Views}/>  
                </div>        
              </div>
            </div>  
            <div className="column is-one-third">
              <div className="card"> 
                <div className="card-content">
                  <img src={Wellington_Statue}/>  
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
