import React from 'react'
import ReactDOM from 'react-dom'

// Layouts
import MainLayout from './layouts/MainLayout' 

// Components
import LoginUser from './containers/LoginUser'
import CreateUser from './containers/CreateUser'
import HomePage from './containers/HomePage'
import SocialPage from './containers/SocialPage'
// import WalkPage from './containers/WalkPage'
// import BusinessPage from './containers/BusinessPage'
import ListPage from './containers/ListPage'
import PlaceListPage from './containers/PlaceListPage'
import ListCategory from './containers/ListCategory'
import CreatePage from './containers/CreatePage'
import CreateEvent from './containers/CreateEvent'
// import InspirationPage from './containers/InspirationPage'
import EventPage from './containers/EventPage'
import DashboardPage from './containers/DashboardPage'
import PlacePage from './containers/PlacePage'
import ProductListPage from './containers/ProductListPage'
import MessagePage from './containers/MessagePage'
import ThankyouPage from './containers/ThankyouPage'
// import ShowcasePage from './containers/ShowcasePage'
import ContactPage from './containers/ContactPage'
// import CreateCategory from './containers/CreateCategory'

import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

// import 'tachyons'
import './index.css'

const networkInterface = createNetworkInterface({ uri: 'https://api.graphcms.com/simple/v1/cj9y8upmi08yk0198moecfoiv' })

networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    if (localStorage.getItem('graphcoolToken')) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem('graphcoolToken')}`
    }
    next()
  },
}])

const client = new ApolloClient({ networkInterface })

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route component={MainLayout}>
        <Route path='/' component={HomePage} />
        <Route path='/social' component={SocialPage} />
        <Route path='/photos' component={ListPage} />
        <Route path='/places' component={PlaceListPage} />
        <Route path='/products' component={ProductListPage} />
        <Route path='/admin' component={DashboardPage} />
        <Route path='/places/:id' component={PlacePage} />
        {/*<Route path='/walks' component={WalkPage} />*/}
        {/*<Route path='/contacts' component={BusinessPage} />*/}
        <Route path='/photos/create' component={CreatePage} />
        <Route path='/events/create' component={CreateEvent} />
        {/* <Route path='/inspiration' component={InspirationPage} /> */}
        <Route path='/events/:id' component={EventPage} />
        {/*<Route path='/categories/create' component={CreateCategory} />*/}
        <Route path='/categories' component={ListCategory} />
        <Route path='login' component={LoginUser} />
        <Route path='signup' component={CreateUser}/>
        <Route path='registeryourinterest' component={MessagePage}/>
        <Route path='thankyou' component={ThankyouPage}/>
        {/* <Route path='showcase' component={ShowcasePage}/> */}
        <Route path='contact' component={ContactPage}/>
      </Route>
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
