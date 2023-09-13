// import Button from '../shared/button/button';
import './Footer.css';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [timing, setTiming] = useState(0);

         useEffect(() => {


       const intervalId = setInterval(() => {
            setTiming((preTime) => preTime + 1);
        }, 1000)

        return () => {clearInterval(intervalId)};

    },[]);


    const minutes = Math.floor(timing / 60);
    const seconds = timing % 60;

    // კარგი იქნება თუ ეს ტაიმერი პირველი გეიმის, აიქონზე კლიკისას დაიწყება


    return (

        <div className='droebiti'>
            {/* დროებითია დივ, როცა თამაშის დივი დაემატება, mAIN-ს და FOOTER-ს ერთი div ექნებათ */}

            <div className="footerBox">
                <div className='showInfoBox'>
                    <p className='fontFamily timeText' >Time</p>
                    <p className='fontFamily timeClock' >
                    <p>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</p>
                    </p>
                </div>
                <div className='showInfoBox'>
                    <p className='fontFamily timeText' >Moves</p>
                    <p className='fontFamily timeClock'>
                        {/* მოძრაობა უნდა შემოიტანო, props-ად უნდა მივიღო  Game ფოლდერიდან */}
                        ??
                    </p>
                </div>

            </div>
        </div>
    )
}