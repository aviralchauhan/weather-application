import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function DailyHourly({ weather }) {
  const [temp, setTemp] = useState([]);
  const [hrs, setHrs] = useState([]);

  useEffect(() => {
    var arrTemp = [];
    var arrHrs = [];
    weather &&
      weather.list &&
      weather.list.map((value, key) => {
        if (key % 8 != 0 && key < 8) {
          let a = value.dt * 1000;
          var dateObject = new Date(a);

          arrTemp.push(value.main.temp);
          arrHrs.push(dateObject.getHours());
        }
      });
    setHrs(arrHrs);
    setTemp(arrTemp);
  }, [weather]);

  console.log(temp, hrs);

  return (
    <div
      className="hourly"
      style={{
        height: "200px",
        background:"linear-gradient(to top ,#bdc3c7,#bdc3c7, transparent)",
        opacity:0.6,
        width: "400px",
        float: "right",
        marginLeft: "230px",
        color: "white",
        
        borderRadius:"16px"
      }}
    >
      {hrs && temp && (
        <Line
          data={{
            labels: hrs,
            datasets: [
              {
                label: "hourly forecast",
                data: temp,
                borderWidth: 2,
              },
            ],
          }}
          options= {{
            borderColor:"black",
            plugins:{
                title: {
                    display: true,
                    color:'white',
                    text: 'Custom Chart Subtitle'
                }
            },
            animations:{
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            }
            
        }}
        >
          height={200}
          width={300}
        </Line>
      )}
    </div>
  );
}

export default DailyHourly;
