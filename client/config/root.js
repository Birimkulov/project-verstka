/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect, StaticRouter } from 'react-router-dom'

import store, { history } from '../redux'

import Home from '../components/home'
import Dashboard from '../components/dashboard'
import NotFound from '../components/404'

import Startup from './startup'
import FirstTask from '../components/First/firsttask'
import SecondTask from '../components/Second/secondtask'
import ThirdTask from '../components/Third/thirdtask'
import ForthTask from '../components/Forth/forthtask'
import FifthTask from "../components/Fifth/fifthtask";
import SixthTask from "../components/Sixth/sixthtask";
import SeventhTask from "../components/Seventh/seventhtask";
import EighthTask from "../components/Eighth/eighthtask";
import NinthTask from "../components/Ninth/ninthtask";

const OnlyAnonymousRoute = ({ component: Component, ...rest }) => {
  const func = (props) =>
    !!rest.user && !!rest.user.name && !!rest.token ? (
      <Redirect to={{ pathname: '/' }} />
    ) : (
      <Component {...props} />
    )
  return <Route {...rest} render={func} />
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const func = (props) =>
    !!rest.user && !!rest.user.name && !!rest.token ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    )
  return <Route {...rest} render={func} />
}

const types = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  }),
  token: PropTypes.string
}

const defaults = {
  location: {
    pathname: ''
  },
  user: null,
  token: ''
}

OnlyAnonymousRoute.propTypes = types
PrivateRoute.propTypes = types

PrivateRoute.defaultProps = defaults
OnlyAnonymousRoute.defaultProps = defaults

const RouterSelector = (props) =>
  typeof window !== 'undefined' ? <ConnectedRouter {...props} /> : <StaticRouter {...props} />

const RootComponent = (props) => {
  return (
    <Provider store={store}>
      <RouterSelector history={history} location={props.location} context={props.context}>
        <Startup>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/dashboard" component={() => <Dashboard />} />
            <Route exact path="/1" component={() => <FirstTask />} />
            <Route exact path="/2" component={() => <SecondTask />} />
            <Route exact path="/3" component={() => <ThirdTask />} />
            <Route exact path="/4" component={() => <ForthTask />} />
            <Route exact path="/5" component={() => <FifthTask />} />
            <Route exact path="/6" component={() => <SixthTask />} />
            <Route exact path="/7" component={() => <SeventhTask />} />
            <Route exact path="/8" component={() => <EighthTask />} />
            <Route exact path="/9" component={() => <NinthTask />} />
            <PrivateRoute exact path="/hidden-route" component={() => <Dashboard />} />
            <Route component={() => <NotFound />} />
          </Switch>
        </Startup>
      </RouterSelector>
    </Provider>
  )
}

export default RootComponent
