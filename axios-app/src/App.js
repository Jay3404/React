import React, { useCallback, useState } from 'react';
import NewsPage from './pages/NewsPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NewsPage></NewsPage>}></Route>
      <Route path='/:category' element={<NewsPage></NewsPage>}></Route>
    </Routes>
  );
}

export default App;
