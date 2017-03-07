import React from 'react';
import Box from '../common/box';

export default class cAndM extends React.Component{
  constructor(props){
  super(props);
  this.subjects = [
    'Engineering Mathematics',
    'Physics',
    'Chemistry',
    'Electrical Engineering Subjects',
    'Computer Science Engineering Subjects',
    'Mechanical Engineering Subjects',
    'Civil Engineering Subjects'
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
              <h1 style={style}>Engineering Subjects</h1>
              <h2>
                They say 'Scientists Dream About Doing Great Things and Engineers Do Them!'. As much as the role of engineers is becoming more and more crucial in this fast emerging world, studying Engineering can be quite challenging as the subjects might seem complex. At Prodigy Academy, we provide the required assistance to all engineering students across various streams. Our experienced set of trainers will make the subjects as simple as possible for you.
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
