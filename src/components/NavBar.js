import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul className="left hide-on-med-and-down">
                    <li><NavLink to="/">Home Page</NavLink></li>
                    <li><NavLink to="/new-post">Create Post</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/safety">Safety and Scams</NavLink></li>
                    {/* <li className="active"><a href="collapsible.html">JavaScript</a></li> */}
                </ul>
            </div>
        </nav>
    );
};





export default NavBar;



// export class NavBar extends Component {
//     render() {
//       return (
//         <nav className="indigo darken-3">
//           <div className="container">
//             <NavLink to="/" className="brand-logo">Pet Shop</NavLink>
//             <ul className="right">
//               <li><NavLink to="/pets/new">Create Pet</NavLink></li>
//               <li><NavLink to="/pets">Pet List</NavLink></li>
//             </ul>
//           </div>
//         </nav>
//       )
//     }
//   }
  