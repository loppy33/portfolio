import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GetInTouch from '../components/getInTouch/GetInTouch';
import './About.sass';

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 600, once: true });
    }, []);

    return (
        <div className="About">
            <div className="title" data-aos="fade-down">
                <h1>A little bit about me</h1>
                <span>Who I am and what I do.</span>
            </div>
            <div className='aboutContainer'>
                <div className="text">
                    <span data-aos="fade-up">WHO I AM</span>
                    <p data-aos="fade-up" data-aos-delay="100">I'm <span className='name'>Nikita</span>, Fullstack web developer from Ukraine.</p>
                    <span data-aos="fade-up" data-aos-delay="200">WHAT I DO</span>
                    <p data-aos="fade-up" data-aos-delay="300">With two years of invaluable experience working at Harmony Technology, a technology company based here in Rabat, I have honed my skills in React.js, Next.js, TailwindCSS and TypeScript, allowing me to create seamless and interactive user experiences. During my time at Harmony Technology, I was privileged to work on projects for esteemed clients such as the Ministry of Health, the Ministry of Education, and the Ministry of Justice. It was an incredibly rewarding application development experience.</p>
                    <span data-aos="fade-up" data-aos-delay="400">WHAT I DID</span>
                    <p data-aos="fade-up" data-aos-delay="500">Before delving into the realm of front end engineering, I spent five years as a graphic designer. This background has equipped me with a keen eye for aesthetics and a deep understanding of user-centered design principles. It enables me to seamlessly blend functionality and visual appeal in every project I undertake.</p>
                    <span className='double'></span>
                    <p data-aos="fade-up" data-aos-delay="600">Feel free to reach out via e-mail, or follow me on Twitter. Want to see where I’ve worked? Check out my Resume, or Connect with me on LinkedIn.</p>
                    <span ></span>
                    <div data-aos="fade-up" data-aos-delay="700">
                        <p>Let’s build something great,</p>
                        <span></span>
                        <img className='sign' src="./sign.png" alt="" />
                    </div>
                </div>
                <div className="image">
                    <img className='photo' src="./photo.png" alt="" data-aos="zoom-in" data-aos-delay="800" />
                    <GetInTouch />
                </div>
            </div>
        </div>
    )
}
