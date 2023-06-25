import React,{useContext} from 'react'
import { AppContext } from '../App';

function Letters({letterPos,attemptVal}) {
    const{board,correctWord,currAttempt}=useContext(AppContext);
    const letter=board[attemptVal][letterPos];
    console.log(correctWord)

// IF THE LETER GUESSED LETTER POSITION IS CORRECT AS THE MAIN LETTER SO THAT LETTER SHELL QTURNS INTO GREEN
    const correct= correctWord[letterPos]===letter;
    // IF THE GUSSED-LETER IS LIES IN THE CORRECT LETTER BUT IT NOT IN THE CORRECT POSITION SO IT WILL SHOWS THE SHELL COLOR YELLOW 
    const almost=!correct && letter!=="" && correctWord.includes(letter);
    // its shows the bg of the letter shell as they correct or almost
    const letterState=
    currAttempt.attemt>attemptVal &&
    (correct?"correct": almost?"almost":"error")
  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letters
