import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BoardItem from './BoardItem';
import styled from 'styled-components';

const BoardList = () => {
    const [boards, setBoards] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

      const loadData = async () => {
        try {
          const response = await axios.get('http://localhost:9090/api/board-list');
          setBoards(() => response.data.pageItems.content);
          console.log("보드")
          console.log(JSON.stringify(boards));
        } catch(error) {
          console.log(error);
        }
      }

      loadData();

    }, [boards])



    if(loading) {
      return <>로딩 중</>
    }

    if(!boards) {
      return null;
    }

  return (
    <>
      {boards && boards.map(
        board => (
          <BoardItem key={board.boardNo} board={board}></BoardItem>
        )
      )}
    </>
  );
};

export default BoardList