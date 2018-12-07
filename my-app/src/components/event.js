import React from 'react'
class Event extends React.Component{
    state={

    }
    render(){
        return(
            
                <section id="event">
          <div className="bg-color">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 text-center" style={{padding: 60}}>
                  <h1 className="header-h">Up Coming events</h1>
                  <p className="header-p">Decorations 100% complete here</p>
                </div>
                <div className="col-md-12" style={{paddingBottom: 60}}>
                  <div className="item active left">
                    <div className="col-md-6 col-sm-6 left-images">
                      <img src="img/res02.jpg" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-md-6 col-sm-6 details-text">
                      <div className="content-holder">
                        <h2>Joyful party</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eos suscipit earum voluptas aliquam recusandae, quae iure adipisci, inventore quia, quos delectus quaerat praesentium id expedita nihil illo accusantium, tempora.</p>
                        <address>
                          <strong>Place: </strong>
                          1612 Collins Str, Victoria 8007
                          <br />
                          <strong>Time: </strong>
                          07:30pm
                        </address>
                        <a className="btn btn-imfo btn-read-more" href="events-details.html">Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
            
        )
    }
}
export default Event