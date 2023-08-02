import React from 'react'

const Pagenation = () => {
    return (

        <div></div>
        // <div style={{ textAlign: 'center' }}>
        //     <ul className="pagination" if="${boardList.totalElements > 0}"
        //         with="pageNumber = ${boardList.pageable.pageNumber},
        //          pageSize = ${boardList.pageable.pageSize},
        //          totalPages = ${boardList.totalPages},
        //          startPage = ${T(java.lang.Math).floor(pageNumber / pageSize) * pageSize + 1},
        //          tempEndPage = ${startPage + pageSize - 1},
        //          endPage = ${tempEndPage > totalPages ? totalPages : tempEndPage}">
        //         <li className="pagination-btn" if="${pageNumber > 0}">
        //             <Link to="@{/board/board-list(page=${pageNumber - 1})}">
        //                 이전
        //             </Link>
        //         </li>

        //         <li className="pagination-btn"
        //             each="page : ${#numbers.sequence(startPage, endPage)}">
        //             <Link to="@{/board/board-list(page=${page - 1})}"
        //                 text="${page}">

        //             </Link>
        //         </li>

        //         <li className="pagination-btn" if="${pageNumber < totalPages - 1}">
        //             <Link to="@{/board/board-list(page=${pageNumber + 1})}">
        //                 다음
        //             </Link>
        //         </li>
        //     </ul>
        // </div>
    )
}

export default Pagenation