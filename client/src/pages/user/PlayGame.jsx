import '../../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { useState } from 'react';
import { io } from "socket.io-client";

const PlayGame = () =>{
const [userGameCode, setUserGameCode] = useState(null)
const socket = io("/");

    const joinCreatedGame = () => {
        console.log(userGameCode)
        socket.emit('join', userGameCode)
    
    }

    return (
    <>
        <h1 id='appTitle'>Chrivia Play Game Page</h1>

        <div >
            <Button sx={{ ml: 160 }} href='/login'>Login</Button>
            <Button sx={{ ml: 2 }} href='/signup'>SignUp</Button>
        </div>
        <Box>
        <TextField id="playGameCode" label="Enter Game Code" variant="outlined" onChange={(e) => {setUserGameCode(e.target.value);}}/>
        <br/>
        <Button variant="text" onClick={joinCreatedGame}>Join</Button>
        </Box>
    </>
    )
};

export default PlayGame;