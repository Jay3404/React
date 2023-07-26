import React from 'react'
import { ColorConsumer } from '../contexts/color';

// 색상 표에 표출할 색상 배열
const colorArr = ['black', 'red', 'green', 'blue', 'yellow', 'orange', 'gray', 'violet'];

const SelectColor = () => {
  return (
    <div>
        <h1>색상 선택</h1>
        <ColorConsumer>
        {value => (
                <div style={{display: 'flex'}}>
                    {colorArr && colorArr.map(
                        (color, index) => (
                            <div key={index} style={{width: '25px', height: '25px', background: color, cursor: 'pointer'}} 
                                onClick={() => value.actions.setColor(color)} 
                                onContextMenu={
                                    (e) => {
                                            e.preventDefault(); 
                                            value.actions.setSubColor(color);
                                        }}>
                            </div>
                        )
                    )}
                </div>
            )
        }
        </ColorConsumer>
        <hr/>
    </div>
  )
}

export default SelectColor