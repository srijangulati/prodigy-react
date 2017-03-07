import React from 'react';
var $ = require('jquery');
import { Link, Router, hashHistory } from 'react-router';
export default class Navbar extends React.Component{

  componentDidMount(){
          var b = $("#cbp-hrmenu > ul > li"),
          g = b.children(".hover-type-pointer"),
          c = $("body"),
          d = -1;

          g.on("click", a);

      function a(j) {
          if (d !== -1) {
              b.eq(d).removeClass("cbp-hropen")
          }
          var i = $(j.currentTarget).parent("li"),
              h = i.index();
          if (d === h) {
              i.removeClass("cbp-hropen");
              d = -1
          } else {
              i.addClass("cbp-hropen");
              d = h;
              c.off("click").on("click", e)
          }
          return false
      }

      function e(h) {
          b.eq(d).removeClass("cbp-hropen");
          d = -1
      }
  }

  render(){
    return(
      <div className="main">
    <nav id="cbp-hrmenu" className="cbp-hrmenu">
        <ul>
            <li>
                <a href='#/home'>Home</a>
            </li>
            <li>
                <a className='hover-type-pointer'>Tution | Coaching</a>
                <div className="cbp-hrsub">
                    <div className="cbp-hrsub-inner">
                        <div>
                            <Link to={'/candm'}><a href = ''><h4>Commerce &amp; Management Subjects</h4></a></Link>
{/*                                               <ul>
                                <li><a href="#">Learn Thai</a></li>
                                <li><a href="#">Math Genius</a></li>
                                <li><a href="#">Chemokid</a></li>
                            </ul>
*/}
                        </div>
                        <div>
                            <Link to={'/es'}><a href =''><h4>Engineering Subjects</h4></a></Link>

                        </div>
                    </div>
                    {/* /cbp-hrsub-inner */}
                </div>
                {/* /cbp-hrsub */}
            </li>
            <li>
                <a className='hover-type-pointer'>Distance | Correspondence Programs</a>
                <div className="cbp-hrsub">
                    <div className="cbp-hrsub-inner">
                        <div>
                            <a href='#/dcp'><h4>Undergraduate Programs</h4></a>

                        </div>
                        <div>
                            <a href='#/pgp'><h4>Post-graduate Programs</h4></a>

                        </div>
                    </div>
                    {/* /cbp-hrsub-inner */}
                </div>
                {/* /cbp-hrsub */}
            </li>
            <li>
                <a href="/#branches">Our Branches</a>
                {/* /cbp-hrsub */}
            </li>
            <li>
                <a href="/#gallery">Gallery</a>
                {/* /cbp-hrsub */}
            </li>
        </ul>
    </nav>
</div>
    );
  }
}
