import React, {useState, useEffect} from "react";
import styles from "./Header.css";
import NavBar from './NavBar'
function Header() {
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
    
  }, []);
 //console.log("time",value )
  return (
    <div className="header">
    <img
    className="header_logo"
    src="https://image.flaticon.com/icons/png/512/648/648198.png"
    />

        <span
          style={{
            fontSize: "30px",
            paddingLeft: "25px",
            fontWeight: "300",
            verticalAlign: "top",
          }}
        >
          Weather
        </span>
        <span
          style={{
            fontSize: "30px",
            paddingLeft: "25px",
            fontWeight: "600",
            verticalAlign: "top",
          }}
        >
          Forecast
          <span value={value}></span>
        </span>
        
        <NavBar />
        </div>
  );
}

export default Header;
