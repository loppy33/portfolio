import { useEffect } from 'react';
import GetInTouch from '../../../components/getInTouch/GetInTouch'
import './knowme.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function KnowMe() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="KnowMe">
            <h2>Get to know me</h2>
            <div className="knowMeContainer">
                <a href='/about' data-aos="fade-right">
                    <h3>About me</h3>
                    <p>Who I am and what I do</p>
                    <img src="./Memoji.png" alt="" />
                </a>

                <a href='/stack' data-aos="fade-left">
                    <h3>Tech Stack</h3>
                    <p>The dev tools, apps, devices, and games I use and play.</p>
                    <img src="./Apps.png" alt="" />
                </a>
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