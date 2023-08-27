import React from "react";
import './aboutus.css';
import Navbar from "../../components/navbar.component";
import Team from '../../assests/team.jpg';
import about from '../../assests/about.jpg';
import Footer from "../../components/footer/footer.component";


const AboutUs = () => {
    return(
        <div className="container">
            <Navbar/>
            <img src={Team} alt="team" className="team"/>
            <h1>Who we are</h1>
            <div className="about">
                <div className="about-text">
                    <p>
                        Our team comprises researchers and engineers
                        from top institutions from India and abroad, we
                        are all like-minded people that have a peculiar
                        interest in research and innovation especially in
                        the domains of Artificial Intelligence, mobile
                        robotics and UAVs. We are a team of 20+ people
                        and we are a perfect blend of researchers and
                        Engineers, cumulatively, excluding academic
                        partners, we have authored 20+ publications in
                        leading journals/conferences around the world.
                    </p>
                </div>
                <img src={about} alt="" className="about-image" />
            </div>

            <p style={{fontSize:'25px'}}>Led by Santosh, a visionary founder with a PhD in Intelligent Systems and Robotics, master in
                control systems and postdoctoral experience from a prominent US institutions. Enriched by
                roles at Tesla and a successful IoT startup exit. Santosh bring onto the table his extensive
                research and entrepreneurial acumen.
            </p><br /><br />
            <h1>What we do</h1>
            <div className="about">
            <img src={about} alt="" className="about-image" />
                <div className="about-text">
                    <p>
                        Zebu Intelligent Systems specializes in pioneering
                        AI and Robotics solutions for Industry 4.0
                        challenges. With a focus on defense and
                        transportation automation, we leverage cuttingedge technology to develop advanced products
                        and provide expert services that redefine
                        possibilities and enhance operational efficiency.
                    </p>
                </div>
            </div>
            <h1>Our mission and vision</h1>
            <div className="about">
                <div className="about-text">
                    <p>
                    Empowering the Future through AI and Robotics Excellence.<br />
                    Our mission is to drive the advancement of
                    Industry 4.0 solutions by harnessing the power
                    of AI and Robotics. We are dedicated to
                    addressing complex challenges through our
                    cutting-edge services and innovative products.
                    By pushing the boundaries of technology, we
                    aim to redefine possibilities, enhance
                    operational efficiency, and contribute to a safer
                    and more automated world.
                    </p>
                </div>
                <img src={about} alt="" className="about-image" />
            </div>
            <div className="ecosystem-partners">
                <h1>Ecosystem Partners</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a nisi quos praesentium totam alias atque recusandae incidunt commodi explicabo voluptates nostrum, iusto sed numquam? Eaque excepturi aperiam delectus praesentium?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a nisi quos praesentium totam alias atque recusandae incidunt commodi explicabo voluptates nostrum, iusto sed numquam? Eaque excepturi aperiam delectus praesentium?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a nisi quos praesentium totam alias atque recusandae incidunt commodi explicabo voluptates nostrum, iusto sed numquam? Eaque excepturi aperiam delectus praesentium?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a nisi quos praesentium totam alias atque recusandae incidunt commodi explicabo voluptates nostrum, iusto sed numquam? Eaque excepturi aperiam delectus praesentium?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a nisi quos praesentium totam alias atque recusandae incidunt commodi explicabo voluptates nostrum, iusto sed numquam? Eaque excepturi aperiam delectus praesentium?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a nisi quos praesentium totam alias atque recusandae incidunt commodi explicabo voluptates nostrum, iusto sed numquam? Eaque excepturi aperiam delectus praesentium?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a nisi quos praesentium totam alias atque recusandae incidunt commodi explicabo voluptates nostrum, iusto sed numquam? Eaque excepturi aperiam delectus praesentium?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a nisi quos praesentium totam alias atque recusandae incidunt commodi explicabo voluptates nostrum, iusto sed numquam? Eaque excepturi aperiam delectus praesentium?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a nisi quos praesentium totam alias atque recusandae incidunt commodi explicabo voluptates nostrum, iusto sed numquam? Eaque excepturi aperiam delectus praesentium?</p>
            </div>
            <Footer />

        </div>
    )
}

export default AboutUs;