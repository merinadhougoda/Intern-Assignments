import React, { useState } from 'react';

const Counter = () => {

    const [newValue, setValue] = useState();
    const [num, setNum] = useState(0);

    const valueEvent = (e) => {
        const number = Number(e.target.value);
        setValue(number);
        setNum(number);
    }

    const increaseNum = () => {
        setNum(num + 1);
    };

    const decreaseNum = () => {
        if (num > 0){
            setNum(num - 1);
        } else {
            alert('Reached Limit 0');
            setNum(0);
        }
    };

    return (
        <>
            <div className='counter'>
                <div className='counter-body'>
                    <h2>Counter</h2>
                    <input className="input_field" type="number" placeholder="Enter a Value" value={newValue} onChange={valueEvent}/>
                    <h1> {num} </h1>
                    <div className='counter-btn'>
                        <button onClick={increaseNum}> Increment </button>
                        <button onClick={decreaseNum}> Decrement </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;