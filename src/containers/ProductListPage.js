/**
 * Component that lists all Posts
 */
import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ProductListPage extends React.Component {

  render() {
    return(
      <section className="productpage">
        <div className="container">
          <div className="card"> 
            <div className="card-content">
              <iframe id="mfs_html5" src="https://airbit.com/widgets/html5/?uid=213343&config=404371" width="100%" height="510" frameborder="0" scrolling="no"></iframe>  
            </div>        
          </div>
        </div>
      </section>
    )
  }
}

  

export default ProductListPage
