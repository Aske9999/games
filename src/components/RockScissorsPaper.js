import React, {useState} from "react";
import rock from '../images/rock.jpg'
import scissors from '../images/scissors.png'
import paper from '../images/paper.png'

const RockScissorsPaper = () => {
    const images = {
        'Rock': rock,
        'Scissors': scissors,
        'Paper': paper
    }
    const playerInitial = JSON.parse(localStorage.getItem('resultPlayer') || 0)
    const compInitial = JSON.parse(localStorage.getItem('resultComp') || 0)

    const [playerStr, setPlayerStr] = useState("")
    const [compStr, setCompStr] = useState("")
    const [result, setResult] = useState("")
    const [playerScore, setPlayerScore] = useState(playerInitial)
    const [compScore, setCompScore] = useState(compInitial)

    const playerClick = (playerAction) => {
        const actions = ['Rock', 'Scissors', 'Paper']
        const compAction = actions[Math.floor(Math.random() * 3)]

        if (playerAction === compAction) {
            setResult('DRAW!')
        } else if (
            (playerAction === 'Rock' && compAction === 'Scissors') ||
            (playerAction === 'Paper' && compAction === 'Rock') ||
                (playerAction === 'Scissors' && compAction === 'Paper')
        ) {
            setResult('YOU WON!')
            setPlayerScore(playerScore + 1)
            localStorage.setItem('resultPlayer', String(playerScore + 1))
        } else {
            setResult('YOU LOST!')
            setCompScore(compScore + 1)
            localStorage.setItem('resultComp', String(compScore + 1))
        }
        setPlayerStr(images[playerAction])
        setCompStr(images[compAction])
    }

    const cleanAll = () => {
        localStorage.clear()
        setPlayerScore("")
        setCompScore("")
        setResult("")
    }


    return (
        <div className="rock">
            <h1 className="rock-title">ROCK * SCISSORS * PAPER</h1>
            <div className="rock-box">
                <div className="row">
                    <div className="col-6">Player: {playerScore}
                        <div className="game-box">
                            {<img src={playerStr} alt=""/> }
                        </div>
                    </div>
                    <div className="col-6">Computer: {compScore}
                        <div className="game-box">
                            {<img src={compStr} alt=""/> }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="result">{result}</span>
            </div>
            <div className="rock-buttons">
                <button className="rock-btn" onClick={() => playerClick('Rock')} type="button">Rock</button>
                <button className="rock-btn" onClick={() => playerClick('Scissors')} type="button">Scissors</button>
                <button className="rock-btn" onClick={() => playerClick('Paper')} type="button">Paper</button>
            </div>
            <button className="clean-btn" onClick={cleanAll}>CLEAN SCORE</button>
        </div>
    )
}

export default RockScissorsPaper