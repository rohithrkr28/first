import React, {useState,/*useEffect,useRef*/} from 'react'

function Add() {

    const [text,setText] = useState('')
    const [textlist, settextlist] = useState([]);

    const addtext = () => {
            /*const textDetails = {
                value: text,
            }*/
            settextlist([...textlist,text])
            setText('');
    };
    console.log(textlist);
    return(
        <div>
            <input type='text' placeholder='Enter the task' onChange={(e)=>setText(e.target.value)} />
            <button onClick={addtext}>Add</button>
            <ul>
                {textlist.map(t =>
                <li>{t}</li>)}
            </ul>
        </div>
    );
};

export default Add;