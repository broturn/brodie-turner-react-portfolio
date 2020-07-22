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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi risus, eleifend nec risus elementum, pellentesque feugiat tortor. Ut id finibus ligula. Mauris et tellus non purus semper scelerisque quis vel dui. Nunc vehicula commodo gravida. Proin dictum et tellus non egestas. Vestibulum vestibulum augue pretium tristique fermentum. Phasellus magna tortor, gravida at purus ac, ultrices ornare arcu. Nulla facilisi. Nam dapibus, erat in cursus condimentum, nisi diam consequat dolor, in ornare arcu augue vel ex. Praesent tempor congue risus sit amet luctus. Donec ullamcorper accumsan lacus, ut convallis lorem elementum vitae. In interdum enim et leo convallis, id laoreet nisl feugiat. Quisque sagittis, tellus eget vulputate luctus, nibh leo interdum ipsum, sit amet tempor orci erat eget purus. Nam varius nibh quam, nec imperdiet risus ullamcorper eget.
        </div>
        </div>
    );
}