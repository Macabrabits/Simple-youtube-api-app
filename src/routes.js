import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import Signin from './pages/Signin'
// import Signup from './pages/Signup'
import Search from './pages/Search'
import Details from './pages/Details'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            {/*<Route path="/" exact component={Signin}/>*/}
            <Route path="/" exact component={Search}/>
            <Route path="/details/:videoId" exact component={Details}/>
            {/*<Route path="/signup" component={Signup}/>*/}
        </Switch>
        </BrowserRouter>
    )
}

