import { useEffect } from 'react';
import GetInTouch from '../../../components/getInTouch/GetInTouch'
import './knowme.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function KnowMe() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="KnowMe">
            <h2>Get to know me</h2>
            <div className="knowMeContainer">
                <Link to='/portfolio/about/' data-aos="fade-right">
                    <h3>About me</h3>
                    <p>Who I am and what I do</p>
                    <img src="./portfolio/Memoji.png" alt="" />
                </Link>

                <Link to='/portfolio/stack/' data-aos="fade-left">
                    <h3>Tech Stack</h3>
                    <p>The dev tools, apps, devices, and games I use and play.</p>
                    <img src="./portfolio/Apps.png" alt="" />
                </Link>
            </div>
            <div className='lets' data-aos="zoom-in">
                <div>
                    <h2>Let’s work together</h2>
                    <p>Want to discuss an opportunity to create something <br /> great? I’m ready when you are.</p>
                </div>
                <GetInTouch />
            </div>
        </div>
    )
}