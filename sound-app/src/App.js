import logo from './logo.svg';
import './App.css';
import SettingsBar from './Components/SettingsBar';
import Keyboard from './Components/Keyboard';
import WaveformPicker from './Components/WaveformPicker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SettingsBar />
        <Keyboard />
        <WaveformPicker />
      </header>
    </div>
  );
}

export default App;
