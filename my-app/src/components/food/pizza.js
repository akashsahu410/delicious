import React from 'react'
import Action from '../action'
import Additem from '../add_item'
class Pizza extends React.Component{
    state={
      item:"",
    }
    
    componentDidMount(){
      console.log("inside the pizza did mount",this.props)
      let options={
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
      }
      fetch("http://localhost:8081/pizza/get",options)
      .then(res=>{
        console.log("response",res)
        return res.json();
      })
      .then(data=>{
        console.log("data of pizza",data)
        this.setState({item:data})
      })
      .catch(err=>{
        console.log("error",err)
      })
    }
    render(){
        return(
            <div>
              {/* <section id="menu-list" className="section-padding">             */}
                <div className="container">
                <div className="row">
                
                    <div className="col-md-10 text-center marb-50">
                    <a style={{float:'left'}} className="heading" data-toggle="modal" data-target="#addpizza" href="#"> Add new item</a><br/>
                      <h1 className="header-h">Pizza List</h1><br/>
                      <Additem category="pizza"/>
                      {/* <p className="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                      <br />nibh euismod tincidunt ut laoreet dolore magna aliquam. </p> */}
                      <br/>
                    </div>
                    {this.state.item.length>0 ?
                      this.state.item.map(x=>
                          
                      <div className="breakfast menu-restaurant" id={`${x._id}`}>
                      <span className="clearfix">
                        <label for className="menu-title align-item" data-meal-img="img/restaurant/rib.jpg">&#127829;{x.item}<br/>&#129472;extra cheese</label>
                        <span className="menu-price">&#8377;{x.price}<br/>&#8377;{x.extra_cheese}&nbsp;&nbsp;
                          <Action key={x.id} param={x} category="pizza"/>
                        </span>
                      </span> <br/>
                      {/* <span className="menu-subtitle">Neque porro quisquam est qui dolorem</span> */}
                    </div> 
                      )
                  :
                      ""
                  }
                  
                </div>
                </div>
                
               {/* </section> */}
            </div>
        )
    }
}
export default Pizza