import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home';
import { useState } from 'react';
import { Game } from './component/game';
import { Count } from './component/count';
import { Color } from './component/color';

function App() {
    const [showText, setShowText] = useState('')
    const [click, setClick] = useState(false)
    const [text, setText] = useState([
        {name: 'John', age: '15',},
        {name: 'Josh', age: '15',},
        {name: 'Alice', age: '15',},
    ])
    

    const Show = (e) => {
        setShowText(e.target.value)
    }

    const Click = () => {
        if (click === false) {
            setClick(true);
        } else {
            setClick(false)
        }
    }
    

    return (
        <div className="App">
            {/* 1 state */}

            {/* <input type="text" onChange={Show}/>
            {console.log(showText)} */}

            {/* 2 state */}

            {/* {click === true?
                <p>Show</p>
                :
                <p>Hide</p>
            }
            <button onClick={Click}>Click</button> */}

            {/* 3 state */}

            {/* {
                text.map((i,j) => (
                    <div key={j}>
                        <p>{i.name}</p>
                        <p>{i.age}</p>
                    </div>
                ))
            } */}

            {/* 4 state */}
            <Count/>
            {/* 5 state */}
            <Game/>
            {/* 6 state */}
            <Color  colors={['red', 'blue', 'green', 'yellow']}/>
        </div>
    );
}

export default App;
