import { useState, useMemo } from 'react';
import './App.css';
import Slider from './slider';
import Input from './input';
import Password from './password';
function App() {

  //! length of the password 
  const [length, setLength] = useState(12);

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
    let value = (num - element.min) / (element.max - element.min) * 100
    element.style.background = 'linear-gradient(to right, #415771 0%, #415771 ' + value + '%, #c2daf1 ' + value + '%, #c2daf1 100%)'
  }

  //! the password
  const password = useMemo(() => {

    //! change the copy button back to normal
    setCopiedLabelOpacity("0");
    try {
      document.getElementsByClassName('fa-copy')[0].style.display = 'inline-block';
      document.getElementsByClassName('fa-circle-check')[0].style.display = 'none';
      document.getElementById("copy").classList.remove("copied");
    }
    catch (e) {

    }
    //! generate a password according the options selected
    let result = '';
    let characters = '';

    //! all the password options
    let smallLetters = 'abcdefghijklmnopqrstuvwxyz'
    let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let symbols = '~!@#$%^&*()_+-=`"{}[];?.,><?/|:';
    let numbers = '0123456789'

    let currentLength = 0

    if (passwordType.lowerCase) {
      //! to make sure theres at least one of each character type in the password we include one random and afterwards the remaining are random characters
      if (currentLength < length) {
        currentLength++;
        result += smallLetters.charAt(Math.floor(Math.random() * smallLetters.length));
        characters += smallLetters;
      }
      else
        return result
    }
    if (passwordType.upperCase) {
      if (currentLength < length) {
        currentLength++;
        result += capitals.charAt(Math.floor(Math.random() * capitals.length));
        characters += capitals;
      }
      else
        return result
    }
    if (passwordType.symbols) {
      if (currentLength < length) {
        currentLength++;
        result += symbols.charAt(Math.floor(Math.random() * symbols.length));
        characters += symbols;
      }
      else
        return result
    }
    if (passwordType.numbers) {
      if (currentLength < length) {
        currentLength++;
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        characters += numbers;
      }
      else
        return result
    }

    for (let i = currentLength; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;

    //! we need to generate a new password whenever the length or type changes or basically when the user wants a new one
  }, [length, refresh, passwordType.upperCase, passwordType.lowerCase, passwordType.symbols, passwordType.numbers])


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
