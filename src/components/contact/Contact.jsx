import { useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss"

export default function Contact() {

  const [m, setM] = useState(false);
  const [from_email, setFrom_email]= useState("");
  const [from_name, setFrom_name]= useState("");
  const [message, setMessage]= useState("");


  const handleSubmit= (e)=> {
    e.preventDefault();

    console.log(from_email + message, from_name);

    const emailContent={
      from_email: from_email,
      message: message,
      from_name: from_name
    }

    emailjs.send('service_tie84mm', 'template_j76movi', emailContent, 'aqFmwoKuP5pqWQYVx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setM(true);
  }
  return (
    <div className='contact' id="contact">
        <div className="left">
          <img src="asset/shake.svg" alt="" />
        </div>
        <div className="right">
          <h1>Contact.</h1>
          <form>
            <input type="text" placeholder="Name" name="name" onChange={(event) => {setFrom_name(event.target.value)}} required/>
            <input type="email" placeholder="Email" name="email" onChange={(event) => {setFrom_email(event.target.value)}} required/>
            <textarea placeholder="Write your messege here" name="message" onChange={(event) => {setMessage(event.target.value)}} required></textarea>
            <button type="submit" onClick={handleSubmit} >Submit</button>
            {m && <span>Thanks for your messege, I will reply soon.</span>}
          </form>
        </div>
      </div>
  )
}
