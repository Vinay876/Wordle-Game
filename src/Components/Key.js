import React, { useContext } from 'react'
import { AppContext } from '../App';
// We will right a logic of pressing a key enter in if statement.

function Key({ keyVal, Bigkey }) {
    const {
        onDELETE,
        onENTER,
        onSelectLetter } = useContext(AppContext);
    const selectLetter = () => {
        if (keyVal === "ENTER") {
            onENTER();
        }
        else if (keyVal === "DELETE") {
            onDELETE();
        }
        else {
            onSelectLetter(keyVal);
        }
    };
    return (
        <div className='key' id={Bigkey && "big"} onClick={selectLetter}>{keyVal}</div>
    )
}

export default Key
