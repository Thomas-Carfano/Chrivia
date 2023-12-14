import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CreateGame from './pages/CreateGame';
import PlayGame from './pages/PlayGame'

const App = () => {

  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/signup" element={<SignupPage />}/>
      <Route path="/create" element={<CreateGame />}/>
      <Route path="/play" element={<PlayGame />}/>
     </Routes>
    </>
  )
};

export default App;
