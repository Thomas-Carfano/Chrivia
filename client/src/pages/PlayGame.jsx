import { useState } from 'react';
import '../App.css';
import Button from '@mui/material/Button';


const PlayGame = () =>{
    const [gameCode, setGameCode] = useState(null) ;

    const getGameCode = () => {
        const val = Math.floor(1000 + Math.random() * 9000);
        setGameCode(val);
    }

    return (
    <>
        <h1 id='appTitle'>Chrivia Home Page</h1>

        <div >
            <Button sx={{ ml: 160 }} href='/login'>Login</Button>
            <Button sx={{ ml: 2 }} href='/signup'>SignUp</Button>
        </div>

        <Button size="large" sx={{ ml: 83, mt: 10 }} onClick={getGameCode}>Get Game Code</Button>
        <h1 id="gameCode">{gameCode}</h1>
        <h2>Players:</h2>

    </>
    )
};

export default PlayGame;