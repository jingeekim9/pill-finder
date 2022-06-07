import React from "react";

function Image({ image }) {
	return (
        <div style={{display: 'inline-block'}}>
            <img alt='' src={image} />
        </div>
	);
}

export default Image;