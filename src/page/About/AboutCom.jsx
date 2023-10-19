import React from 'react';
import Navbar from "../../component/Navbar.jsx";
import "./about.css"

const About = () => {
    return (
        <div>
            <Navbar/>

            <div className="container">
                <div className="about__content mt-5">
                    <div className="about__left">
                        <img className="left__img" src="https://dora.uz/assets/images/about-us/01.jpg" alt="about"/>
                    </div>

                    <div className="about__right">
                        <span className="right__top">Let's Introduce</span>
                        <div className="right__subtitle">
                            <h1 className="right__title">Who We're & Mission</h1>
                            <p className="right__text">Cicero famously orated against his political opponent Lucius
                                Sergius Catilina. Occasionally the first Oration against Catiline is taken for type
                                specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor
                                iste tuus nos eludet.
                                <br/>
                                In a professional context it often happens that private or corporate clients corder
                                a publication to be made and presented with the actual content still not being
                                ready. Think of a news blog that's filled with content hourly on the day of going
                                live. However, reviewers tend to be distracted by comprehensible content.
                            </p>
                        </div>

                        <div className="right__bottom">
                            <div className="bottom__item">
                                <img className="img_about" src="" alt=""/>
                                <h1 className="bottom__title">First</h1>
                            </div>
                            <div className="bottom__item">
                                <img className="img_about" src="" alt=""/>
                                <h1 className="bottom__title">Second</h1>
                            </div>
                            <div className="bottom__item">
                                <img className="img_about" src="" alt=""/>
                                <h1 className="bottom__title">Third</h1>
                            </div>
                            <div className="bottom__item">
                                <img className="img_about" src="" alt=""/>
                                <h1 className="bottom__title">Fourth</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;