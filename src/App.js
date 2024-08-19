import './App.css';
import StartBanner from './components/StartBanner';
import InfoCard from './components/InfoCard';
import TopBanner from './components/InfoBanner';
import Timeline from './components/Timeline';

function App() {
  const styles = {
    theme1: "rgb(12, 12, 12)",
    theme2: "rgb(79, 23, 135)",
    theme3: "rgb(251, 101, 37)",
    theme4: "rgb(190, 49, 68)",
  }

  return (
    <div className='App'>
      <StartBanner/>
      <div className='content'>
        <InfoCard/>
        <TopBanner/>
        <Timeline/>
      </div>
    </div>
  );
}

export default App;
