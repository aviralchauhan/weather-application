import React, { useState } from "react";
import "./News.css";

const api = {
  key: "fd6d94c0f9624f5e913caf1cdf0d0d8b",
  base: "https://newsapi.org/v2/top-headlines",
};
function News() {
  const [news, setNews] = useState("");

  fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setNews(result);
      console.log("helo", result);
    });

  return (
    <div className="news">
      
        <h1>News</h1>
         { news && news.articles && news.articles.map((key)=>{
             console.log(key)
         })}
        
           <div className="newsContent">
            <div className="content">
            <a>
                <img
                style={{
                    height: "10rem",
                }}
                src="https://res.cloudinary.com/twenty20/private_images/t_standard-fit/v1521838685/photosp/be3df170-71fc-44df-9e78-e4517cd265a5/be3df170-71fc-44df-9e78-e4517cd265a5.jpg"
                />
                <br />
                <span>title</span>
                <br />
                <p>description</p>
            </a>
            </div>
        </div>
            
    </div>
  );
}

export default News;
