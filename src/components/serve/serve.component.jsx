import React from 'react';
import './serve.css';
import Next from '../../assests/next-removebg-preview.png';

const servicesData = [
    { title: 'Artificial Intelligence', content: 'Lorem ipsum dolor sit amet.' },
    { title: 'Computer Vision', content: 'Consectetur adipiscing elit.' },
    { title: 'Natural Language Processing', content: 'Praesent id justo ac libero.' },
    { title: 'Robotics Hardware', content: 'Nulla facilisi.' },
    { title: 'Robotics Software', content: 'Vivamus sollicitudin massa ut.' },
    { title: 'Embedded Systems', content: 'Fusce dapibus justo vitae.' },
    { title: 'Internet of Things', content: 'Cras non velit a leo.' },
    { title: 'PCB Design', content: 'Nam eget massa quis.' },
    { title: 'Software Development', content: 'Ut quis enim tincidunt.' }
];

const Serve = () => {
    return (
        <div className="services-container">
            {servicesData.map((service, index) => (
                <div className="service" key={index}>
                    <h4>{service.title}</h4>
                    <p>{service.content}</p>
                    <div className="icon">
                        <img src={Next} alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Serve;
