import './App.css';
//Context api is used as we can use the context of are useState component at anywhere through out the project.......for this we have to import creatContext from react
import { createContext, useEffect, useState } from 'react';
//@ts-ignore
import Board from './Components/Board'
//@ts-ignore
import { boardDefault, generateWordSet } from '../src/Words'
import Keyboard from './Components/Keyboard'

export const AppContext = createContext();
function App() {
  const [board, setBoard] = useState(boardDefault);
  const [wordSet, SetWordSet] = useState(new Set())
  const [correctWord, setCorrectWord] = useState('')
  const [score, setScore] = useState(JSON.parse(localStorage.getItem('score')) || 0)

  useEffect(() => {
    generateWordSet()
      .then((words) => {
        SetWordSet(words.wordSet);
        const abcd = parseInt(Math.random() * words.wordSet.length)
        setCorrectWord(words.wordSet[abcd].toUpperCase())
        console.log(words.wordSet[abcd], abcd)

      });
  }, [])
  // WE CREATE A FUNCTIONS HERE FOR KEYS FUNCTIONALIY AND WE WILL USE THESE FUCTIONS AT KEY.JS BYR CREATING ITS CONTEXT

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    // if we manually type the position of letter so it will type the only on that particullar position only
    newBoard[currAttempt.attemt][currAttempt.letterPos] = keyVal
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })
  }


  const onENTER = () => {
    // we will use if condition so the gamer can not move on next line without completeing the previous on by only clicking enter
    if (currAttempt.letterPos !== 5) return;
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attemt][i];
    };
    if (correctWord.toLowerCase() === currWord.toLowerCase()) {
      setCurrAttempt({ attemt: currAttempt.attemt + 1, letterPos: 0 });
      setScore(score + 1)
      localStorage.setItem('score', JSON.stringify(score + 1))
      if (window.confirm("You have won")) {
        window.location.reload()
      }
      return
    }
    if (wordSet.includes(currWord.toLowerCase())) {
      setCurrAttempt({ attemt: currAttempt.attemt + 1, letterPos: 0 });
      if (currAttempt.attemt + 1 === 5) {
        if (window.confirm(`You have failed all the attempts. Your correct word is ${correctWord}`)) {
          window.location.reload()
        }
      }
    }
    else {
      alert("Word is not in our Dictionary")
    }
  };


  const onDELETE = () => {
    //IT WILL RETURN DIRECTLY IF IT IS A FIRST LETTER OF AN ATTEMT.     
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    // WE CAN SUBTRACT THE LETTER POSITION SN MAKE IT A EMPTY STRING OVER THAT POSITION
    newBoard[currAttempt.attemt][currAttempt.letterPos - 1] = " "
    //   THE AGAIN WE HAVE TO CREATE OR UPDATE A SETBOARD
    setBoard(newBoard)
    //   SAME WE HAVE TO UPDATE THE LETTER-POSISION
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
  }



  // we will create a useState component so we can move forword on putting a letters on present shell.
  const [currAttempt, setCurrAttempt] = useState({ attemt: 0, letterPos: 0 })
  return (
    <div className="App">
      <nav>
        <h1>Gusse The Word</h1>
        <p>Your score - {score}</p>
      </nav>
      {/* with sue of useContext we can provide a value to our provider and we can use these values anywhere inside the project*/}
      {
        correctWord && (<AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onENTER, onDELETE, correctWord }}>

          <div className='game'>
            {/* we need a board for display. so we will creat a component board */}
            <Board />
            {/* we need a keybord for typing si we will crear a component keyboard */}
            <Keyboard />
          </div>

        </AppContext.Provider>
        )
      }
    </div>
  );
}

export default App;
