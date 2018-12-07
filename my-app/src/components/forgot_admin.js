import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
class Forgot_Admin extends React.Component{
    state={
        email:"",
        password:"",
        new_password:"",
        emailValid:"",
        passwordValid:"",
        newValid:""
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    email_valid=()=> {
      const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) === true){
          return true;
      }
      else{
          return false;
      }
    }
    checkData=(e)=>{
        e.preventDefault()
        this.setState({emailValid:"",passwordValid:"",newValid:""})
        console.log("inside the check function")
        if(this.email_valid()){
            this.setState({emailValid:""})
            if(this.state.password.length>0){
              this.setState({passwordValid:""})
              if(this.state.new_password.length>5){
                this.setState({newValid:""})
                if(this.state.new_password !== this.state.password){
                  this.setState({newValid:""})
                  let options={
                    method:"POST",
                    headers:{
                      Accept:"application/json",
                      "Content-Type":"application/json"
                    },
                    body:JSON.stringify({email:this.state.email,password:this.state.password})
                  }
                  fetch("http://localhost:8081/login",options)
                  .then(res=>{
                    console.log("response",res)
                    return res.json();
                  })
                  .then(data=>{
                    console.log("data of login",data)
                    if(data.length >0){
                        if((data[0].email === this.state.email) && (data[0].password === this.state.password)){
                            this.setState({passwordValid:""})
                            let options={
                              method:"POST",
                              headers:{
                                Accept:"application/json",
                                "Content-Type":"application/json"
                              },
                              body:JSON.stringify(this.state)
                            }
                            fetch("http://localhost:8081/changePassword",options)
                            .then(res=>{
                              console.log("response",res)
                              return res.json();
                            })
                            .then(data=>{
                              console.log("data of forgot",data)
                              alert("Password Changed Successfuly")
                              this.props.history.push('/admin')
                            })
                            .catch(err=>{
                              console.log("error in forgot",err)
                            })
                        }
                        else{
                          this.setState({passwordValid:"Invalid Current password"})
                        }
                    }
                    else{
                      this.setState({passwordValid:"Invalid Current password"})
                    }
                })
                .catch(err=>{
                  console.log("error in forgot",err)
                })
              }
              else{
                this.setState({newValid:"Cuurent and new password should not be same"})
              }
            }
            else{
              this.setState({newValid:"New Password length must be greater than 5 characters"})              
            }
          }
          else{
            this.setState({passwordValid:"Current Password should not be empty"})              
          }
        }
        else{
          this.setState({emailValid:"Invalid Email"})
        }
    }
    render(){
        return(
            <div>
                <section id="contact" className="section-padding">
        <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="header-h">Change Password</h1>
                <p className="header-p">Admin can change the password if forgotten...
                </p>
              </div>
            </div>
            
            <div className="row msg-row">
              <div className="col-md-4 col-sm-4 mr-15">
                <div className="media-2">
                  <div className="media-left">
                    <div className="contact-phone bg-1 text-center"><span className="phone-in-talk fa fa-phone" /></div>
                  </div>
                  <div className="media-body">
                    <h4 className="dark-blue regular">Phone Numbers</h4>
                    <p className="light-blue regular alt-p">+91 9813890592 </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-8">
               <form className="admin_form">

                <div class="form-group label-floating is-empty">
                  <input type="text" className="form-control" name="email" onChange={this.handleChange} placeholder="Email"  />
                </div>
                  
                <div class="form-group label-floating is-empty">
                  <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Current Password"  />
                </div>

                <div class="form-group label-floating is-empty">
                  <input type="password" className="form-control" name="new_password" onChange={this.handleChange}  placeholder="New Password"  />
                </div>
                  
                <div class="form-group label-floating is-empty">
                  <label for>{this.state.emailValid.length>0 ? this.state.emailValid : ""}</label>
                  <label for>{this.state.passwordValid.length>0 ? this.state.passwordValid : ""}</label>
                  <label for>{this.state.newValid.length>0 ? this.state.newValid : ""}</label>
                </div>   
            
                  <div className="col-md-12 btnpad">
                    <div className="contacts-btn-pad">
                      <button className="contacts-btn" onClick={this.checkData}>Change Password</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </section>
            </div>
        )
    }
}

  export default Forgot_Admin

            