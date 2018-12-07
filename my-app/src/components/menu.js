import React from 'react'
class Menu extends React.Component{
    state={

    }
    render(){
        return(
          <section id="menu-list" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center marb-35">
                <h1 className="header-h">Menu List</h1>
                <p className="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                  <br />nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>
              </div>
              <div className="col-md-12  text-center" id="menu-flters">
                <ul>
                  <li><a className="filter active" data-filter=".menu-restaurant">Show All</a></li>
                  <li><a className="filter" data-filter=".breakfast">Breakfast</a></li>
                  <li><a className="filter" data-filter=".lunch">Lunch</a></li>
                  <li><a className="filter" data-filter=".dinner">Dinner</a></li>
                </ul>
              </div>
              <div id="menu-wrapper">
                <div className="breakfast menu-restaurant">
                  <span className="clearfix">
                    <a className="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
                    <span style={{left: 166, right: 44}} className="menu-line" />
                    <span className="menu-price">$20.99</span>
                  </span>
                  <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span>
                </div>
                <div className="breakfast menu-restaurant">
                  <span className="clearfix">
                    <a className="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
                    <span style={{left: 166, right: 44}} className="menu-line" />
                    <span className="menu-price">$20.99</span>
                  </span>
                  <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span>
                </div>
                <div className="breakfast menu-restaurant">
                  <span className="clearfix">
                    <a className="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
                    <span style={{left: 166, right: 44}} className="menu-line" />
                    <span className="menu-price">$20.99</span>
                  </span>
                  <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span>
                </div>
                <div className="breakfast menu-restaurant">
                  <span className="clearfix">
                    <a className="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
                    <span style={{left: 166, right: 44}} className="menu-line" />
                    <span className="menu-price">$20.99</span>
                  </span>
                  <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span>
                </div>
                <div className="lunch menu-restaurant">
                  <span className="clearfix">
                    <a className="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
                    <span style={{left: 166, right: 44}} className="menu-line" />
                    <span className="menu-price">$20.99</span>
                  </span>
                  <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span>
                </div>
                <div className="lunch menu-restaurant">
                  <span className="clearfix">
                    <a className="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
                    <span style={{left: 166, right: 44}} className="menu-line" />
                    <span className="menu-price">$20.99</span>
                  </span>
                  <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span>
                </div>
                <div className="lunch menu-restaurant">
                  <span className="clearfix">
                    <a className="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
                    <span style={{left: 166, right: 44}} className="menu-line" />
                    <span className="menu-price">$20.99</span>
                  </span>
                  <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span>
                </div>
                <div className="lunch menu-restaurant">
                  <span className="clearfix">
                    <a className="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
                    <span style={{left: 166, right: 44}} className="menu-line" />
                    <span className="menu-price">$20.99</span>
                  </span>
                  <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span>
                </div>
                <div className="lunch menu-restaurant">
                  <span className="clearfix">
                    <a className="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
                    <span style={{left: 166, right: 44}} className="menu-line" />
                    <span className="menu-price">$20.99</span>
                  </span>
                  <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span>
                </div>
                <div className="dinner menu-restaurant">
                  <span className="clearfix">
                    <a className="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
                    <span style={{left: 166, right: 44}} className="menu-line" />
                    <span className="menu-price">$20.99</span>
                  </span>
                  <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span>
                </div>
                <div className="dinner menu-restaurant">
                  <span className="clearfix">
                    <a className="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
                    <span style={{left: 166, right: 44}} className="menu-line" />
                    <span className="menu-price">$20.99</span>
                  </span>
                  <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span>
                </div>
                <div className="dinner menu-restaurant">
                  <span className="clearfix">
                    <a className="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
                    <span style={{left: 166, right: 44}} className="menu-line" />
                    <span className="menu-price">$20.99</span>
                  </span>
                  <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        )
    }
}
export default Menu