import React from 'react'
class Footer extends React.Component{
    state={

    }
    render(){
        return(
            
                 <footer className="footer text-center">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-offset-3 col-md-6 text-center">
                <div className="widget">
                  <h4 className="widget-title">Delicious</h4>
                  <address>324 Ellte Road<br />Delhi, DL 110013</address>
                  <div className="social-list">
                    <a href="www.instagram.com/_akash.sahu_"><i className="fa fa-instagram" aria-hidden="true" /> </a>
                    <a href="www.fb.com/akash.sahu.9028194"><i className="fa fa-facebook" aria-hidden="true" /> </a>
                  </div>
                  <p className="copyright clear-float">
                    © Delicious. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
            
        )
    }
}
export default Footer;