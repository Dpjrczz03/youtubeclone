import React from 'react';

function Leftsidebar(props) {
    return (
        <div className="sidebar">
        <ul className="sideitem">
            <li className="sideelement">
                Home
            </li>
            <li className="sideelement">
                Shorts
            </li>
            <li className="sideelement">
                Subscriptions
            </li>

            <li className="sideelement">
                YouTube Music
            </li>
            <li className="hori">
                <hr/>
            </li>
        </ul>

        </div>
    );
}

export default Leftsidebar;