import React from 'react';
import Name from './name';
import Carousal from './carousal';

export default class body extends React.Component{
  render(){
    return(
      <div className="row hero-content">
        <Name />
      </div>
    );
  }
}
