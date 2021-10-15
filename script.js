'use strict'

const DRUM = (
    <div>
        <h1 id="main-title">Play Drum Machine !</h1>
        <div id="display">
            <div className="drum-pad" id="drum-1">
                Q
                <audio src="sample1.wav" type="audio/wav" id="Q" className="clip">
                </audio>
            </div>
            <div className="drum-pad" id="drum-2">
                W
                <audio src="sample2.wav" type="audio/wav" id="W" className="clip">
                </audio>
            </div>
            <div className="drum-pad" id="drum-3">
                E
                <audio src="sample3.wav" type="audio/wav" id="E" className="clip">
                </audio>
            </div>
            <div className="drum-pad" id="drum-4">
                A
                <audio src="sample4.wav" type="audio/wav" id="A" className="clip">
                </audio>
            </div>
            <div className="drum-pad" id="drum-5">
                S
                <audio src="sample5.wav" type="audio/wav" id="S" className="clip">
                </audio>
            </div>
            <div className="drum-pad" id="drum-6">
                D
                <audio src="sample6.wav" type="audio/wav" id="D" className="clip">
                </audio>
            </div>
            <div className="drum-pad" id="drum-7">
                Z
                <audio src="sample7.wav" type="audio/wav" id="Z" className="clip">
                </audio>
            </div>
            <div className="drum-pad" id="drum-8">
                X
                <audio src="sample8.wav" type="audio/wav" id="X" className="clip">
                </audio>
            </div>
            <div className="drum-pad" id="drum-9">
                C
                <audio src="sample9.wav" type="audio/wav" id="C" className="clip">
                </audio>
            </div>
        </div>
    </div>
);

ReactDOM.render(DRUM, document.getElementById("drum-machine"));

const buttons = document.getElementsByClassName("drum-pad");
for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        event.target.firstElementChild.currentTime = 0;
        event.target.firstElementChild.play();
    });
}

document.addEventListener('keydown', function(event) {
    switch(event.keyCode){
        case 81 : 
            document.getElementById("Q").currentTime = 0;
            document.getElementById("Q").play();
            break;
        case 87 : 
            document.getElementById("W").currentTime = 0;
            document.getElementById("W").play();
            break;
        case 69 : 
            document.getElementById("E").currentTime = 0;
            document.getElementById("E").play();
            break;
        case 65 :
            document.getElementById("A").currentTime = 0;
            document.getElementById("A").play();
            break;
        case 83 :
            document.getElementById("S").currentTime = 0;
            document.getElementById("S").play();
            break;
        case 68 :
            document.getElementById("D").currentTime = 0;
            document.getElementById("D").play();
            break;
        case 90 :
            document.getElementById("Z").currentTime = 0;
            document.getElementById("Z").play();
            break;
        case 88 :
            document.getElementById("X").currentTime = 0;
            document.getElementById("X").play();
            break;
        case 67 :
            document.getElementById("C").currentTime = 0;
            document.getElementById("C").play();
            break;
    }
});

