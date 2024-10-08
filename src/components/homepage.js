
import Section1 from './homepage/Herotext'; 
import Newsgrid from './homepage/LatestNews';
import Reco from './homepage/Recommendation';
import bg from '../Images/hero.png';

function HomePage() {
    return (
        <div className="App">
           <Section1 />
           <img style={{width: '100%', height: '90%' , background: 'linear-gradient(0deg, #909090 0%, #909090 100%)'}} src={bg} alt="background"/>
           <Newsgrid />
           <Reco />
        </div>
    );
}

export default HomePage;
