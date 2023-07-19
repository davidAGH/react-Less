import { useState } from "react";

export function Game() {
    const [guess, setGuess] = useState('');
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [attempts, setAttempts] = useState(0);
    const [feedback, setFeedback] = useState('');
    
    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
    
    function handleGuessChange(event) {
        setGuess(event.target.value);
    }
    
    function handleGuessSubmit(event) {
        event.preventDefault();
        const userGuess = parseInt(guess, 10);
    
        if (userGuess === randomNumber) {
            setFeedback(`Поздравляем! Вы угадали число ${randomNumber} с ${attempts} попыток!`);
        } else if (userGuess < randomNumber) {
            setFeedback('Попробуйте число больше');
        } else {
            setFeedback('Попробуйте число меньше');
        }
    
        setAttempts(attempts + 1);
        setGuess('');
    }

    return (
        <div>
            <h1>"Угадай число"</h1>
            <form onSubmit={handleGuessSubmit}>
                <input type="number" value={guess} onChange={handleGuessChange} />
                <button type="submit">Угадать</button>
            </form>
            <p>{feedback}</p>
        </div>
    )
}
