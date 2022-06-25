import "./testimonials.scss"
import { testimonialsData } from "../../data"

export default function Testimonials() {
  return (
    <div className="testimolials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {testimonialsData.map((d) => (
           <div className={d.featured ? "card featured" : "card"}>
           <div className="top">
             <img src="asset/right-arrow.png" alt="" className="left" />
             <img src= {d.img} alt="" className="user" />
             <img src= {d.icon} alt="" className="right" />
           </div>
           <div className="mid">
             <p>{d.comment}</p>
           </div>
           <div className="bottom">
             <h4>{d.name}</h4>
             <h5>{d.title}</h5>
           </div>
         </div>
        ))}
       
      </div>
    </div>
  )
}
