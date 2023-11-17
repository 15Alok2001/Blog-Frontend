import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
    <div className="topLeft">
    <i className="topIcon fa-brands fa-instagram"></i>
    <i className="topIcon fa-brands fa-facebook"></i>
    </div>
    <div className="topCenter">
     <ul  className="toplist">
        <li className="topListItem">
          <Link className="link" to='/'>HOME</Link>
        </li>
        <li className="topListItem">
          <Link className="link" to ='/'>ABOUT</Link>
        </li>
        <li className="topListItem">
        <Link className="link" to ='/Write'>WRITE</Link>
        </li>
        <li className="topListItem">
        <Link className="link" to ='/'>CONTACT</Link>
        </li>
        <li className="topListItem">
          {
            user&&"LOGOUT"
          }
        </li>
     </ul>

    </div>
    <div className="topRight">
      {
        user?(<img className =" topimg" src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"alt="img1"></img>
        ):
        (
          <ul className="toplist">
            <li className="topListItem">
            <Link className="link" to ="/Login">LOGIN</Link>
            </li>
            <li className="topListTtem">
            <Link className="link" to ="/Register">REGISTER</Link>
            </li>
          </ul>
        )
      }
    <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
    
    </div>
  )
}
