import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log"
import GameOver from "./components/GameOver"
import { WINNING_COMBINATIONS } from "./winning-combination"

const InitialGameBoard =[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]
let winner ;

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'
  if(gameTurns.length && gameTurns[0].player === 'X'){
    currentPlayer = 'O'
  }
return currentPlayer

 }

function App() {
  const [gameTurns , setGameTurns] = useState([])
   let gameboard = [...InitialGameBoard .map(array => [...array])]




for(const turn of gameTurns){
  let {square , player} = turn
  let {row , col} = square
  gameboard[row][col] = player
}

for (const combination of WINNING_COMBINATIONS ){
  let firstSquareSymbol = gameboard[combination[0].row][combination[0].column]
  let secondSquareSymbol = gameboard[combination[1].row][combination[1].column]
  let thirdSquareSymbol = gameboard[combination[2].row][combination[2].column]
  
  if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
    winner = firstSquareSymbol
  }
  }

  let draw = gameTurns.length === 9 && !winner

let activePlayer = deriveActivePlayer(gameTurns)
  function handleSelectSquare (rowIndex , columnIndex){
   setGameTurns(prevTurns => {
  const currentPlayer = deriveActivePlayer(prevTurns)
    const updatedTurns = [{square:{row:rowIndex , col:columnIndex} , player : currentPlayer},...prevTurns];
    return updatedTurns
   })
  
  }

  function handleRestart(){
    setGameTurns([])
  }

  return (
    <main>
      <div id='game-container'>
<ol id='players' className="highlight-player">
 <Player  name='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
 <Player  name='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
</ol>
{(winner || draw) && <GameOver winner={winner} handleRestart={handleRestart} />}
<GameBoard handleSelect={handleSelectSquare} turns={gameboard} />
      </div>
<Log turns={gameTurns}/>
    </main>
  )
}

export default App
