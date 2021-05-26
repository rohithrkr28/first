import React from 'react'

function UseEffect() {
   // const [text, settext] = useState('');
   // const [copytext, setcopytext] = useState('');

    return(
        <div>
            <input type='text' placeholder='Enter Your Name' /*value={text} onChange={e => settext(e.target.value)}*/></input><br/>
            <input type='text' placeholder='Entered name is displayed here' ></input><br/>
        </div>
    );
};

export default UseEffect;