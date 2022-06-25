import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { featuredPortfolio, webPortfolio, mobilePortfolio, gamePortfolio, reactPortfolio  } from "../../data"

export default function Portfolio() {

  const [selected, setSelected]= useState("featured")
  const [data, setData]= useState([])

  const list= [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "game",
      title: "Games"
    },
    {
      id: "react",
      title: "React App"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
  ];

  useEffect(() => {
    switch(selected){
      case "featured": setData(featuredPortfolio);
      break;
      case "web": setData(webPortfolio);
      break;
      case "game": setData(gamePortfolio);
      break;
      case "react": setData(reactPortfolio);
      break;
      case "mobile": setData(mobilePortfolio);
      break;
      default: setData(featuredPortfolio);
      
    }
  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1> Portfolio</h1>
      <ul>
        {
          list.map((item) =>(
             <PortfolioList
             title= {item.title}
             id= {item.id}
             active= {selected=== item.id}
             setSelected= {setSelected} 
             key={item.id}/>
          ))
        }
      </ul>
      <div className="container">
        {data.map((d) => (
           <a href={d.link}><div className="item">
           <img src={d.img} alt="" />
           <h3>{d.title}</h3>
         </div></a>
        ))}
     
       
      </div>
    </div>
  )
}
