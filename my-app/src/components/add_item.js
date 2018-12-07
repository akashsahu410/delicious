import React from 'react'
class Additem extends React.Component{
    state={
      category:this.props.category, //to initialize the category
      item_arr:"",  //fetch data from parent
      item:"",
      price:"",
      half_price:"",
      full_price:"",
      per_plate:"",
      extra_cheese:"",
      oneplate_price:"",
      twoplate_price:"",
      with_cream:"",
      refresh:""
    }

    handleChange=(e)=>{
      this.setState({[e.target.name]:e.target.value.toLowerCase()})
  }
    
    addData=(e)=>{
      console.log("inside the add data function",this.state)
      e.preventDefault()
      let options={
          method:"POST",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          body:JSON.stringify(this.state)
        }
        fetch(`http://localhost:8081/${this.state.category}/add`,options)
        .then(res=>{
          console.log("response",res)
          return res.text();
        })
        .then(data=>{
          console.log("add data",data)
          if(data === "item added"){
              // alert("Changed Successfully")
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
      const text_css={textTransform:'uppercase',float:'left'}
      const input_css={textTransform:'uppercase'}
        return(
            <div>
            <div class="modal fade" id={`add${this.state.category}`} role="dialog">
               <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <center><h4 className="header-h">Add new item</h4></center>
                  </div>
                  <div class="modal-body">
                  {/* add new pizza */}
                  { this.state.category === 'pizza' ? 
                   (<form>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">item</label>
                                <input type="text" name="item" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">price</label>
                                <input type="number" name="price" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">extra cheese price</label>
                                <input type="number" name="extra_cheese" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <br/>
                  </form>) : "" }  
                  {/* add new bread */}
                  { this.state.category === 'bread' ? 
                   (<form>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">item</label>
                                <input type="text" name="item" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">half price</label>
                                <input type="number" name="half_price" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">Full price</label>
                                <input type="number" name="full_price" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <br/>
                  </form>) : "" }  
                  {/* add new pasta */}
                  { this.state.category === 'pasta' || this.state.category === 'hotdrinks' ||this.state.category === 'drinks' ||
                  this.state.category === 'chopsuey'||this.state.category === 'burger' || this.state.category === 'maggi' ||
                  this.state.category === 'rice' || this.state.category === 'snacks'? 
                   (<form>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">item</label>
                                <input type="text" name="item" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">price</label>
                                <input type="number" name="price" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            
                  </form>) : "" }

                  {/* add new chowmein */}
                  { this.state.category === 'chowmein' || this.state.category === 'soya' ? 
                   (<form>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">item</label>
                                <input type="text" name="item" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">half price</label>
                                <input type="number" name="half_price" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">full price</label>
                                <input type="number" name="full_price" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                  </form>) : "" }
                 
                 
                  {/* add new arrivals  */}
                  { this.state.category === 'newarrival' ? 
                   (<form>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">item</label>
                                <input type="text" name="item" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">per plate Price</label>
                                <input type="number" name="per_plate" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                           
                  </form>) : "" }
                  
                  {/* add new sandwich */}
                  { this.state.category === 'sandwich' ? 
                   (<form>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">item</label>
                                <input type="text" name="item" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">one plate price</label>
                                <input type="number" name="oneplate_price" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">two plate cheese</label>
                                <input type="number" name="twoplate_price" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                  </form>) : "" }
                  {/* add new shakes */}
                  { this.state.category === 'shakes' ? 
                   (<form>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">item</label>
                                <input type="text" name="item" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">price</label>
                                <input type="number" name="price" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for style={text_css} className="header-p">with cream price</label>
                                <input type="number" name="with_cream" class="form-control" style={input_css} onChange={this.handleChange} />
                            </div>
                  </form>) : "" }

                <br/>
                  <button type="submit" onClick={this.addData} class="btn btn-warning btn-md">Submit</button>
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
export default Additem