import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  // const loadData = () => {
  //   // axios로 api 데이터 받아오기
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then
  //   (response => {
  //     console.log(response);
  //     setData(response.data)
  //   })
  // }

  async function loadData() {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=b8bfe69baae44bd983dcc4fdf960a225');
      setData(response.data);
    } catch(error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <div>
        <button onClick={loadData()}>데이터 불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data)} readOnly={true}></textarea>}
    </div>
  );
}

export default App;
