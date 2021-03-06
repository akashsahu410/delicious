import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './home'
// import Signup from './signup'
import Login from './components/login'
import Forgot_Admin from './components/forgot_admin'
import Profile from './components/profile'
import jwt from 'jsonwebtoken'


const PrivateRoute = ({ component: Component, ...rest }) => (
    (<Route {...rest} render={(props) => (
        localStorage.length>0 ? (jwt.verify(localStorage.getItem("email"), 'pokemon', (err, decoded)=>{
            if(err){
                localStorage.clear()
                console.log("props",props)
                props.history.push('/admin')
            }
            else{
                return decoded                            
            }
        }).email !== null ? <Component {...props} /> : <Redirect to='/admin' />) : <Redirect to='/admin' />
    )} />
  ))
  //to check for login and signup 
  const Private = ({ component: Component, ...rest }) => (
    (<Route {...rest} render={(props) => (
        localStorage.length>0 ? (jwt.verify(localStorage.getItem("email"), 'pokemon', (err, decoded)=> {
            if(err)
            {
                localStorage.clear()
                props.history.push('/admin')
            }
            else{
                return decoded            
            }
          }).email !== null ? <Redirect to='/profile' /> : <Component {...props} />) : <Component {...props} />
    )} />
  ))
class Routes extends React.Component{

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Private path="/admin" component={Login}/>
                    <Private path="/forgot_admin" component={Forgot_Admin}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                </Switch>
            </div>
        )
    }
}
export default Routes;
