import React from 'react';
import { NavLink } from 'react-router-dom';


// const NavBar = () => {
//     return (
//         <nav>
//             <div className="nav-wrapper">
//                 <ul className="left hide-on-med-and-down">
//                     <li><NavLink to="/">Home Page</NavLink></li>
//                     <li><NavLink to="/new-post">Create Post</NavLink></li>
//                     <li><NavLink to="/about">About</NavLink></li>
//                     <li><NavLink to="/safety">Safety and Scams</NavLink></li>
//                     {/* <li className="active"><a href="collapsible.html">JavaScript</a></li> */}
//                 </ul>
//             </div>
//         </nav>
//     );
// };

const NavBar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                             <li class="nav-item">
                                <a class="nav-link" href="/new-post">Create Post</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/safety">Safety and Scams</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>

    </nav>
    )
}




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
  