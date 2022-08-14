import { useEffect, useState } from 'react';
import './App.css';
import Slider from './slider';
import Input from './input';
import Password from './password';
function App() {

  const [length, setLength] = useState(12);

  const [password, setPassword] = useState("");

  const [refresh, setRefresh] = useState(true);

  const [passwordType, setPasswordType] = useState({
    upperCase: true,
    lowerCase: true,
    numbers: true,
    symbols: true,
  })

  const changeInPasswordType = (event) => {
    let value = event.target.value;
    let check=passwordType[`${value}`];

    setPasswordType(()=>{
      return{
        ...passwordType,
        [value]:! check
      }
    })
  }

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
    element.style.background = 'linear-gradient(to right, #415771 0%, #415771 ' + value + '%, #c2daf1 ' + value + '%, #c2daf1 100%)'
  }

  const generatePassword = () => {
    let result = '';
    let characters = '';
    if (passwordType.lowerCase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (passwordType.upperCase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (passwordType.symbols) {
      characters += '~!@#$%^&*()_+-=`"{}[];?.,><?/|:';
    }
    if (passwordType.numbers) {
      characters += '0123456789';
    }
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setPassword(result);
  }

  useEffect(() => {
    generatePassword();
  }, [length, refresh, passwordType.upperCase, passwordType.lowerCase, passwordType.symbols, passwordType.numbers]);

  return (
    <div className="App">
      <div className='sections'>
        <h1 className='title'>Password Generator</h1>
        <Password
          password={password}
          length={length}
        />
      </div>

      <div className='sections'>
        <Input
          length={length}
          changeInSlider={changeInSlider}
          upperCase={passwordType.upperCase}
          lowerCase={passwordType.lowerCase}
          numbers={passwordType.numbers}
          symbols={passwordType.symbols}
          changeInPasswordType={changeInPasswordType}
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


    </div>
  );
}

export default App;
