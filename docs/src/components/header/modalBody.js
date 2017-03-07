import React from 'react';
import Modal from 'react-modal';
import ModalForm from './modalForm';

export default class ModalBody extends React.Component{
  render(){
    const modalStyle = {
      h5: {
        textAlign:'center',
        fontSize:'24px'
      },
      form:{
        float:'left'
      }
    };
    const formName = typeof(this.props.formName)!="undefined"?this.props.formName:'Leave Us A Message';
    return(
      <div>
        <div className='modal-header'>
          <h1 style={modalStyle.h1}>{formName}:</h1>
        </div>
        <div className="row">
        <br/>
          <div  className='col-md-12'>
            <ModalForm style={modalStyle.form}/>
          </div>
        </div>
      </div>
    );
  }
}
