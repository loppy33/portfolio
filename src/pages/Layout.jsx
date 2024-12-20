import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Layout.sass';
import { Outlet, NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";

export default function Layout() {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <nav className="phone">
                <ul>
                    <li>
                        <NavLink to="/" end><IoHome /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/about/"><FaUser /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/work/"><FaBriefcase /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/stack/"><BsStack /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact/"><IoPencil /></NavLink>
                    </li>
                </ul>
            </nav>

            <header data-aos="fade-down">
                <img onClick={toggleTheme} className='phoneLogo' src={theme === "dark" ? "/icons/Logo.svg" : "/icons/LogoDark.svg"} alt="" />

                <nav>
                    <ul data-aos="fade-in">
                        <li>
                            <NavLink to="/" end><img className='logo' src={theme === "dark" ? "/icons/Logo.svg" : "/icons/LogoDark.svg"} alt="Logo" /></NavLink>
                        </li>
                        <li>
                            <NavLink to="/about/">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/work/">Work</NavLink>
                        </li>
                        <li>
                            <NavLink to="/stack/">Tech Stack</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact/">Contact</NavLink>
                        </li>
                    </ul>
                    <div className='net' data-aos="fade-up">
                        <div className="right">
                            <a target="_blank" rel="noopener noreferrer" href="https://t.me/codepin/"><img src={theme === "dark" ? "/icons/telegram.png" : "/icons/telegramDark.png"} alt="Telegram" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/loppy33/"><img src={theme === "dark" ? "/icons/Github.svg" : "/icons/GithubDark.svg"} alt="GitHub" /></a>
                        </div>
                        <button onClick={toggleTheme} data-aos="zoom-in">
                            <img src={theme === "dark" ? "/icons/Sun.svg" : "/icons/Moon.svg"} alt="Toggle Theme" />
                        </button>
                    </div>
                </nav>
            </header>

            <Outlet />


            <footer data-aos="fade-up">
                <div className="left">
                    <img className='logo' src={theme === "dark" ? "/icons/Logo.svg" : "/icons/LogoDark.svg"} alt="Logo" />
                    <span className='thanks'>Thanks for stopping by ッ</span>
                    <span className='rights'>© 2024 Petrenko Nikita. All Rights Reserved.</span>
                </div>
                <div className="right" data-aos="fade-up" data-aos-delay="200">
                    <nav>
                        <ul>
                            <h3>Links</h3>
                            <li>
                                <NavLink to="/about/">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/work/">Work</NavLink>
                            </li>
                            <li>
                                <NavLink to="/stack/">Tech Stack</NavLink>

                            </li>
                            <li>
                                <NavLink to="/contact/">Contact</NavLink>
                            </li>
                        </ul>
                        <ul>
                            <h3>Elsewhere</h3>
                            <li><a target="_blank" href="mailto:nikita.petrenko1406@gmail.com">Email</a></li>
                            <li><a target="_blank" href="https://t.me/codepin/">Telegram</a></li>
                            <li><a target="_blank" href="https://github.com/loppy33/">GitHub</a></li>
                            <li><a target="_blank" href="https://discord.com/users/824650448714989628">Discord</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>


        </>
    );
}
