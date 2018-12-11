import React from 'react'
import {Link,Route,Switch,Redirect} from 'react-router-dom'
import '../App.css';
import jwt from 'jsonwebtoken'

import Pizza from './food/pizza'
import Burger from './food/burger'
import Pasta from './food/pasta'
import Sandwich from './food/sandwich'
import Bread from './food/bread'
import Chowmein from './food/chowmein'
import Chopsuey from './food/chopsuey'
import Snacks from './food/snacks'
import Maggi from './food/maggi'
import Rice from './food/rice'
import Drinks from './food/drinks'
import Hotdrinks from './food/hotdrinks'
import Shakes from './food/shakes'
import SoyaChaap from './food/soya'
import NewArrival from './food/newarrival'

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
      }).email !== null ? <Component {...props} /> : <Redirect to='/login' />) : <Redirect to='/login' />
  )} />
))
class Profile extends React.Component{

    logout=()=>{
        localStorage.clear()
        alert("You Successfully Logged out")
        this.props.history.push('/admin')
    }
    check=(e)=>{
      document.documentElement.scrollTop = 0
      this.props.history.push(`/profile/${e.target.name}`)
    }
    componentDidMount(){
      console.log("dsfsd",this.props.match.url)
    }
    render(){
        return(
          <div class="hold-transition skin-blue sidebar-mini">
                <div className="wrapper">
                  {/* Main Header */}
                  <header className="main-header">
                    {/* Logo */}
                    <a href="javascript:void(0);" className="logo">
                      {/* mini logo for sidebar mini 50x50 pixels */}
                      <span className="logo-mini"><b>A</b>LT</span>
                      {/* logo for regular state and mobile devices */}
                      <span className="logo-lg"><b>Admin</b>LTE</span>
                    </a>
                    {/* Header Navbar */}
                    <nav className="navbar navbar-static-top" role="navigation">
                      {/* Sidebar toggle button*/}
                      <a href="javascript:void(0);" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                      </a>
                      {/* Navbar Right Menu */}
                      <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                          {/* Messages: style can be found in dropdown.less*/}
                         
                          
                          {/* User Account Menu */}
                          <li className="dropdown user user-menu" onClick={this.logout}>
                            {/* Menu Toggle Button */}
                            <a href="javascript:void(0);" className="dropdown-toggle">
                              {/* The user image in the navbar*/}
                              <img src="/dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                              {/* hidden-xs hides the username on small devices so only the image appears. */}
                              <span className="hidden-xs">Logout</span>
                            </a>
                          </li>
                          {/* Control Sidebar Toggle Button */}
                          {/* <li>
                            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
                          </li> */}
                        </ul>
                      </div>
                    </nav>
                  </header>
                  {/* Left side column. contains the logo and sidebar */}
                  <aside className="main-sidebar">
                    {/* sidebar: style can be found in sidebar.less */}
                    <section className="sidebar">
                      {/* Sidebar user panel (optional) */}
                      <div className="user-panel">
                        <div className="pull-left image">
                          <img src="/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                          <p>Delicious</p>
                        </div>
                      </div>
                      {/* search form (Optional) */}
                      <form  className="sidebar-form">
                        <div className="input-group">
                          <input type="text" name="q" className="form-control" placeholder="Search..." />
                          <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                            </button>
                          </span>
                        </div>
                      </form>
                      {/* /.search form */}
                      {/* Sidebar Menu */}
                      <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        {/* Optionally, you can add icons to the links */}

                        <li className="active treeview">
                          <a href="javascript:;" name="pizza" onClick={this.check}>
                              Pizza
                          </a>
                        </li>
                        
                        <li className="treeview">
                          <a href="javascript:;" name="pasta" onClick={this.check}>
                              Pasta
                          </a>
                        </li>

                        
                        <li className="treeview">
                        <a href="javascript:;" name="burger" onClick={this.check}>
                              Burger
                          </a>
                        </li>
                        
                        <li className="treeview">
                        <a href="javascript:;" name="sandwich" onClick={this.check}>
                              Sandwiches
                          </a>
                        </li>
                        
                        <li className="treeview" >
                          <a href="javascript:;" name="bread" onClick={this.check}>
                              Breads
                          </a>
                        </li>
                        
                        <li className="treeview" >
                          <a href="javascript:;" name="chowmein" onClick={this.check}>
                              Chowmein
                          </a>
                        </li>
                        
                        <li className="treeview" >
                          <a href="javascript:;" name="rice" onClick={this.check}>
                              Rice and Manchurian
                          </a>
                        </li>
                        
                        <li className="treeview" >
                          <a href="javascript:;" name="snacks" onClick={this.check}>
                              Snacks
                          </a>
                        </li>
                        
                        <li className="treeview" >
                          <a href="javascript:;" name="maggi" onClick={this.check}>
                              Maggi
                          </a>
                        </li>
                        
                        <li className="treeview" >
                          <a href="javascript:;" name="chopsuey" onClick={this.check}>
                              Chopsuey
                          </a>
                        </li>
                        
                        <li className="treeview" >
                          <a href="javascript:;" name="drinks" onClick={this.check}>
                              Drinks
                          </a>
                        </li>
                        
                        <li className="treeview" >
                          <a href="javascript:;" name="shakes" onClick={this.check}>
                              Shakes
                          </a>
                        </li>
                        
                        <li className="treeview" >
                        <a href="javascript:;" name="hotdrinks" onClick={this.check}>
                              Hot Drinks
                          </a>
                        </li>
                        
                        <li className="treeview" >
                          <a href="javascript:;" name="soya" onClick={this.check}>
                              Soya Chaap
                          </a>
                        </li>
                        
                        <li className="treeview" >
                          <a href="javascript:;" name="newarrival" onClick={this.check}>
                              New Arrivals
                          </a>
                        </li>
                      </ul>
                      {/* /.sidebar-menu */}
                    </section>
                    {/* /.sidebar */}
                  </aside>
                  {/* Content Wrapper. Contains page content */}
                  <div className="content-wrapper">
                    
                    
                    {/* Main content */}
                    <section className="content container-fluid">
                    <Switch>
                        <PrivateRoute exact path={`${this.props.match.url}`} component={Pizza}/>
                        <PrivateRoute path={`${this.props.match.url}/pizza`} component={Pizza}/>
                        <PrivateRoute path={`${this.props.match.url}/pasta`} component={Pasta}/>
                        <Route path={`${this.props.match.url}/burger`} component={Burger}></Route>
                        <Route path={`${this.props.match.url}/snacks`} component={Snacks}></Route>
                        <Route path={`${this.props.match.url}/bread`} component={Bread}></Route>
                        <Route path={`${this.props.match.url}/sandwich`} component={Sandwich}></Route>
                        <Route path={`${this.props.match.url}/chowmein`} component={Chowmein}></Route>
                        <Route path={`${this.props.match.url}/rice`} component={Rice}></Route>
                        <Route path={`${this.props.match.url}/maggi`} component={Maggi}></Route>
                        <Route path={`${this.props.match.url}/chopsuey`} component={Chopsuey}></Route>
                        <Route path={`${this.props.match.url}/drinks`} component={Drinks}></Route>
                        <Route path={`${this.props.match.url}/shakes`} component={Shakes}></Route>
                        <Route path={`${this.props.match.url}/hotdrinks`} component={Hotdrinks}></Route>
                        <Route path={`${this.props.match.url}/soya`} component={SoyaChaap}></Route>
                        <Route path={`${this.props.match.url}/newarrival`} component={NewArrival}></Route>
                      </Switch>
                          {/* {this.state.pizza ? <Pizza/> :""}
                          {this.state.pasta ? <Pasta/> :""}
                          {this.state.burger ? <Burger/> :""}
                          {this.state.sandwich ? <Sandwich/> :""}
                          {this.state.bread ? <Bread/> :""}
                          {this.state.chowmein ? <Chowmein/> :""}
                          {this.state.rice ? <Rice/> :""}
                          {this.state.snacks ? <Snacks/> :""}
                          {this.state.maggi ? <Maggi/> :""}
                          {this.state.chopsuey ? <Chopsuey/> :""}
                          {this.state.drinks ? <Drinks/> :""}
                          {this.state.shakes ? <Shakes/> :""}
                          {this.state.hot_drinks ? <Hotdrinks/> :""}
                          {this.state.soya_chaap ? <SoyaChaap/> :""}
                          {this.state.new_arrivals ? <NewArrival/> :""} */}

                    </section>
                    {/* /.content */}
                  </div>
              
                  <footer className="main-footer">
                    {/* Default to the left */}
                    <strong>Copyright © 2018 <a href="javascript:void(0);">Delicious</a>.</strong> 
                  </footer>
                  <div className="control-sidebar-bg" />
                </div>
              </div>
      )
    }
}

export default Profile