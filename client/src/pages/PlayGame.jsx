import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const PlayGame = () =>{

    return (
    <>
        <h1 id='appTitle'>Chrivia Play Game Page</h1>

        <div >
            <Button sx={{ ml: 160 }} href='/login'>Login</Button>
            <Button sx={{ ml: 2 }} href='/signup'>SignUp</Button>
        </div>

        <TextField id="outlined-basic" label="Enter Game Code" variant="outlined" />
        <br/>
        <Button variant="text">Join</Button>
    </>
    )
};

export default PlayGame;