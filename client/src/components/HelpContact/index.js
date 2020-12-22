import React from 'react'
import { Link } from "react-router-dom";
import email from '../../assets/img/emailalp.png';
import tel from '../../assets/img/appler.png';
import faq from '../../assets/img/faq.png';

const index = () => {
    return (
        <section id="helpContact">
            <h2>Un service client toujours à votre écoute</h2>

            <div className="helpContactDetail">

                <div className="icon">
                <Link to="/contact">
                <img src={email} fluid="true" />
                    <p className="gras">agsdcombat@gmail.com</p>
                </Link>
                </div>

                <div className="icon">
                    <Link to="#">
                    <img src={tel} fluid="true" />
                    <p className="gras">+33615377151</p>
                    </Link>
                </div>

                <div className="icon">
                    <Link to="#">
                    <img src={faq} fluid="true" />
                    <p className="gras">(incl.FAQ)</p>
                    </Link>
                </div>
               
            </div>
        </section>
    )
}

export default index;
