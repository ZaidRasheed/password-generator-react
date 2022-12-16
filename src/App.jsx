import './App.css';
import Slider from './components/slider';
import Input from './components/input';
import Password from './components/password';
import usePassword from './hooks/usePassword';

function App() {

  const {
    password,
    length,
    setLength,
    passwordType,
    changeInPasswordType,
    changeInSlider,
    refreshPassword,
    copied,
    setCopied } = usePassword()

  return (
    <div className="App">
      <div className='sections'>
        <h1 className='title'>Password Generator</h1>
        <Password
          password={password}
          length={length}
          setLength={setLength}
        />
      </div>
      <div className='sections'>
        <Input
          length={length}
          changeInSlider={changeInSlider}
          passwordType={passwordType}
          changeInPasswordType={changeInPasswordType}
        />
        <Slider
          length={length}
          setLength={setLength}
          changeInSlider={changeInSlider}
          refreshPassword={refreshPassword}
          password={password}
          setCopied={setCopied}
          copied={copied}
        />
      </div>
    </div>
  );
}

export default App;
