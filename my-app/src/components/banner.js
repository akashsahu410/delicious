import React from 'react'
class Banner extends React.Component{
    state={

    }
    openNav=()=>{
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    closeNav=()=>{
      document.getElementById("mySidenav").style.width = "0";
    }
    render(){
        return(
    
                <section id="banner">
          <div className="bg-color">
            <header id="header">
              <div className="container">
                <div id="mySidenav" className="sidenav">
                  <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
                  <a href="#about">About</a>
                  <a href="#event">Event</a>
                  <a href="#menu-list">Menu</a>
                  <a href="#contact">Book a table</a>
                </div>
                {/* Use any element to open the sidenav */}
                <span onClick={this.openNav} className="pull-right menu-icon">☰</span>
                
              </div>
            </header>
            <div className="container">
              <div className="row">
                <div className="inner text-center">
                  <h1 className="logo-name">Delicious</h1>
                  <h2>Food To fit your lifestyle &amp; health.</h2>
                  <p>Specialized in Indian Cuisine!!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
            
        )
    }
}
export default Banner