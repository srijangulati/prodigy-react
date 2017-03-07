import React from 'react';
import Header from './header/header';
import Navbar from './navbar/navbar';
import Body from './body/body';
import Corosal from './body/carousal';
import Footer from './footer/footer';
var $ = require('jquery');

export default class App extends React.Component{

  setStyle(){
    const style = {
      height: window.innerHeight,
      width: window.innerWidth,
      background: 'url(../img/hero-02.jpg) center center no-repeat #284666',
      backgroundSize: 'cover'
    }
    return style;
  }

  componentWillMount(){
    setInterval(function(){
      this.background = (this.background + 1) % 3;
      $('#hero').css('background',this.images[this.background]);
    }.bind(this),3000);
  }

  render(){
    this.background = 0;
    this.images = [
      'url(../img/hero-02.jpg) center center no-repeat #284666',
      'url(../img/showcase-bg-fixed-01.jpg) center center no-repeat #284666'
    ]
    return(
      <div>
      <section id='hero' className='hero'>
        <div className='texture-overlay'>
          <Header />
          <Navbar />
          {this.props.children}
          <Footer />
        </div>
      </section>
      </div>
    );
  }
}
