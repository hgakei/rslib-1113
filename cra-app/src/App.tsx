import logo from './logo.svg';
import './App.css';
import {Button} from 'shared'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button.Button label={'Button'} primary/>
      </header>
    </div>
  );
}

export default App;
