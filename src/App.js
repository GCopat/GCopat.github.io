import logo from './logo.svg';
import './App.css';
import * as icons from './images';
import StartBanner from './components/StartBanner';
import InfoCard from './components/InfoCard';
import InfoBanner from './components/InfoBanner';

function App() {

  return (
    <div className='App'>
      <StartBanner/>
      <InfoCard/>
      <InfoBanner/>
    </div>
  );
}

export default App;
