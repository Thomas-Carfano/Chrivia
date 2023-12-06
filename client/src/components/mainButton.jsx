import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const CreateGame = () => {
  
  return (
    <>
    <Stack spacing={2} direction="row">
      <Button>Start A New Game</Button>
      <Button href='/game'>Game</Button>
      <Button href='/login'>Login</Button>
      <Button href='/signup'>SignUp</Button>
    </Stack>
    </>
  );
}

export default CreateGame;
