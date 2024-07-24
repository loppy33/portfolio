import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.sass';
import { useTheme } from '../../ThemeContext';

export default function Contact() {
    const { theme, toggleTheme } = useTheme();
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);


    return (
        <div className="Contact">
            <div className="title" data-aos="fade-up">
                <h1>Get in touch</h1>
                <span>Let’s build something awesome.</span>
            </div>
            <form data-aos="fade-up">
                <div className="newMessage" data-aos="zoom-in">
                    <img src="./portfolio/settings.png" alt="settings" />
                    <h3>New message</h3>
                </div>
                <div className="formContainer">
                    <label htmlFor="email" data-aos="fade-right">
                        Email: <input type="email" id="email" placeholder='Enter your email address' />
                    </label>
                    <label htmlFor="name" data-aos="fade-right" data-aos-delay="100">
                        Name: <input type="text" id="name" placeholder='Enter your name' />
                    </label>
                    <label htmlFor="subject" data-aos="fade-right" data-aos-delay="200">
                        Subject: <input type="text" id="subject" placeholder='Enter subject' />
                    </label>
                    <textarea className='write' placeholder='Write your message here' rows={15} data-aos="fade-up" data-aos-delay="300"></textarea>
                    <button data-aos="fade-up" data-aos-delay="400">Send</button>
                </div>
            </form>
            <div className="links">
                <a target="_blank" rel="noopener noreferrer" href="https://t.me/codepin/"><img src={theme === "dark" ? "../portfolio/telegram.png" : "./portfolio/telegramDark.png"} alt="Telegram" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/loppy33/"><img src={theme === "dark" ? "./portfolio/Github.svg" : "./portfolio/GithubDark.svg"} alt="GitHub" /></a>
                <a target="_blank" href="mailto:nikita.petrenko1406@gmail.com"><img src={theme === "dark" ? "./portfolio/mailDark.svg" : "./portfolio/mailLight.svg"} alt="Email" /></a>
            </div>
        </div>
    );
}
