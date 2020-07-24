import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Counter(props) {

    const array = [1,2,3];
    const [count, setCount] = useState(0);
    const updateCounter = (n) => {
        setCount(count + n);
    }

    return (

        <div className="App" style={{margin: "30px"}}>
            {array.map(() => {})}
            <button className='btn btn-outline-dark' onClick={() => updateCounter(+3)}>+3</button>
            <button className='btn btn-outline-dark' onClick={() => updateCounter(+2)}>+2</button>
            <button className='btn btn-outline-dark' onClick={() => updateCounter(+1)}>+1</button>

           <button className='btn btn-secondary btn-lg"'>{count}</button>

            <button className='btn btn-outline-dark' onClick={() => updateCounter(-1)}>-3</button>
            <button className='btn btn-outline-dark' onClick={() => updateCounter(-1)}>-2</button>
            <button className='btn btn-outline-dark' onClick={() => updateCounter(-1)}>-1</button>

        </div>


    );
}


