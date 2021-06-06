import React from 'react'
import Square from './Square'


const Board = () => {
    return (
        <div className="board">
          <div className="board-row">
             <Square Value={0}/>
             <Square Value={1}/> 
             <Square Value={2}/>  
         </div>
          <div className="board-row">
             <Square Value={3}/>
             <Square Value={4}/> 
             <Square Value={5}/> 
         </div> 
          <div className="board-row">
             <Square Value={6}/>
             <Square Value={7}/> 
             <Square Value={8}/>               
         </div> 
        </div>
    )
}

export default Board
