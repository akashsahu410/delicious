import React from 'react'
class About extends React.Component{
    state={

    }
    render(){
        return(
            
                <section id="about" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center marb-35">
                <h1 className="header-h">Delicious Journey</h1>
                <p className="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                  <br />nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>
              </div>
              <div className="col-md-1" />
              <div className="col-md-10">
                <div className="col-md-6 col-sm-6">
                  <div className="about-info">
                    <h2 className="heading">vel illum qui dolorem eum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero impedit inventore culpa vero accusamus in nostrum dignissimos modi, molestiae. Autem iusto esse necessitatibus ex corporis earum quaerat voluptates quibusdam dicta!</p>
                    <div className="details-list">
                      <ul>
                        <li><i className="fa fa-check" />Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li><i className="fa fa-check" />Quisque finibus eu lorem quis elementum</li>
                        <li><i className="fa fa-check" />Vivamus accumsan porttitor justo sed </li>
                        <li><i className="fa fa-check" />Curabitur at massa id tortor fermentum luctus</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <img src="img/res01.jpg" alt className="img-responsive" />
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </section>

        )
    }
}
export default About