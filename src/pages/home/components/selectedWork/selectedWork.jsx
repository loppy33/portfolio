import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WorkContainer from '../../../components/workContainer/WorkContainer';
import './SelectedWork.sass';

export default function SelectedWork() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="SelectedWork">
            <h2 data-aos="fade-up">Selected Work</h2>
            <WorkContainer />
        </div>
    );
}
