import "./work.scss"
import { slideImage } from "../../data"
import { useState } from "react"

export default function Work() {

  const[slide, setSlide] = useState(0)
  const handleClick = way => {
    way === "left" ? setSlide(slide>0 ? slide-1 : 2) : setSlide(slide<2 ? slide+ 1: 0 )
  }
  

  return (
    <div className="work" id="work">
      <div className="slider" style={{transform: `translateX(-${slide *100}vw)`}}>
        
      {slideImage.map((d) => (

        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.description}</p>
                <a href={d.link}><h4>visit now</h4></a>
              </div>
            </div>
            <div className="right">
                <img src={d.img} alt="" />
            </div>
          </div>
        </div>
      ))}
      </div>
      <img src="asset/arrow.png" alt="" className="arrow left" onClick={() => handleClick("left")}/>
      <img src="asset/arrow.png" alt="" className="arrow right" onClick={() => handleClick()}/>
    </div>
  )
}
