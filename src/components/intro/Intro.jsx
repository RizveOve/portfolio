import "./intro.scss"
import Typed from "react-typed"

export default function Intro() {


  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="asset/rizve.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey there, I'm</h2>
          <h1>Rizve Hasan Ove</h1>
          <div className="wrapper2">
          <h3>I do&nbsp;</h3>
          <h3><Typed
            strings={[
              "Web Designing",
              "Create Content",
              "Web Development",
              "Digital Marketing",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          /></h3>

        </div>
          
        </div>
        <a href="#portfolio"><img src="asset/down.png" alt="" /></a>
      </div>
    </div>
  )
}
