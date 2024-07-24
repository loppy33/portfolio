import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '../../../ThemeContext';
import './WorkContainer.sass';

export default function WorkContainer() {
    const { theme } = useTheme();

    const works = [
        {
            icon: "./portfolio/subbi.png",
            name: "Subbi –– The free subscriptions manager",
            description: "Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.",
            link: ["Download App", "https://..."],
            banner: "./portfolio/subbiPhone.png"
        },
        {
            icon: "./portfolio/react.png",
            name: "React Documentation",
            description: "SWith the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
            link: ["Visit Site", "https://legacy.reactjs.org/"],
            banner: "./portfolio/reactPc.png"
        }
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="WorkContainer">
            {works.map((work, index) => (
                <div className="work" key={index} data-aos="fade-up">
                    <div className='info'>
                        <img className='appIcon' src={work.icon} alt="" />
                        <h3>{work.name}</h3>
                        <p>{work.description}</p>
                        <a href={work.link[1]}>{work.link[0]}<img className='arrow' src={theme === "dark" ? "./portfolio/arrow.svg" : "./portfolio/arrowDark.svg"} alt="" /></a>
                    </div>
                    <img className='appImg' src={work.banner} alt="" />
                </div>
            ))}
        </div>
    );
}
