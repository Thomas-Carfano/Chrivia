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
  const [gameInfo, setGameInfo] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const clearUserInput = () => {
    document.getElementById('mainQuestion').value = '';
    document.getElementById('correctAnswer').value = '';
    document.getElementById('wrongAnswer1').value = '';
    document.getElementById('wrongAnswer2').value = '';
    document.getElementById('wrongAnswer3').value = '';
    setCurrentQuestion({})
  }

  const saveQuestion = () => {
    currentQuestion.question = question;
    currentQuestion.answer = answer;
    currentQuestion.wrong1 = wrong1;
    currentQuestion.wrong2 = wrong2;
    currentQuestion.wrong3 = wrong3;
    console.log(currentQuestion);
    gameInfo.push(currentQuestion);
    console.log(gameInfo)
    clearUserInput()
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
          <h2>Game Name</h2>
          <TextField
            id="gameName"
            label="Game Name"
            multiline
            maxRows={4}
            onChange={(e) => {
              setGameName(e.target.value);
            }}
          />
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
        <Button sx={{ml: 98}} id='questionNext' variant="contained" onClick={saveQuestion}>Next Question</Button>
        <Button sx={{ml: 5}} id='questionNext' variant="contained" >Start Game</Button>
    </Box>
    <h1>Game Name: {gameName}</h1>
    {gameInfo.map((_, index) => (
      <>
      <h2>Round {index + 1}</h2>
      <h3>Question: {_.question}</h3>
      <h3>Answer: {_.answer}</h3>
      <h3>Decoy Answer 1: {_.wrong1}</h3>
      <h3>Decoy Answer 2: {_.wrong2}</h3>
      <h3>Decoy Answer 3: {_.wrong3}</h3>
      </>
      ))}
        </>
    )
}

export default Game;