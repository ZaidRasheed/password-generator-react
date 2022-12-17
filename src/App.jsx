import './App.css';

import Input from './components/Input';
import Password from './components/Password';
import usePassword from './hooks/usePassword';
import Slider from './components/Slider';
import CopyAndRefresh from './components/CopyAndRefresh';
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
          changeInSlider={changeInSlider}
        />
        <CopyAndRefresh
          password={password}
          refreshPassword={refreshPassword}
          setCopied={setCopied}
          copied={copied}
        />
      </div>
    </div>
  );
}

export default App;
