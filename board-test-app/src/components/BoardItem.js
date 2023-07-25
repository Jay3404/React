import React from 'react'



const BoardItem = ({board}) => {
    const {boardNo, boardTitle, boardContent, boardWriter, boardRegdate, boardCnt} = board;
    
  return (
    <>
        <div>
            boardNo: {boardNo}
        </div>
        <div>
            boardTitle: {boardTitle}
        </div>
        <div>
            boardContent: {boardContent}
        </div>
        <div>
            boardWriter: {boardWriter}
        </div>
        <div>
            boardRegdate: {boardRegdate}
        </div>
        <div>
            boardCnt: {boardCnt}
        </div>
        <div>
            ----------------------------------------------------------------------------------
        </div>
        
    </>
  )
}

export default BoardItem