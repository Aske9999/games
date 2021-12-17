import React, {useState} from 'react';

const GuessNumber = () => {

    const [num, setNum] = useState("")
    const [guess, setGuess] = useState(Math.ceil(Math.random() * 10))
    const [result, setResult] = useState("")
    const [tryAgain, setTryAgain] = useState(3)
    const [wonScore, setWonScore] = useState(+localStorage.getItem('won'))
    const [lostScore, setLostScore] = useState(+localStorage.getItem('lost'))
    const [help, setHelp] = useState("")


    const guessing = () => {
        if (guess === +num) {
            setResult('YOU WON!')
            setNum('')
            setWonScore(wonScore + 1)
            setTryAgain(0)
            localStorage.setItem('won', String(wonScore + 1))
        } else {
            if (tryAgain - 1 === 0) {
                setResult('YOU LOST!')
                setLostScore(lostScore + 1)
                localStorage.setItem('lost', String(lostScore + 1))

            } else {
                if (help){
                    setHelp(num > guess ? 'UP' : 'DOWN')
                }
                setResult('TRY AGAIN!')
            }
            setTryAgain(tryAgain - 1)

        } setNum("")
    }

    const clearAll = () => {
        setGuess(Math.ceil(Math.random() * 10))
        setTryAgain(3)
        setResult("")
        localStorage.clear()
        setHelp("")
        setWonScore(+localStorage.getItem('won'))
        setLostScore(+localStorage.getItem('lost'))
    }

    const playAgain = () => {
        setGuess(Math.ceil(Math.random() * 10))
        setTryAgain(3)
        setResult("")
    }

    const guessingNum = (e) => {
        const n = Math.max(Math.min(+e.target.value, 10), 0) || ""
        setNum(n)
    }

    const needHelp = (e) => {
        setHelp(e.target.checked)
    }

    return (
        <div className="guess">
            <span className="lives">LIVES: {tryAgain}</span>
            <div className="won-lost">Won: {wonScore}</div>
            <div className="won-lost">Lost: {lostScore}</div>
            <div className="guess-box">
                <input className="guess-input" value={num} onChange={guessingNum} type="number"/>
                {!!tryAgain && <button className="guess-btn" disabled={!num} onClick={guessing}>GUESS</button>}
                {!tryAgain && <button className="guess-btn" onClick={playAgain}>RESTART</button>}
                <label className="guess-help-text" htmlFor="">
                    <input className="guess-checkbox" onChange={needHelp} type="checkbox"/>
                    I need help
                </label>
                <div>{help}</div>
            </div>
            <div className="result">{result}</div>
            <div><button className="clear-all" onClick={clearAll}>CLEAR ALL</button></div>
        </div>
    )
}

export default GuessNumber