import React from 'react'
import {Link,Route} from 'react-router-dom'
import '../App.css';
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
class Profile extends React.Component{
    state={
      pizza:true,
      pasta:false,
      burger:false,
      sandwich:false,
      bread:false,
      chowmein:false,
      rice:false,
      snacks:false,
      maggi:false,
      chopsuey:false,
      drinks:false,
      shakes:false,
      hot_drinks:false,
      soya_chaap:false,
      new_arrivals:false,
    }
    
    logout=()=>{
        localStorage.clear()
        alert("You Successfully Logged out")
        this.props.history.push('/admin')
    }
    
    toggle=(e)=>{
      console.log("match url",this.props.match.url)
      document.documentElement.scrollTop = 0
      let name=e.target.name
      for(let i=0;i<Object.keys(this.state).length;i++){
        let key=Object.keys(this.state)[i]
        if(key === name){
          this.setState({[name]:true})
        }
        else{
          this.setState({[key]:false})
        }
      }
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
                              <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
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
                          <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
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

                        <li className="treeview" name="pizza" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="pizza">
                              Pizza
                          </a>
                        </li>
                        
                        <li className="treeview"  name="pasta" onClick={this.toggle}>
                          <Link to="/profile/pasta"><a href="#" name="pasta">
                              Pasta
                          </a>
                          </Link>
                        </li>

                        
                        <li className="treeview"  name="burger" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="burger">
                              Burger
                          </a>
                        </li>
                        
                        <li className="treeview"  name="sandwich" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="sandwich">
                              Sandwiches
                          </a>
                        </li>
                        
                        <li className="treeview"  name="bread" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="bread">
                              Breads
                          </a>
                        </li>
                        
                        <li className="treeview"  name="chowmein" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="chowmein">
                              Chowmein
                          </a>
                        </li>
                        
                        <li className="treeview"  name="rice" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="rice">
                              Rice and Manchurian
                          </a>
                        </li>
                        
                        <li className="treeview"  name="snacks" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="snacks">
                              Snacks
                          </a>
                        </li>
                        
                        <li className="treeview"  name="maggi" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="maggi">
                              Maggi
                          </a>
                        </li>
                        
                        <li className="treeview"  name="chopsuey" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="chopsuey">
                              Chopsuey
                          </a>
                        </li>
                        
                        <li className="treeview"  name="drinks" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="drinks">
                              Drinks
                          </a>
                        </li>
                        
                        <li className="treeview"  name="shakes" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="shakes">
                              Shakes
                          </a>
                        </li>
                        
                        <li className="treeview"  name="hot_drinks" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="hot_drinks">
                              Hot Drinks
                          </a>
                        </li>
                        
                        <li className="treeview"  name="soya_chaap" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="soya_chaap">
                              Soya Chaap
                          </a>
                        </li>
                        
                        <li className="treeview"  name="new_arrivals" onClick={this.toggle}>
                          <a href="javascript:void(0);" name="new_arrivals">
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
                          {this.state.pizza ? <Pizza/> :""}
                          {this.state.pasta ? <Pasta/> :""}
                          {/* <Route path={`profile/pasta`} component={Pasta} /> */}
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
                          {this.state.new_arrivals ? <NewArrival/> :""}

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