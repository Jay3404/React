import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import Home from "./components/Home";
import InsertBoard from "./components/InsertBoard";
import Join from "./components/Join";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);


  return (
    <Routes>
      <Route path="/" element={<Layout isLogin={isLogin}></Layout>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/join" element={<Join></Join>}></Route>
        <Route path="/login" element={<Login setIsLogin={setIsLogin}></Login>}></Route>
        <Route path="/board-list" element={<BoardList></BoardList>}></Route>
        <Route path="/insert-board" element={<InsertBoard></InsertBoard>}></Route>
        <Route path="/board/:boardNo" element={<Board></Board>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
