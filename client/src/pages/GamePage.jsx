import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";


const Game = () => {
  const [gameName, setGameName] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [wrong1, setWrong1] = useState(null);
  const [wrong2, setWrong2] = useState(null);
  const [wrong3, setWrong3] = useState(null);

  const selectGameName = () => {
    console.log(gameName);
    document.getElementById('nameNext').style.display = 'none'
  }

  const saveQuestion = () => {
    console.log('saveQuestionFunction')
    console.log(question);
    console.log(answer);
    console.log(wrong1);
    console.log(wrong2);
    console.log(wrong3);

  }


    return (
        <>
        <h1 id='appTitle'> Welcome To The Game Page</h1> 

        <Box component="form"
        sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
        noValidate
        autoComplete="off"
        >

        <div>
          <h2>Choose A Name For The Game</h2>
          
          <TextField
            id="outlined-multiline-flexible"
            label="Game Name"
            multiline
            maxRows={4}
            onChange={(e) => {
              setGameName(e.target.value);
            }}
          />

          <br/>
          <Button sx={{ml: 17}} id='nameNext' variant="contained" onClick={selectGameName}>Save</Button>
        </div>

       <TextField
          id="mainQuestion"
          label="Question"
          multiline
          rows={6}
          hidden='true'
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        
        <TextField
          id="correctAnswer"
          label="Correct Answer"
          multiline
          rows={6}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <br/>
        <TextField
          id="wrongAnswer1"
          label="Wrong Answer 1"
          multiline
          rows={6}
          onChange={(e) => {
            setWrong1(e.target.value);
          }}
        />
        <TextField
          id="wrongAnswer2"
          label="Wrong Answer 2"
          multiline
          rows={6}
          onChange={(e) => {
            setWrong2(e.target.value);
          }}
        />
        <TextField
          id="wrongAnswer3"
          label="Wrong Answer 3"
          multiline
          rows={6}
          onChange={(e) => {
            setWrong3(e.target.value);
          }}
        />
        <br/>
        <Button sx={{ml: 98}} id='questionNext' variant="contained" onClick={saveQuestion}>Next</Button>
    </Box>

        </>
    )
}

export default Game;