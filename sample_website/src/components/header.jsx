import React, { Component } from 'react';
import './header.css';


class Header extends Component {
    
    render() { 

        return (
        <div>
            <div className="menubar">
                <div className="menuHeading">
                    <h1>Mind Scrapper</h1>
                </div>
                <div className="menuFirstHalf">
                    <a href="#">HOME</a>
                    <a href="#services">SERVICES</a>
                    <a href="#about">ABOUT</a>
                    <a href="#team">TEAM</a>
                </div>
                <div className="menuSecondHalf">
                    <a href="#portfolio">PORTFOLIO</a>
                    <a href="#content">CONTENT CHANNELS</a>
                    <a href="https://www.blogger.com/" target="_blank">BLOG</a>
                    <a href="#contact">CONTACT</a>
                </div>
                <div className="headerTextA">
                    <p>IT'S</p>
                    <h1>NOT THAT</h1>
                </div>
                <div className="headerTextB">
                    <h1>SIMPLE</h1>
                </div>
            </div>
            <div className="services" id="services">
                <div className="servicesHeading">
                    <h1>SERVICES</h1>
                </div>
                <div className="servicesPara">
                    <p>Here at MindScrapper we believe in the illustration
                        of the creativity and to let it grow throughout the thought
                        process and that illustration can be seen through our following services</p>
                </div>
                 <div className="servicesA">
                    <div className="artWork">
                        <h1>ART WORK</h1>
                        <p>We at MindScrapper design and create brilliance 
                            in delivering a uniquely stylish piece of art.</p>
                    </div>
                    <div className="animation">
                        <h1>ANIMATION</h1>
                        <p>Imagination Plotted in sequence of frames expressing the vision behind it.</p>
                    </div>
                    <div className="gameDevelopment">
                        <h1>GAME DEVELOPMENT</h1>
                        <p>Providing a unique sense of Game style to entertain users in form of our Game products.</p>
                    </div>
                </div>   
                <div className="servicesB">
                    <div className="digitalMarketing">
                        <h1>DIGITAL MARKETING</h1>
                        <p>Providing Marketing Solutions for Business.</p>
                    </div>
                    <div className="arDevelopment">
                        <h1>AR/VR DEVELOPMENT</h1>
                        <p>Exploring the world of mixed reality.</p>
                    </div>
                </div>
            </div>
            <div className="about" id="about">
                <div className="aboutHeading">
                    <h1>ABOUT US</h1>
                </div>
                <div className="aboutSubheading">
                    <h2>Features And Specifications</h2>
                </div>
                <div className="aboutPara">
                    <p>We focus ourselves towards state of the art 
                        technology and modern tools in building an 
                        efficient and reliable end results.
                        We Believe in less but genuine.</p>
                </div>
            </div>
            <div className="team" id="team">
                <div className="teamHeading">
                    <h1>CORE TEAM</h1>
                </div>
                <div className="teamMember">
                    <div className="huzaifa">
                        <h1>HUZAIFA AHMED</h1>
                        <p>CEO</p>
                    </div>
                    <div className="umer">
                        <h1>UMER ASGHAR</h1>
                        <p>Business Director</p>
                    </div>
                    <div className="tooba">
                        <h1>TOOBA ISRAR</h1>
                        <p>SEO Executive</p>
                    </div>
                </div>
            </div>
            <div className="portfolio" id="portfolio">
                <div className="portfolioHeading">
                    <h1>OUR GALLERY</h1>
                </div>
                <div className="portfolioButton">
                    <a href="#one">ART WORK</a>
                    <a href="#twelve">GAME DEVELOPMENT</a>
                </div>
                <div className="portfolioImages">
                    <div className="one" id="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                    <div className="four"></div>
                    <div className="five"></div>
                    <div className="six"></div>
                    <div className="seven"></div>
                    <div className="eight"></div>
                    <div className="nine"></div>
                    <div className="ten"></div>
                    <div className="eleven"></div>
                    <div className="twelve" id="twelve"></div>
                    <div className="thirteen"></div>
                    <div className="fourteen"></div>
                    <div className="fifteen"></div>
                    <div className="sixteen"></div>
                    <div className="seventeen"></div>
                    <div className="eighteen"></div>
                </div>
            </div>
            <div className="content" id="content">
                <div className="contentHeading">
                    <h1>CONTENT CHANNELS</h1>
                </div>
                <div className="contentLink">
                    <a href="https://www.facebook.com/" target="_blank">FaceBook</a>
                    <a href="https://store.steampowered.com/" target="_blank">Steam</a>
                    <a href="https://unity.com/" target="_blank">Unity</a>
                    <a href="https://www.youtube.com/" target="_blank">YouTube</a>
                </div>
            </div>
            <div className="contact" id="contact">
                <div className="contactHeading">
                    <h1>CONNECT WITH US</h1>
                </div>
                <div className="contactForm">
                    <form>
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="Email"></input>
                        <input type="text" placeholder="Phone"></input>
                        <textarea type="text" placeholder="Message"></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="footerHeading">
                    <h1>MIND SCRAPPER</h1>
                </div>
                <div className="footerPara">
                    <p>Address: Subhan Shopping Mall Johar Town H3</p>
                    <p>Block Lahore</p>
                    <br></br>
                    <p>Email: studio@mindscrapper.com</p>
                    <p>Phone: +92 324 4370749</p>
                </div>
            </div>
            <div className="copyright">
            <div className="copyrightPara">
                    <p>Copyright &copy; 2018 MindScrapper. All rights reserved</p>
                </div>
            </div>
        </div>
        
        );
    }
}
 
export default Header;