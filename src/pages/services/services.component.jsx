import React from "react";
import './services.css';
import Navbar from "../../components/navbar.component";
import Serve from "../../components/serve/serve.component";
import Footer from "../../components/footer/footer.component";



const Services = () => {
    return(
        <div className="container">
            <Navbar/>
            <div className="content">
                <p className="main">Why work with us ?</p>
                <p className="sub-main">Empowering Industries through Cutting-Edge AI Innovation. We deliver
                    transformative solutions that drive efficiency, growth, and success
                    across diverse sectors.
                </p>
                <div className="services">
                    <div className="row">
                        <div className="service1">
                            <h2>Expertise and Innovation</h2>
                            <p>Benefit from our founder's visionary leadership,
                                enriched by a PhD in Intelligent Systems and
                                Robotics, combined with practical experience at
                                Tesla. Our team pioneers innovation that merge
                                academic excellence with real-world insights.
                            </p>
                        </div>
                        <div className="service2">
                            <h2>Industry 4.0 Focus</h2>
                            <p>Stay ahead in the Industry 4.0 landscape with our
                                specialized AI and Robotics solutions. Tailored for
                                defense and transportation sectors, our offerings
                                empower clients to embrace automation and
                                intelligence for sustained success.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="service3">
                            <h2>Proven Track Record</h2>
                            <p>Leverage our founder's successful IoT startup exit
                                and entrepreneurial acumen. We bring resultsdriven dedication to every project, translating
                                ideas into impactful solutions that drive growth
                                and efficiency.
                            </p>
                        </div>
                        <div className="service4">
                            <h2>Holistic Approach</h2>
                            <p>Experience seamless end-to-end solutions. From
                                research and development to implementation, we
                                ensure a comprehensive approach that integrates
                                smoothly, delivering maximum value across your
                                operations.
                            </p>
                        </div>
                    </div>
                </div><br />
                <br />
                <h1>Our Services</h1>
                <br />
                <br />
                <Serve />
                <br />
                <br />
                <h1>Some of our Customers</h1>
                <br />
                <br />
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque beatae placeat vitae laudantium quisquam maiores enim molestiae quos nostrum praesentium quis debitis nihil rerum dolor nisi sint, consequatur magni. Reiciendis?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, commodi laborum eveniet recusandae eligendi dignissimos a soluta omnis accusamus magnam minima nihil explicabo dolores placeat aspernatur, repudiandae, earum aliquid incidunt?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nam! Suscipit, aperiam quam soluta fugiat culpa saepe error labore recusandae laudantium voluptatibus quos. Facilis aut tempore, nesciunt distinctio quis aliquam.</p>
            </div>
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}


export default Services;