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

        <Button size="large" sx={{ ml: 80, mt: 30 }} href='/create'>Start New Game</Button>
        <Button size="large" sx={{ ml: 80, mt: 30 }} href='/play'>Join A Game</Button>
    </>
    )
};

export default HomePage;