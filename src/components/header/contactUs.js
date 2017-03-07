import React from 'react';
import Modal from 'react-modal';
import ModalBody from './modalBody';

export default class ContactUs extends React.Component{
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
    return(
      <div>
      <div className="col-md-offset-6 col-sm-offset-7 col-xs-offset-7 col-md-2 col-sm-2 col-xs-2 text-left">
          <a className="logo-link" onClick={this.openModal.bind(this)}>
            <img src="img/mail-logo.png" alt="Contact Us" height="90" width="90"></img>
          </a>
      </div>
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
