import React from 'react';
import Modal from 'react-modal';
import ModalBody from '../header/modalBody';

export default class Box extends React.Component{
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
    const style = {
      marginTop:'2%',
      cursor:'pointer'
    };
    const closeButtonStyle = {
      float: 'right',
      textAlign:'right',
      cursor:'pointer',
      font:'bold',
      marginTop:'40px',
      marginRight:'20px'
    };
    return(
      <div className="col-md-3 animated fadeInLeft border" style={style} onClick={this.openModal.bind(this)}>
       <div className="panel panel-default">
           <div className="panel-heading">{this.props.name}</div>
           <div className="panel-body black">Course Coming Soon
               <div className="row">
                  <br/><br/>
                   <div className="panel-body"><i><small>Contact Us for more</small></i></div>
               </div>
           </div>
       </div>
       <Modal
       isOpen={this.state.showModal}
       onRequestClose={this.closeModal.bind(this)}
       contentLabel = "Contact Us"
       className='modal-dialog modal-content'
       >
         <i style={closeButtonStyle} className='glyphicon glyphicon-remove' onClick={this.closeModal.bind(this)}></i>
         <ModalBody formName={this.props.name}/>
       </Modal>

</div>
    );
  }
}
