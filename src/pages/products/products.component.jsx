import React from "react";
import './products.css';
import Navbar from "../../components/navbar.component";
import Team from '../../assests/team.jpg';
import Footer from "../../components/footer/footer.component";


const Products = () => {
    return(
        <div className="container">
            <Navbar/>
            <img src={Team} alt="team" className="team"/>
            <h1>Our Products</h1>
            <br />
            <br />
            <div className="about">
                <p style={{textAlign:'center'}}>Lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="box">
                    Product 1
                </div>
            </div>
            <br />
            <br />
            <br /> 
            <div className="about">
                <div className="box">
                    Product 2
                </div>
                <p style={{textAlign:'center'}}>Lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>   
            <br />
            <br />
            <br /> 
            <div className="about">
                <p style={{textAlign:'center'}}>Lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="box">
                    Product 3
                </div>
            </div>
            <br />
            <br />
            <br />
            <h4 style={{fontSize:'20px'}}>Discover the future with our dual-use AI and Robotics solutions.
                Seamlessly adaptable to diverse applications, our products embody
                innovation that revolutionizes industries.
                Get in touch for product specifications.
            </h4>
            <br />
            <br />
            <br />
            <div className="about">
                <div className="box">
                    Product 4
                </div>
                <p style={{textAlign:'center'}}>Lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <br />
            <br />
            <br />        
            <div className="about">
                <p style={{textAlign:'center'}}>Lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="box">
                    Product 5
                </div>
            </div>  
            <br />
            <br />
            <br />
            <Footer/>          
        </div>
    )
}

export default Products;