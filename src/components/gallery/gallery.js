import React from 'react';
var $ = require('jquery');
export default class gallery extends React.Component{

  constructor(props){
      super(props);
      this.interval;
      this.images=[
        '01',
        '02'
      ];
  }

  componentWillMount(){
    this.interval = setInterval(function(){
		$("#carousel ul").animate({marginLeft:-750},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		});
	 },3000);
   this.imageInterval =  setInterval(function(){
      const image = this.images[1];
      const newImages = ['0'+((parseInt(image)+1)%8), '0'+((parseInt(image)+2)%8)];
      this.images = newImages;
      this.forceUpdate();
    }.bind(this),7000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
    clearInterval(this.imageInterval);
  }

  renderImages(){
    const style={
      width:'750px',
      height:'500px'
    }
    const images = this.images.map((image,key)=>
      <li key={key}>
        <img style={style} src={'/img/large/'+image+'.jpg'} />
      </li>
    );
    return images;
  }

  render(){
    return(
      <div className='row'>
        <div className='col-md-offset-3 col-md-6'>
          <div id='carousel'>
            <ul>
              {this.renderImages()}
            </ul>
          </div>
        </div>
      </div>

    );
  }
}
