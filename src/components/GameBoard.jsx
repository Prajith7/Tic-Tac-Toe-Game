import { useState } from "react"



export default function GameBoard({handleSelect , turns}) {

   

    
// const [gameboard , setGameboard] = useState(InitialGameBoard)

// function handleClick(rowIndex , columnIndex){
//     setGameboard( (prevstate )=>{
//         let updateBoard = [...prevstate].map((initial)=> [...initial])
//         updateBoard [rowIndex][columnIndex] = activePlayer
//         return updateBoard
//     }
//     )
//     handleSelect()
// }
console.log(turns)
return (
    <ol id='game-board'>
    {turns.map((row,rowIndex) => ( <li key={rowIndex}>
        <ol>
            {
                row.map((column , columnIndex) => ( <li key={columnIndex}><button onClick={()=>handleSelect(rowIndex,columnIndex)}  disabled={column !== null}>{column}</button></li>)
            )
            }
        </ol>
    </li> 
    )
    )}
    </ol>
)
}