import React from "react";
import './homepage.css';
import Navbar from "../../components/navbar.component";
import Footer from "../../components/footer/footer.component";


const Homepage = () => {
    return(
        <div className="container">
            <Navbar/>
            <div className="body">
                <h1>Zebu Intelligent Systems</h1>
                <h4>There's a better way to do it!</h4>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;