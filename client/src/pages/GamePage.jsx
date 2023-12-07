import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Game = () => {

    return (
        <>
        <h1 id='appTitle'> Welcome to Game</h1> 
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Game Name"
          multiline
          maxRows={4}
        />
        <br/>
        <Button variant="contained">Next</Button>

      </div>

        <TextField
          id="outlined-multiline-static"
          label="Question"
          multiline
          rows={4}
        />
    </Box>

        </>
    )
}

export default Game;