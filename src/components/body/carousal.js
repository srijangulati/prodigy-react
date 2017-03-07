import React from 'react';
import Modal from 'react-modal';
import ModalBody from '../header/modalBody';

export default class Carousal  extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      active: 0,
      showModal: false
    };
  }

  setStyle(){
    const style = {
      display: this.state.showModal?'block':'none'
    }
    return style;
  }

  openModal(){
    this.setState({
      active : this.state.active,
      showModal:true
    });
  }

  closeModal(){
    this.setState({
      active : this.state.active,
      showModal:false
    });
  }

  componentWillMount(){
    this.interval = setInterval(function(){
      this.setState({
        active: (this.state.active+1) % 6
      });
    }.bind(this), 3000
    );
  }

  componentWillUnmount(){
      clearInterval(this.interval);
  }

  render(){
    this.interval;
    const closeButtonStyle = {
      float: 'right',
      textAlign:'right',
      cursor:'pointer',
      font:'bold',
      marginTop:'40px',
      marginRight:'20px'
    };
    const sliders = [
      "Unlock your potential. Boost your career. Step up towards a better you.",
      "You Get To Select Your Trainer From Our Database of Trainers",
      "Coaching classes & Tutions starting from Rs. 3,000/- per month",
      "Flexible timings to suit your busy schedule",
      "We customize the program based on the time at your disposal",
      "Small Batches to ensure all students get personal attention from our trainers",
      "All trainers, rated and reviewed by our previous student`s"
    ];
    const movingSlider = sliders.map((slide,key)=>
      <div key={key} className='animated fadeInRight'>{slide}</div>
    );
    return(
      <div>
          {movingSlider[this.state.active]}
      </div>
    );
  }
}
