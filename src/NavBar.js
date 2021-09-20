import React, { useState } from "react";
import News from "./News";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className={showNav ? "sidenav active" : "sidenav"}>
        <img
          className="logo"
          src="https://image.flaticon.com/icons/png/512/648/648198.png"
        />
        <GiHamburgerMenu
          onClick={() => setShowNav(!showNav)}
          style={{
            fontSize: "35px",
            right: "10px",
            position: "absolute",
            marginTop: "15px",
            cursor:"pointer"
          }}
        />
        <div className={showNav ? "notShowIcon" : "showIcon"}>
        
          <li className="hide_showIcon">
            <img
              style={{ height: "25px" }}
              src="https://image.flaticon.com/icons/png/512/1946/1946433.png"
            />
          </li>
          <li className="hide_showIcon">
            <img 
              style={{ height: "25px" }}
              src="https://cdn-icons-png.flaticon.com/512/1042/1042731.png"
            />
          </li>
          <li className="hide_showIcon">
            <img
              style={{ height: "25px" }}
              src="https://image.flaticon.com/icons/png/512/3062/3062634.png"
            />
        </li>
        </div>
        <ul>
          <li className="sidebar_element">
          <img
              style={{ height: "25px" }}
              src="https://image.flaticon.com/icons/png/512/1946/1946433.png"
            />

            <Link to="/">Home</Link>
          </li>
          <li className="sidebar_element">
          <img
          style={{ height: "25px" }}
          src="https://img-premium.flaticon.com/png/512/3055/premium/3055871.png?token=exp=1630231293~hmac=4f2a87f26a125266cc76850abcd72f4e"
        />
            <Link to="News">News</Link>
          </li>
          <li className="sidebar_element">
          <img
          style={{ height: "25px" }}
          src="https://image.flaticon.com/icons/png/512/3062/3062634.png"
        />
            <a>Contact</a>
          </li>

          <ul className="contact_link">
            <li>
              <a href="https://www.gmail.com">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" />
              </a>
            </li>
          </ul>
          <ul className="contact_link">
            <li>
              <a href="https://www.facebook.com">
                <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" />
              </a>
            </li>
            <li>
            <a href="tel:123456789">
                <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" />
              </a>
            </li>
          </ul>
        </ul>
        <div>
          <span style={{ height: "0px", position: "absolute", bottom: "75px" }}>
            Made with ❤️ <br />
            in React{" "}
            <img
              style={{ height: "20px" }}
              src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
            />
          </span>
          <img
            style={{
              height: "25px",
              position: "absolute",
              bottom: "50px",
              right: "15px",
            }}
            src="https://img-premium.flaticon.com/png/512/556/premium/556690.png?token=exp=1630230742~hmac=1b8e6cc7bac8498585bf7755771765b0"
          />
        </div>
      </div>
    </>
  );
}

export default NavBar;
