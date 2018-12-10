import React from 'react'
import $ from 'jquery'
import Edit_Item from './edit_item'
class Action extends React.Component{
    state={
        id:this.props.param._id,
        category:this.props.category,
        data:this.props.param,
        edit:false
    }
  
    delete=(e)=>{
        console.log("inside delete",this.state)
        // e.preventDefault()
        let options={
            method:"POST",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            body:JSON.stringify({_id:this.state.id})
          }
          fetch(`http://localhost:8081/${this.state.category}/delete`,options)
          .then(res=>{
            console.log("response",res)
            return res.text();
          })
          .then(data=>{
            console.log("delete data",data)
            if(data === 'data deleted')
            {  console.log("dddd",this.props)
                //delete by using div id
               console.log("id",document.getElementById(this.state.id))
               $(`#${this.state.id}`).remove();
            }
          })
          .catch(err=>{
            console.log("error",err)
          })
    }
    render(){
        return(
            <div>
                <a href="#"  data-toggle="modal" data-target={`#edit${this.state.id}`} >Edit</a>&nbsp;&nbsp;
                <a href="#" onClick={this.delete}>Delete</a>
                <Edit_Item param={this.state.data} category={this.state.category} />
            </div>
        )
    }
}

  export default Action