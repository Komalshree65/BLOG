import "./styles.css"
import { Link } from "react-router-dom";

export default function TopBar() {
  const currentUser=false;
  return (

    <div className="top">
      <div className="topLeft">
      <i className=" topIcon fa-brands fa-facebook"></i> 
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      </div>
      
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link" >HOME</Link></li>
          <li className="topListItem">
          <Link to="/" className="link" >ABOUT</Link></li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
          <Link to="/" className="link" >WRITE</Link></li>
          <li className="topListItem">
            {currentUser && "LOG OUT"}</li>
          </ul></div>
      <div className="topRight">
        {
          currentUser?
        (
        <img className="topImg" src="https://wallpaperaccess.com/full/2553091.jpg" alt="" />):
         (
         <ul className="topList">
          <li className="topListItem">
          <Link to="/Login" className="link" >Login</Link>/
          <Link to="/Register" className="link" >Register</Link>
          </li>
          </ul>
        )}
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
      
    </div>
  )
}
