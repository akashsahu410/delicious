import React from 'react'
import Action from '../action'
import Additem from '../add_item'

class NewArrival extends React.Component{
  state={
    item:"",
  }
  componentDidMount(){
    console.log("inside the new arrival did mount",this.props)
    let options={
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
    }
    fetch("http://localhost:8081/newarrival/get",options)
    .then(res=>{
      console.log("response",res)
      return res.json();
    })
    .then(data=>{
      console.log("data of new arrival",data)
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
                    <a style={{float:'left'}} className="heading" data-toggle="modal" data-target="#addnewarrival" href="javascript:;"> Add new item</a><br/>
                      <h1 className="header-h">New Arrivals List</h1>
                      <Additem category="newarrival"/>
                    {/* <p className="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    <br />nibh euismod tincidunt ut laoreet dolore magna aliquam. </p> */}
                    <br/>
                  </div>
                  
                  {this.state.item.length>0 ?
                    this.state.item.map(x=>
                    
                    <div className="breakfast menu-restaurant" id={`${x._id}`}>
                    <span className="clearfix">
                      <a className="menu-title" data-meal-img="assets/img/restaurant/rib.jpg">&#129374;{x.item}<br/></a>
                      <span className="menu-price">&#8377;{x.per_plate}&nbsp;&nbsp;
                        <Action key={x.id} param={x} category="newarrival" />
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
export default NewArrival