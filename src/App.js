import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';

function App() {
  const styles = {
    theme1: "rgb(12, 12, 12)",
    theme2: "rgb(79, 23, 135)",
    theme3: "rgb(251, 101, 37)",
    theme4: "rgb(190, 49, 68)",
  }

  return (
    <Router>
      <div className='App'>
        <Routes>

          <Route path="/" element={ 
              <Main/>
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
