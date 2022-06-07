import React, { useState, useCallback } from "react";
import ShowImage from './ShowImage';

import DropBox from './DropBox';

export default function Home() {
    const [image, setImage] = useState("");
    const [imageName, setImageName] = useState("");
    const [temp, setTemp] = useState("");
    const [link, setLink] = useState(null);

	const onDrop = useCallback((acceptedFiles) => {
		acceptedFiles.map((file, index) => {
			const reader = new FileReader();

            setImageName(file.name);
            setTemp(file);

			reader.onload = function (e) {
				setImage(e.target.result);
			};

			reader.readAsDataURL(file);
			return file;
		});
	}, []);

    return (
        <div className="imageBackground">
            <DropBox onDrop={onDrop} />
            <ShowImage image={image} name={imageName} temp={temp} setLink={setLink} />
            { link  && 
                <button type="button" class="btn btn-success" onClick={() => {window.open(link, "_blank")}}>Go To Link</button>
            }
        </div>
    )
}