import { Route, Routes } from 'react-router-dom';
import Join from './components/Join';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path="/join" element={<Join></Join>}></Route>
    </Routes>
  );
}

export default App;
