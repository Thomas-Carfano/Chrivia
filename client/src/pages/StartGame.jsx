import { useState } from 'react';
import '../App.css';
import Button from '@mui/material/Button';


const StartGame = () =>{
    const [gameCode, setGameCode] = useState(null) ;

    const getGameCode = () => {
        const val = Math.floor(1000 + Math.random() * 9000);
        setGameCode(val);
        document.getElementById('gameCodeButton').style.display = 'none';
    }

    return (
    <>
        <h1 id='appTitle'>Chrivia Home Page</h1>

        <div >
            <Button sx={{ ml: 160 }} href='/login'>Login</Button>
            <Button sx={{ ml: 2 }} href='/signup'>SignUp</Button>
        </div>

        <Button id="gameCodeButton" size="large" sx={{ ml: 83, mt: 10 }} onClick={getGameCode}>Get Game Code</Button>
        <h1 id="gameCode">Game Code: {gameCode}</h1>
        <h2>Players:</h2>

        
    </>
    )
};

export default StartGame;