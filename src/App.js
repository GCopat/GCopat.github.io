import logo from './logo.svg';
import './App.css';
import * as icons from './images';
import StartBanner from './components/StartBanner';
import InfoCard from './components/InfoCard';

function App() {

  return (
    <div className='App'>
      <StartBanner/>
      <InfoCard/>
    </div>
  );
}

export default App;
