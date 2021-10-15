'use strict'

const DRUM = (
    <div>
        <h1 id="main-title">Play Drum Machine !</h1>
        <div id="display">
            <div className="drum-pad">Q</div>
            <div className="drum-pad">W</div>
            <div className="drum-pad">E</div>
            <div className="drum-pad">A</div>
            <div className="drum-pad">S</div>
            <div className="drum-pad">D</div>
            <div className="drum-pad">Z</div>
            <div className="drum-pad">X</div>
            <div className="drum-pad">C</div>
        </div>
    </div>
);

ReactDOM.render(DRUM, document.getElementById("drum-machine"));
