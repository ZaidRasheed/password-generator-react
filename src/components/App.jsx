import { useEffect, useState } from 'react';
import './App.css';
import Slider from './slider';
import Input from './input';
import Password from './password';
function App() {

  //! length of the password 
  const [length, setLength] = useState(12);

  //! the password
  const [password, setPassword] = useState("");

  //! the refresh for a new password
  const [refresh, setRefresh] = useState(true);

  //! the copied label displayed when the user copies the password
  const [copiedLabelOpacity, setCopiedLabelOpacity] = useState("0");

  const [passwordType, setPasswordType] = useState({
    upperCase: true,
    lowerCase: true,
    numbers: true,
    symbols: true,
  })

  const changeInPasswordType = (event) => {
    //! when the content of the desired password changes we have to update the requirements
    let value = event.target.value;
    let check = passwordType[`${value}`];

    setPasswordType(() => {
      return {
        ...passwordType,
        [value]: !check
      }
    })
  }

  const changeInSlider = (event) => {
    //! whenever the slider value changes we have to change the value of manual input accordingly
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

    //! we also need to change the fill color length to make move with the thumb

    const element = document.getElementById("myInput");
    var value = (num - element.min) / (element.max - element.min) * 100
    element.style.background = 'linear-gradient(to right, #415771 0%, #415771 ' + value + '%, #c2daf1 ' + value + '%, #c2daf1 100%)'
  }

  const generatePassword = () => {
    //! change the copy button back to normal
    setCopiedLabelOpacity("0");
    document.getElementsByClassName('fa-copy')[0].style.display = 'inline-block';
    document.getElementsByClassName('fa-circle-check')[0].style.display = 'none';
    document.getElementById("copy").classList.remove("copied");

    //! generate a password according the options selected
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
    //! we need to generate a new password whenever the length or type changes or basically when the user want a new one
    generatePassword();
  }, [length, refresh, passwordType.upperCase, passwordType.lowerCase, passwordType.symbols, passwordType.numbers]);

  return (
    <div className="App">
      <div className='sections'>
        <h1 className='title'>Password Generator</h1>
        <Password
          password={password}
          length={length}
          setPassword={setPassword}
          setLength={setLength}
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
          setCopiedLabelOpacity={setCopiedLabelOpacity}
          copiedLabelOpacity={copiedLabelOpacity}
        />
      </div>


    </div>
  );
}

export default App;
