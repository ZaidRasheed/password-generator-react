import { useEffect, useState } from 'react';
import './App.css';
import Slider from './slider';
import Input from './input';
import Password from './password';
function App() {

  const [length, setLength] = useState(12);

  const [password, setPassword] = useState("");

  const [refresh, setRefresh] = useState(true);

  const changeInSlider = (event) => {
    let num = event.target.value
    if (!num) {
      setLength(0);
    }
    else if (num > 40) {
      setLength(40)
    }
    else {
      setLength(num);
    }
    const element = document.getElementById("myInput");
    var value = (num - element.min) / (element.max - element.min) * 100
    element.style.background = 'linear-gradient(to right, #C21010 0%, #C21010 ' + value + '%, #fff ' + value + '%, white 100%)'
  }

  const generatePassword = () => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef~!@#$%^&*()_+-=`"{}[];?.,><?/|:ghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setPassword(result);
  }

  useEffect(() => {
    generatePassword();
  }, [length, refresh]);

  return (
    <div className="App">
      <h1 className='title'>Password Generator</h1>
      <Password
        password={password}
        length={length}
      />
      <Input
        length={length}
        changeInSlider={changeInSlider}
      />
      <Slider
        length={length}
        setLength={setLength}
        changeInSlider={changeInSlider}
        refresh={refresh}
        setRefresh={setRefresh}
        password={password}
      />
    </div>
  );
}

export default App;
