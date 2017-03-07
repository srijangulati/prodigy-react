import React from 'react';

export default class footer extends React.Component{
  render(){
    return(
    	<div>
    	<div className="social">
                <ul className="social_icons text-center">
                  <li className="facebook"><a href="#">facebook</a></li>
                  <li className="twitter"><a href="#">twitter</a></li>
                 <li className="insta"><a href="#">insta</a></li>
                 <li className="youtube"><a href="#">youtube</a></li>
                <li className="pin"><a href="#">pintrest</a></li>
             </ul>
         </div>
    	</div>
    );
  }
}
