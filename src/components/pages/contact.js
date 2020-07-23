import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";


export default function() {
    return(
        <div className="content-page-wrapper">
        <div className="left-column" 
        style={{
            background: "url(" + contactPagePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPostion: "cover"
        }}
        ></div>
        <div className="right-column">
            <div className="contact-bullet-points">
                <div className="bullet-point-group">
                    <div className="icon">
                    <FontAwesomeIcon icon="mobile" />
                    </div>
                    <div className="text">
                        337-344-5621
                    </div>
                </div>
                    <div className="bullet-point-group">
                    <div className="icon">
                    <FontAwesomeIcon icon="envelope-square" />
                    </div>
                    <div className="text">
                        broturn@gmail.com
                    </div>
                    </div>
                    <div className="bullet-point-group">
                    <div className="icon">
                    <FontAwesomeIcon icon="map-pin" />
                    </div>
                    <div className="text">
                        Lafayette,LA
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
}