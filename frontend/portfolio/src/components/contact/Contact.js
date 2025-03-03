
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
 

  const onSubmit = async (event) => {
    event.preventDefault();
   
    const formData = new FormData(event.target);

    formData.append("access_key", "1eab62cd-a754-4c4c-ac7d-09500f0495f5");

    const Obj = Object.fromEntries(formData);
    const json = JSON.stringify(Obj);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: json
    }).then((res) => res.json());

    if (response.success) {
      alert(response.message);
      
    } else {
      console.log("Error", response);
     
    }
  };

  return (
    <div id="Contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm always available to take up projects, so always feel free to
            reach out to me.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ganderamu2001@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" />
              <p> +91 9515483538</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>
        <form action="" onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name:</label>
          <input type="text" placeholder="Enter Your Name" />
          <label htmlFor="">Your Email:</label>
          <input type="email" placeholder="Enter Your Email" />
          <label htmlFor="">Write Your Message:</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
