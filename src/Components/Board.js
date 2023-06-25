import React from 'react'
import Letters from './Letters.js'
// This Will Show Which Letter On Each Shell Of The Board
function Board() {
  
    return (
        <div className='board'>
            {/* first row have attempt 0 row but the position of the letetr changes as we gussing the next letter*/}
            <div className='row'>
                <Letters letterPos={0} attemptVal={0} />
                <Letters letterPos={1} attemptVal={0} />
                <Letters letterPos={2} attemptVal={0} />
                <Letters letterPos={3} attemptVal={0} />
                <Letters letterPos={4} attemptVal={0} />
            </div>
            <div className='row'>
                {/*Second row have attempt 1st row but the position of the letter changes as we gussing the next letter*/}
                <Letters letterPos={0} attemptVal={1} />
                <Letters letterPos={1} attemptVal={1} />
                <Letters letterPos={2} attemptVal={1} />
                <Letters letterPos={3} attemptVal={1} />
                <Letters letterPos={4} attemptVal={1} />
            </div>
            <div className='row'>
                <Letters letterPos={0} attemptVal={2} />
                <Letters letterPos={1} attemptVal={2} />
                <Letters letterPos={2} attemptVal={2} />
                <Letters letterPos={3} attemptVal={2} />
                <Letters letterPos={4} attemptVal={2} />
            </div>
            <div className='row'>
                <Letters letterPos={0} attemptVal={3} />
                <Letters letterPos={1} attemptVal={3} />
                <Letters letterPos={2} attemptVal={3} />
                <Letters letterPos={3} attemptVal={3} />
                <Letters letterPos={4} attemptVal={3} />
            </div>
            <div className='row'>
                <Letters letterPos={0} attemptVal={4} />
                <Letters letterPos={1} attemptVal={4} />
                <Letters letterPos={2} attemptVal={4} />
                <Letters letterPos={3} attemptVal={4} />
                <Letters letterPos={4} attemptVal={4} />
            </div>
            <div className='row'>
                <Letters letterPos={0} attemptVal={5} />
                <Letters letterPos={1} attemptVal={5} />
                <Letters letterPos={2} attemptVal={5} />
                <Letters letterPos={3} attemptVal={5} />
                <Letters letterPos={4} attemptVal={5} />
            </div>
        </div>
    )
}

export default Board
