// import Button from '../shared/button/button';
import "./Footer.css";
import { useEffect, useState } from "react";

export default function Footer({ numberOfMove, minutes, seconds }) {
  // კარგი იქნება თუ ეს ტაიმერი პირველი გეიმის, აიქონზე კლიკისას დაიწყება

  return (
    <div className="droebiti">
      {/* დროებითია დივ, როცა თამაშის დივი დაემატება, mAIN-ს და FOOTER-ს ერთი div ექნებათ */}

      <div className="footerBox">
        <div className="showInfoBox">
          <p className="fontFamily timeText">Time</p>
          <div className="fontFamily timeClock">
            <p>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</p>
          </div>
        </div>
        <div className="showInfoBox">
          <p className="fontFamily timeText">Moves</p>
          <p className="fontFamily timeClock">
            {/* მოძრაობა უნდა შემოიტანო, props-ად უნდა მივიღო  Game ფოლდერიდან */}
            {numberOfMove}
          </p>
        </div>
      </div>
    </div>
  );
}
