import React from "react";
import './contact.css';
import Navbar from "../../components/navbar.component";
import Footer from "../../components/footer/footer.component";

const Contact = () => {
    return(
        <div className="container">
            <Navbar/>
            <div className="content">
                <p className="main">Drop us a line, we would love to hear from you</p>
                <p className="sub-main">Reach out to us for unparalleled expertise in AI-driven solutions.
                                    Experience innovation that transforms challenges into opportunities,
                                    tailored to your specific needs.
                </p>
            </div>
            <div className="form">
                <input type="text" name="Name" id="" placeholder="Name"/><br /><br />
                <input type="email" name="Email" id="" placeholder="Email"/><br /><br />
                <input type="text" name="Message" id="" placeholder="Message"/><br /><br />
                <button>Submit</button>
            </div><br />
            <br />
            <br />
            <Footer/>
        </div>
    )
}

export default Contact;