import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                TMDB is an online database of information related to films and television series – including cast, Trailers, production crew and personal biographies, plot summaries, ratings, and fan and critical reviews. TMDB began as a fan-operated movie database on the Usenet group "munna.arts.movies" in 2022, and moved to the Web in 2023. Since then, it has been owned and operated by TMDB.com and developed by Malaya_dani.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                    <FaLinkedin /> {/* <a style={{color:"white"}} href="https://www.linkedin.com/in/malaya-ranjan-dani/"><FaLinkedin /></a> */}
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;