import Login from "../login/Login";
import "./home2.css";

export default function Header() {
  return (
    <>
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> Exploring Journeys </span>
        <span className="headerTitleLg">ALLURE</span>
      </div>
      <img className="headerImg" src="https://wallup.net/wp-content/uploads/2018/03/23/561146-colorful-nature-sunlight-plants-flowers.jpg" alt="" />
    </div>
    <Login/></>
  );
}
