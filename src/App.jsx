import { useState } from 'react'
import Board from './Board/Board.jsx';
import Score from './Score/Score.jsx';
import './App.css'

function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <Score clicks={clicks}/>
      <Board setClicks={setClicks}/>
    </>
  )
}

export default App