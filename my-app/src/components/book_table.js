import React from 'react'
class Book_Table extends React.Component{
    state={

    }
    render(){
        return(  
          <section id="contact" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="header-h">Book Your table</h1>
                <p className="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                  <br />nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>
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
                    <p className="light-blue regular alt-p">+91 9813890592  <span className="contacts-sp">Phone Booking</span></p>
                  </div>
                </div>
                <div className="media-2">
                  <div className="media-left">
                    <div className="contact-email bg-14 text-center"><span className="hour-icon fa fa-clock-o" /></div>
                  </div>
                  <div className="media-body">
                    <h4 className="dark-blue regular">Opening Hours</h4>
                    <p className="light-blue regular alt-p"> <b>Monday to Friday</b> <br/>09.00 AM to 11:00 PM<br/>
                      <b>Saturday and Sunday</b><br/> 09:00 AM to 03.00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-8">
                <form className="contactForm">
                  <div id="sendmessage">Your booking request has been sent. Thank you!</div>
                  <div id="errormessage" />

                
                <div class="form-group label-floating is-empty">
                  <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validation" />
                </div>
                  
                    <div className="form-group">
                      <input type="date" className="form-control label-floating is-empty" name="date" id="date" placeholder="Date" data-rule="required" data-msg="This field is required" />
                      <div className="validation" />
                    </div>
                  
                    <div className="form-group">
                      <input type="email" className="form-control label-floating is-empty" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validation" />
                    </div>
                  
                    <div className="form-group">
                      <input type="time" className="form-control label-floating is-empty" name="time" id="time" placeholder="Time" data-rule="required" data-msg="This field is required" />
                      <div className="validation" />
                    </div>
                  
                    <div className="form-group">
                      <input type="tel" className="form-control label-floating is-empty" name="phone" id="phone" placeholder="Phone" data-rule="required" data-msg="This field is required" />
                      <div className="validation" />
                    </div>
                  
                    <div className="form-group">
                      <input type="number" className="form-control label-floating is-empty" name="people" id="people" placeholder="People" data-rule="required" data-msg="This field is required" />
                    </div>
                  
                    <div className="form-group label-floating is-empty">
                      <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                      <div className="validation" />
                    </div>
                  
                  <div className="col-md-12 btnpad">
                    <div className="contacts-btn-pad">
                      <button className="contacts-btn">Book Table</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </section>
          
        )
    }
}
export default Book_Table