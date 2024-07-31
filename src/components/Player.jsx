import React from 'react'
import { useState } from 'react'

function Player({name , symbol , isActive}) {

 const [isEditing , setIsEditing] =useState(false);
 const [editPlayerName , setEditPlayerName] = useState(name)

 function handleEditClick(){
    setIsEditing( editing => !editing)
 }

 function handleInput(event){
setEditPlayerName(event.target.value)
 }

let playerName = <span className='player-name' >{editPlayerName}</span>
let btnCaption = 'edit'
 if(isEditing === true){
    playerName = <input type='text' recquired value={editPlayerName} defaultValue={name} onChange={handleInput} />
    btnCaption = 'save'
 }

  return (
    <li className={isActive ? 'active' : undefined}>
    <span className="player">{playerName}</span>
    <span className="player-symbol">{symbol}</span>
 <button onClick={handleEditClick}>{btnCaption}</button>
  </li>
  )
}

export default Player