
import './SoloFinish.css';
// import Button from '../../shared/button/button';

// eslint-disable-next-line react/prop-types
export default function SoloFinish({seconds, minutes}) {
    // აქ მაღლა numberOfMove პროპს ჩაამატე

    return (
        <div className='soloFinishBigBox'>
            <div className="soloFinish">
                <span className='fontFamily youDidItText'>You did it!</span>
                <span className='fontFamily gameOverSoloText'>Game over! Here`s how you got on…</span>
                <div className='timeAndMoveBox'>
                    <span className='fontFamily timeElapsed'>Time Elapsed</span>
                    <span className='fontFamily showTimeAndMove'>
                    {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
                    </span>
                </div>
                <div className='timeAndMoveBox marginAdd'>
                    <span className='fontFamily timeElapsed'>Moves Taken</span>
                    <span className='fontFamily showTimeAndMove'>
                        {/* {numberOfMove} */} Moves
                    </span>
                </div>
                <button className='fontFamily soloRestart'>Restart</button>
                <button className='fontFamily soloSetup marginAdd15'>Setup New Game</button>
            </div>
        </div>
          
    )
}