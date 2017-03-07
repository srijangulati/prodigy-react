import React from 'react';
import Modal from 'react-modal';
import ModalBody from '../header/modalBody';
import Carousal from './carousal';

export default class name extends React.Component{
  constructor(props){
    super(props);
    this.state = {
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
    this.setState({showModal:true});
  }

  closeModal(){
    this.setState({showModal:false});
  }

  render(){
    const closeButtonStyle = {
      float: 'right',
      textAlign:'right',
      cursor:'pointer',
      font:'bold',
      marginTop:'40px',
      marginRight:'20px'
    };
    const learnMore ={
      cursor:'pointer'
    };
    return(
    <div>
                    <div className="col-md-offset-1 col-md-5">
                        <h1 className="animated fadeInDown"><b>PRODIGY ACADEMY</b></h1>
                        <h2><br/><Carousal/><br/></h2>
                        <a style={learnMore} className="learn-btn animated fadeInUp" onClick={this.openModal.bind(this)}>Learn more</a></div>

                        <Modal
                        isOpen={this.state.showModal}
                        onRequestClose={this.closeModal.bind(this)}
                        contentLabel = "Contact Us"
                        className='modal-dialog modal-content'
                        >
                          <i style={closeButtonStyle} className='glyphicon glyphicon-remove' onClick={this.closeModal.bind(this)}></i>
                          <ModalBody />
                        </Modal>

                </div>
    );
  }
}
