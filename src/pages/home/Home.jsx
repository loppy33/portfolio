import Greetings from './components/greetings/greetings'
import KnowMe from './components/knowme/knowme'
import SelectedWork from './components/selectedWork/selectedWork'
import './Home.sass'

export default function Home() {
    return (
        <div className="Home">
            <Greetings/>
            <SelectedWork/>
            <KnowMe/>
        </div>
    )
}