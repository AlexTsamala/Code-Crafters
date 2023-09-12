// import Button from '../shared/button/button';
import './Footer.css';

export default function Footer() {


    return (

        <div className='droebiti'>
            {/* დროებითია დივ, როცა თამაშის დივი დაემატება, mAIN-ს და FOOTER-ს ერთი div ექნებათ */}

            <div className="footerBox">
                <div className='showInfoBox'>
                    <p className='fontFamily' style={{fontSize:'15px', color: '#7191A5'}}>Time</p>
                    <p>
                        {/* დრო უნდა შემოიტანო */}
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