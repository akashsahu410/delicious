import React from 'react'
import Action from '../action'
import Additem from '../add_item'

class Shakes extends React.Component{
  state={
    item:"",
  }
  componentDidMount(){
    console.log("inside the shakes did mount",this.props)
    let options={
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
    }
    fetch("http://localhost:8081/shakes/get",options)
    .then(res=>{
      console.log("response",res)
      return res.json();
    })
    .then(data=>{
      console.log("data of shakes",data)
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
                    <a style={{float:'left'}} className="heading" data-toggle="modal" data-target="#addshakes" href="#"> Add new item</a><br/>
                      <h1 className="header-h">Shakes List</h1>
                      <Additem category="shakes"/>
                    {/* <p className="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    <br />nibh euismod tincidunt ut laoreet dolore magna aliquam. </p> */}
                    <br/>
                  </div>
                  
                  {this.state.item.length>0 ?
                    this.state.item.map(x=>
                    
                    <div className="breakfast menu-restaurant" id={`${x._id}`}>
                    <span className="clearfix">
                      <a className="menu-title" data-meal-img="assets/img/restaurant/rib.jpg">{x.item}<br/></a>
                      <span className="menu-price">&#8377;{x.price}&nbsp;&nbsp;&#8377;{x.with_cream}
                        <Action key={x.id} param={x} category="shakes" />
                      </span>
                    </span>
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
export default Shakes