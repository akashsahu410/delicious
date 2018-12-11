import React from 'react'
import '../App.css';
import $ from 'jquery';
import { hashHistory } from 'react-router'
class Edit_Item extends React.Component{
    state={
        data:this.props.param,
        item_arr:[],
        id:this.props.param._id,
        category:this.props.category,
        item:"",
        price:"",
        half_price:"",
        full_price:"",
        per_plate:"",
        extra_cheese:"",
        oneplate_price:"",
        twoplate_price:"",
        with_cream:"",
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value.toLowerCase()})
    }
    componentDidMount(){
        console.log("did",this.state.data)
        let ob=this.state.data
        console.log(ob)
        for(let i=0;i<Object.keys(ob).length;i++){
            console.log(Object.keys(ob)[i],ob[Object.keys(ob)[i]])
            if(Object.keys(ob)[i] === '_id'){
            }
            else{
                let temp={}
                temp[Object.keys(ob)[i]]=ob[Object.keys(ob)[i]]
                this.state.item_arr.push(temp)
                this.setState({[Object.keys(ob)[i]]:ob[Object.keys(ob)[i]]})
            }
        }
        console.log("new",this.state.item_arr,this.state)
    }
    changeData=(e)=>{
        console.log("inside the change data function",this.state)
        e.preventDefault()
        let options={
            method:"POST",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
          }
          fetch(`http://localhost:8081/${this.state.category}/change`,options)
          .then(res=>{
            console.log("response",res)
            return res.text();
          })
          .then(data=>{
            console.log("change data",data)
            if(data === "data changed"){
                $('body .close').trigger('click');
                // this.props.history.push(`profile/${this.state.category}`)
                window.location.reload()
            }
            else{
                alert("Changed failure")
            }
          })
          .catch(err=>{
            console.log("error",err)
          })
    }
    render(){
        return(
            <div>
                <br/>
                <div class="modal fade" id={`edit${this.state.id}`} role="dialog" style={{display:'none'}}>
                <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <center><h4 className="header-h">Edit item</h4></center>
                  </div>
                  <div class="modal-body">
                  {
                    this.state.item_arr.length >0 ? 
                    this.state.item_arr.map(x=>
                        // console.log("sdfsd",x,Object.keys(x))
                        Object.keys(x) !== '__v' && <form>
                            <div class="form-group">
                                <label for style={{textTransform:'uppercase'}} className="header-p">{Object.keys(x)}</label>
                                <input type="text" class="form-control" style={{textTransform:'uppercase'}} onChange={this.handleChange} defaultValue={x[Object.keys(x)]} name={Object.keys(x)}/>
                            </div>
                        </form>
                    )
                    : ""
                }
                <br/>
                <button type="submit" onClick={this.changeData}class="btn btn-warning btn-md">Submit</button>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div> 
              </div>
            </div>

            </div>
        )
    }
}


export default Edit_Item
            