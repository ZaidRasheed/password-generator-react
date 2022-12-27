import './App.css';

import Input from './components/Input';
import Password from './components/Password/Password';
import usePassword from './hooks/usePassword/usePassword';
import Slider from './components/Slider';
import CopyAndRefresh from './components/CopyAndRefresh';
function App() {

  const {
    password,
    displayedLength,
    updateDisplayPasswordAndLength,
    passwordType,
    changeInPasswordType,
    changeInLength,
    refreshPassword,
    copied,
    copyPassword } = usePassword()

  return (
    <div className="App">
      <div className='sections'>
        <h1 className='title'>Password Generator</h1>
        <Password
          password={password}
          updateDisplayPasswordAndLength={updateDisplayPasswordAndLength}
        />
      </div>
      <div className='sections'>
        <Input
          displayedLength={displayedLength}
          changeInLength={changeInLength}
          passwordType={passwordType}
          changeInPasswordType={changeInPasswordType}
        />
        <Slider
          displayedLength={displayedLength}
          changeInLength={changeInLength}
        />
        <CopyAndRefresh
          password={password}
          refreshPassword={refreshPassword}
          copyPassword={copyPassword}
          copied={copied}
        />
      </div>
    </div>
  );
}

export default App;
