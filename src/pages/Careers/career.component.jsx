import React from "react";
import './career.css';
import Navbar from "../../components/navbar.component";
import Team from '../../assests/team.jpg';
import Footer from "../../components/footer/footer.component";


const CareerPage = () => {
    return(
        <div className="container">
            <Navbar />
            <img src={Team} alt="team" className="team"/>
            <div className="content">
                <p>
                At our company, we believe in a hustling culture where we work hard to achieve our goals
                and make a meaningful impact. We value productivity and recognize that it takes
                dedication and effort to succeed. We are committed to creating a supportive work
                environment where everyone can thrive and achieve their full potential.
                </p>
                <p>
                    We encourage creativity, innovation, and risk-taking, and we believe that everyone's ideas
                    and contributions are important. We are dedicated to delivering results and are always
                    looking for ways to improve and exceed expectations.
                </p>
                <p>
                    We understand that a hustling culture can be challenging, but we are committed to
                    supporting the personal and professional growth of our employees. We offer opportunities
                    for learning, development, and advancement and provide the resources and support
                    necessary to achieve success.
                </p>
                <p>
                    Overall, our company culture is one of hard work, determination, and results. We are
                    passionate about what we do and are committed to making a positive impact on the world
                    through our work.
                </p>
            </div>
            <div className="apply">
                <p>Love what we do and who we are?</p>
                <p>Want to be part our team?</p>
                <p>Apply on LinkedIn</p>
            <button>Linkedin</button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}


export default CareerPage;