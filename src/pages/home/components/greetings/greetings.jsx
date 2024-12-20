import { useEffect } from 'react';
import './greetings.sass';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
export default function Greetings() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="Greetings">
            <h1 data-aos="fade-left"><span>I'm</span> Nikita</h1>
            <p data-aos="fade-right">A full-stack web developer helping startups turn their visions into digital reality. <br /> I specialize in designing and building modern, responsive websites <br /> without using React, handling both front-end and back-end development <br /> to deliver comprehensive and effective solutions.</p>
            <Link to="./about" data-aos="fade-up">More about me</Link>
            <img src="/other/Avatar.png" alt="" data-aos="fade-down" />
        </div>
    );
}
