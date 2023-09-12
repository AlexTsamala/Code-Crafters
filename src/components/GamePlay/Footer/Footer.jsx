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
    // კარგი იქნება თუ ეს ტაიმერი პირველი გეიმის, აიქონზე კლიკისას დაიწყება


    return (

        <div className='droebiti'>
            {/* დროებითია დივ, როცა თამაშის დივი დაემატება, mAIN-ს და FOOTER-ს ერთი div ექნებათ */}

            <div className="footerBox">
                <div className='showInfoBox'>
                    <p className='fontFamily' style={{fontSize:'15px', color: '#7191A5გი'}}>Time</p>
                    <p>
                        {timing}
                    </p>
                </div>
                <div className='showInfoBox'>
                    <p className='fontFamily' style={{fontSize:'15px', color: '#7191A5'}}>Moves</p>
                    <p>
                        {/* მოძრაობა უნდა შემოიტანო */}
                    </p>
                </div>

            </div>
        </div>
    )
}