import '../App.css';
import Button from '@mui/material/Button';


const HomePage = () =>{

    return (
    <>
        <h1 id='appTitle'>Chrivia Home Page</h1>

        <div >
            <Button sx={{ ml: 160 }} href='/login'>Login</Button>
            <Button sx={{ ml: 2 }} href='/signup'>SignUp</Button>
        </div>

        <Button size="large" sx={{ ml: 84, mt: 30 }} href='/game'>Start New Game</Button>
    </>
    )
};

export default HomePage;