
import React from 'react';
import {BrowserRouter as Router,Redirect,List,Switch,Route} from 'react-router-dom';
import AddEditModule from './AddEditModule';
import Dashboard from './Dashboard';
import Login from './Login';
import SignUp from './SignUp';
function Homepage(){

    return(
<div>
    <Router>
<Switch>
<Route exact path='/'>
            <Redirect to="/login" />
        </Route>
    <Route exact path="/login" component={Login}></Route>
    <Route exact path="/dashboard" component={Dashboard}></Route>
    <Route exact path="/signup" component={SignUp}></Route>
    
</Switch>
        
    </Router>
</div>
    )
}
export default Homepage;