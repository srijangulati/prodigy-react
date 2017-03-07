import React from 'react';

export default class Branches extends React.Component{
  render(){
    return(
              <div>
                  <div className="col-md-12">
                      <div className="col-md-6 feature-1">
                          <div className="feature-content">
                              <h2>HSR layout branch</h2>
                              <p>No 343, 9th Main, Sector-7, Next to Karnataka ATM
                                  <br />HSR Layout, Bangalore</p>
                              <p>Contact: +91 9035074443</p>

                              <div className="iframe-rwd">
                                  <iframe width="500" height="450" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed/v1/place?q=No%20343%2C%209th%20Main%2C%20Sector-7%2C%20%20HSR%20Layout%2C%20Bangalore%20560%20102&key=AIzaSyCe8IAyzfEYjh1GyuO50kjFdRQNU82eZFo" allowFullScreen></iframe>
                              </div>


                              </div>
                      </div>
                      <div className="col-md-6 feature-1">
                          <div className="feature-content">
                              <h2>Magadi Road Branch</h2>
                              <p>Pipeline Road, Mahadeshwara Nagar
                                  <br />Herohalli Near arch, Magadi Main Road, Bangalore</p>
                              <p>Contact: +91 9880418962</p>

                              <div className="iframe-rwd">
                                  <iframe width="500" height="450" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.760577155685!2d77.48880351482211!3d12.987159590845742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae30ae5a83a95d%3A0x4a5165c20c60a515!2sPipeline+Rd%2C+Bengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1466416598342" allowFullScreen></iframe>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 feature-3 delay-1s"></div>
                  </div>
              </div>
    );
  }
}
