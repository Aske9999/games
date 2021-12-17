import React, {useState} from 'react';
import RockScissorsPaper from "./RockScissorsPaper";
import GuessNumber from "./GuessNumber";

const App = () => {
    const [game, setGame] = useState(null)

    return (
        <div className="container">
            {
                !game && <div className="menu">
                    <div>
                        <h1 className="game">CHOOSE GAME</h1>
                        <div className="buttons">
                            <button className="game-btn" onClick={() => setGame(1)} type="button">Rock * Scissors * Paper</button>
                        </div>

                        <div className="buttons">
                            <button className="game-btn" onClick={() => setGame(2)} type="button">Guess Number</button>
                        </div>
                    </div>
                </div>
            }
            {game === 1 && <RockScissorsPaper/>}
            {game === 2 && <GuessNumber/>}
        </div>
    );
};

export default App;