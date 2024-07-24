import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Stack.sass';

export default function Stack() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const dev = [
        {
            name: "React.js",
            tag: 'Web Development',
            image: './portfolio/react.png',
        },
        {
            name: "Next.js",
            tag: 'Web Framework',
            image: './portfolio/next.png',
        },
        {
            name: "GitHub",
            tag: 'Version Control',
            image: './portfolio/github.png',
        },
        {
            name: "VSCode",
            tag: 'Editor',
            image: './portfolio/visual.png',
        },
        {
            name: "JavaScript",
            tag: 'Language',
            image: './portfolio/javascript.png',
        },
        {
            name: "TypeScript",
            tag: 'Language',
            image: './portfolio/typescript.png',
        },
        {
            name: "Vercel",
            tag: 'Deployment',
            image: './portfolio/vercel.png',
        },
        {
            name: "Figma",
            tag: 'Design',
            image: './portfolio/figma.png',
        },
    ];

    const apps = [
        {
            name: "Discord",
            tag: 'Communication',
            image: './portfolio/discord.png',
        },
        {
            name: "Duolingo",
            tag: 'Education',
            image: './portfolio/duolingo.png',
        },
        {
            name: "Chrome",
            tag: 'Browser',
            image: './portfolio/chrome.png',
        },
        {
            name: "Spotify",
            tag: 'Music',
            image: './portfolio/spotify.png',
        },
        {
            name: "ChatGPT",
            tag: 'Productivity',
            image: './portfolio/chatgpt.png',
        },
    ];

    const hardware = [
        {
            name: "Apple MacBook Pro 2017",
            tag: '',
            image: './portfolio/mac.png',
        },
        {
            name: "Logitech MX Master 2S",
            tag: '',
            image: './portfolio/mouse.png',
        },
        {
            name: "Ajazz AK33",
            tag: '',
            image: './portfolio/mon.png',
        },
        {
            name: "Apple iPhone X",
            tag: '',
            image: './portfolio/phone.png',
        },
        {
            name: "Apple AirPods 3",
            tag: '',
            image: './portfolio/sound.png',
        },
        {
            name: "Ikea LAGKAPTEN / OLOV",
            tag: '',
            image: './portfolio/table.png',
        },
        {
            name: "Ikea Markus",
            tag: '',
            image: './portfolio/ches.png',
        },
    ];

    const games = [
        {
            name: "Brawl Stars",
            tag: '',
            image: './portfolio/brawl.png',
        },
    ];

    return (
        <div className="Stack">
            <div className="title" data-aos="fade-down">
                <h1>Tech Stack</h1>
                <span>The dev tools, apps, devices, and games I use and play.</span>
            </div>
            <h2 data-aos="fade-up">Dev & Design</h2>
            <div className="appsContainer" data-aos="fade-up">
                {
                    dev.map((value, index) => (
                        <div className="app" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                            <img src={value.image} alt="" />
                            <div className='name'>
                                <p>{value.name}</p>
                                <span>{value.tag}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 data-aos="fade-up">Apps</h2>
            <div className="appsContainer" data-aos="fade-up">
                {
                    apps.map((value, index) => (
                        <div className="app" key={index} data-aos="flip-left" data-aos-delay={index * 100}>
                            <img src={value.image} alt="" />
                            <div className='name'>
                                <p>{value.name}</p>
                                <span>{value.tag}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 data-aos="fade-up">Hardware</h2>
            <div className="appsContainer" data-aos="fade-up">
                {
                    hardware.map((value, index) => (
                        <div className="app" key={index} data-aos="slide-up" data-aos-delay={index * 100}>
                            <img src={value.image} alt="" />
                            <div className='name'>
                                <p>{value.name}</p>
                                <span style={value.tag.length < 1 ? { border: 'none' } : {}}>{value.tag}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 data-aos="fade-up">Games</h2>
            <div className="appsContainer" data-aos="fade-up">
                {
                    games.map((value, index) => (
                        <div className="app" key={index} data-aos="zoom-out" data-aos-delay={index * 100}>
                            <img src={value.image} alt="" />
                            <div className='name'>
                                <p>{value.name}</p>
                                <span style={value.tag.length < 1 ? { border: 'none' } : {}}>{value.tag}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
