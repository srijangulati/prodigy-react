import React from 'react';

export default class ModalForm extends React.Component{

  formSubmit(event){
    event.preventDefault();
    console.log(this.refs.email.value);
    console.log(this.refs.number.value);
    console.log(this.refs.message.value);
  }

  render(){
    const formStyle={
      fontSize18:{
        fontSize:'18px'
      }
    };

    return(
  <div>
  <form className="form-horizontal">
  <div className="form-group">
    <label className="col-md-4 control-label" for="textinput" style={formStyle.fontSize18}>Email*</label>
    <div className="col-md-6">
    <input id="textinput" name="textinput" type="text" placeholder="" className="form-control input-md" ref='email'/>
    </div>
  </div>

  <div className="form-group">
    <label style={formStyle.fontSize18} className="col-md-4 control-label" for="number">Contact Number</label>
    <div className="col-md-6">
    <input id="number" name="number" type="text" placeholder="" className="form-control input-md" ref='number'/>

    </div>
  </div>

  <div className="form-group">
    <label style={formStyle.fontSize18} className="col-md-4 control-label" for="message">Message</label>
    <div className="col-md-6">
      <textarea className="form-control" row="3" id="message" name="message" ref='message'></textarea>
    </div>
  </div>

  <div className="form-group">
    <label className="col-md-4 control-label" for="singlebutton"></label>
    <div className="col-md-6">
      <button id="singlebutton" name="singlebutton" className="btn btn-primary btn-block" onClick={this.formSubmit.bind(this)}>Send</button>
    </div>
  </div>
  <br/>
  </form>
  </div>
    );
  }
}
