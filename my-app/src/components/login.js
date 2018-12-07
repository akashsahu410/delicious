import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
import jwt from 'jsonwebtoken'

class Login extends React.Component{
    state={
        email:"",
        password:"",
        emailValid:"",
        passwordValid:""
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value.toLowercase()})
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
        this.setState({emailValid:"",passwordValid:""})
        console.log("inside the check function")
        if(this.email_valid()){
            this.setState({emailValid:""})
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
                        localStorage.setItem("name",JSON.stringify(data[0].name))
                        const token_email = jwt.sign({ expiresInMinutes: 60,email:this.state.email }, 'pokemon')
                        const token_name = jwt.sign({ expiresInMinutes: 60,name:data[0].name }, 'pikachu')
                        localStorage.setItem("email",token_email)
                        localStorage.setItem("name",token_name)

                        console.log("localstorage email",localStorage.getItem("email"),localStorage.getItem("name"))

                        jwt.verify(localStorage.getItem("email"), 'pokemon', (err, decoded)=> {
                          console.log(decoded) 
                        })

                        //verify
                        jwt.verify(token_email, 'pokemon', (err, decoded)=> {
                          console.log("verify",decoded) // bar
                        });

                      // get the decoded payload and header
                        var decoded = jwt.decode(token_email, {complete: true});
                        let decode_email=jwt.decode(localStorage.getItem("email"))
                        console.log("decode data",decode_email)
                        console.log("header",decoded.header);
                        console.log("payload",decoded.payload)
                        alert("You Successfully Logged in")
                        this.props.history.push(`/profile`)
                    }
                    else{
                         this.setState({passwordValid:"Invalid password"})
                    }
                }
                else{
                    this.setState({passwordValid:"Invalid password"})
                }
              })
              .catch(err=>{
                  console.log("error occured in fetch of login",err)
              })
          
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
                <h1 className="header-h">Admin Login</h1>
                <p className="header-p">Login panel for admin to modify the list of items
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
                  <input type="password" className="form-control" name="password" onChange={this.handleChange} id="password" placeholder="Password"  />
                </div>
                  
                <div class="form-group label-floating is-empty">
                  <label for>{this.state.emailValid.length>0 ? this.state.emailValid : ""}</label>
                  <label for>{this.state.passwordValid.length>0 ? this.state.passwordValid : ""}</label>
                </div>   
                  
                <div class="form-group label-floating is-empty">
                  <Link to="/forgot_admin"><a href="#"><label for>Change Password ?</label></a></Link>
                </div>  
                
                  <div className="col-md-12 btnpad">
                    <div className="contacts-btn-pad">
                      <button className="contacts-btn" onClick={this.checkData}>Login</button>
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


  export default Login

            