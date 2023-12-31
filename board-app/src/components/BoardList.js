import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BoardListItem from './BoardListItem';

const BoardList = () => {
    const [boardList, setBoardList] = useState([
        {
            boardNo: 1,
            boardTitle: '제목',
            boardContent: '내용',
            boardWriter: '작성자',
            boardRegdate: '2023-08-01',
            boardCnt: 0
        },
        {
            boardNo: 2,
            boardTitle: '제목',
            boardContent: '내용',
            boardWriter: '작성자',
            boardRegdate: '2023-08-01',
            boardCnt: 0
        },
        {
            boardNo: 3,
            boardTitle: '제목',
            boardContent: '내용',
            boardWriter: '작성자',
            boardRegdate: '2023-08-01',
            boardCnt: 0
        },
        {
            boardNo: 4,
            boardTitle: '제목',
            boardContent: '내용',
            boardWriter: '작성자',
            boardRegdate: '2023-08-01',
            boardCnt: 0
        },
        {
            boardNo: 5,
            boardTitle: '제목',
            boardContent: '내용',
            boardWriter: '작성자',
            boardRegdate: '2023-08-01',
            boardCnt: 0
        },
    ]);

    useEffect(() => {
        const loadBoardList = async () => {
            try {
                const response = await axios.get('http://localhost:9090/board/board-list');
                console.log(response);
                setBoardList(response.data.pageItems.content);
            } catch (e) {
                console.log(e);
            }
        }
        loadBoardList();
    }, [])



    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h3>게시글 목록</h3>
            <form id="searchForm" >
                <table style={{ width: '700px', borderCollapse: 'collapse', border: '1px solid black' }}>
                    <tr>
                        <td style={{ textAlign: 'right' }}>
                            <select name="searchCondition">
                                <option value="all">전체</option>
                                <option value="title">제목</option>
                                <option value="content">내용</option>
                                <option value="writer">작성자</option>
                            </select>
                            <input type="text" name="searchKeyword"></input>
                            <button type="button" id="btnSearch">검색</button>
                        </td>
                    </tr>
                </table>
            </form>

            <table id="boardTable" style={{ width: '700px', borderCollapse: 'collapse', border: '1px solid black' }}>
                <tr>
                    <th style={{ background: 'skyblue', width: '100px' }}>번호</th>
                    <th style={{ background: 'skyblue', width: '200px' }}>제목</th>
                    <th style={{ background: 'skyblue', width: '150px' }}>작성자</th>
                    <th style={{ background: 'skyblue', width: '150px' }}>등록일</th>
                    <th style={{ background: 'skyblue', width: '100px' }}>조회수</th>
                </tr>
                {boardList && boardList.map(board => <BoardListItem key={board.boardNo} board={board}></BoardListItem>)}

            </table>
            <br />

            <br />
            <Link to="/insert-board">새 글 등록</Link>
        </div>
    );
};

export default BoardList;