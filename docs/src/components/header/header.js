import React from 'react';
import Logo from './logo';
import ContactUs from './contactUs';

export default class Header extends React.Component{
  render(){
    const headerStyle = {
      marginTop: window.innerHeight*0.1
    }
    return(
      <div className="row nav-wrapper" style={headerStyle}>
          <Logo />
          <ContactUs />
      </div>
    );
  }
}
