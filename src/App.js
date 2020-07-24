import React, {useState} from 'react';
import './App.css';
import Counter from './Counter'


export default function App() {

    const [onUpdate, setUpdate] = useState(3);
    const addCounter = () => {
        setUpdate(onUpdate + 1)
    }
    const deleteCounter = () => {
        if (onUpdate <= 1) {
            return onUpdate;
        } else {
            setUpdate(onUpdate - 1)
        }
    }
const plus = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
    <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>

    const del= <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
    return (
        <div className="App">
            <h2>Counter</h2>
            {Array.apply(0, Array(onUpdate)).map(() => {
                return <Counter/>
            })}
            <button className="btn btn-outline-dark" onClick={addCounter}>{plus}</button>
            <button className="btn btn-outline-dark" onClick={deleteCounter}>{del}</button>
        </div>
    );
}

