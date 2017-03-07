import React from 'react';
import Box from '../common/box';

export default class cAndM extends React.Component{

  constructor(props){
    super(props);
    this.subjects = [
      'Accounting Subjects',
      'Statistics',
      'Economics',
      'Business Mathematics',
      'Other Theory Subjects  '
    ];
  }

  renderBoxes(){
    const boxes = this.subjects.map((sub,key)=>
      <div key={key}>
        <Box name={sub}/>
      </div>
    );
    return boxes;
  }

  render(){
    const style = {
      marginTop:'5%'
    };
    return(
      <div>
        <div className='row'>
          <div className='col-md-offset-2 col-md-8'>
            <div className='animated fadeInDown'>
              <h1 style={style}>Commerce and Management</h1>
              <h2>
                In today's fast evolving world everyone is expected to know a bit of management & commerce irrespective of your career stream. Although doing a course on commerce and management might be everyone's choice, it is not easy to understand subjects like Accountancy, Economics & Statistics without the assistance of a learned teacher. Prodigy Academy offers tutions and customized courses on various commerce and management streams.
              </h2>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            {this.renderBoxes()}
          </div>
        </div>
      </div>
    );
  }
}
