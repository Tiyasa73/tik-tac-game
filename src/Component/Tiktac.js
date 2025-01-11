import React, { useState } from "react";

function Tiktac(){
  const [board,setboard]=useState(Array(9).fill(null));
  const[isXturn,setIsXturn]=useState(true);
  const [winner,setWinner]=useState(null);
  const renderButton =(index)=>{
    return (
      <button className="squre" onClick={()=>handleClick(index)}>{board[index]}</button>
    );
  }
  const handleClick=(index)=>{
    console.log(index,"Clicked");
    const newBoard=[...board];
    newBoard[index]=isXturn?"X":"O";
    setboard(newBoard);
    setIsXturn(!isXturn);
    const winnerCombination=checkAns(newBoard);
    if(winnerCombination){
      setWinner(newBoard[winnerCombination[0]]);
    }
  }
  const checkAns=(newBoard)=>{
    const Combination=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i=0;i<Combination.length;i++){
      const [a,b,c]=Combination[i];
      if(board[a]===board[b] && board[b]===board[c]){
        return Combination[i];
      }
    }
    return null;
  }
  const handleReset=()=>{
    setboard(Array(9).fill(null));
    setWinner(null);
  }

  return (
    <>
    <div className="board">
      <div className="board-row">
        {renderButton(0)}
        {renderButton(1)}
        {renderButton(2)}
      </div>
      <div className="board-row">
        {renderButton(3)}
        {renderButton(4)}
        {renderButton(5)}
      </div>
      <div className="board-row">
        {renderButton(6)}
        {renderButton(7)}
        {renderButton(8)}
      </div>
      {winner && <div className="winner">{winner} is winner of this Game</div>}
      <button className="reset" onClick={handleReset}>Reset</button>
    </div>
    </>
  );
}
export default Tiktac;