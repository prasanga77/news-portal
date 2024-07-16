
import Section1 from './homepage/Herotext'; 
import Newsgrid from './homepage/LatestNews';
import bg from '../Images/hero.png';

function HomePage() {
    return (
        <div className="App">
           <Section1 />
           <img style={{width: '100%', height: '100%', background: 'linear-gradient(0deg, #909090 0%, #909090 100%)'}} src={bg} alt="background"/>
           <Newsgrid />
        </div>
    );
}

export default HomePage;
