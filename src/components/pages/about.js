import React from 'react';
import profilePicture from "../../../static/assets/images/bio/me.png";

export default function() {
    return(
        <div className="content-page-wrapper">
        <div className="left-column" 
        style={{
            background: "url(" + profilePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPostion: "cover"
        }}
        ></div>
        <div className="right-column">
        I have always had a love for two things, learning and technology. 
        This is what beckoned me to go and get two assocates degrees in Information Technology.
        After difficulties in landing a job I decided to focus on my other love, learning. 
        That love inspired me to go and get a Bacholor's degree in education. 
        After three years in the classroom I have decided to give computing another go. Programming 
        has always been something that has allowed my love of technology and learning to meet. 
        I have always loved that in  programming  you take an empty screen and 
        create something beautiful to share with the world.
        </div>
        </div>
    );
}