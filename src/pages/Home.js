import React, { useState, useCallback } from "react";
import ShowImage from './ShowImage';

import DropBox from './DropBox';
import Search from "./Search";
import { Divider } from "@mui/material";

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
        <div className="homeContainer">
            <div className="dropContainer">
                <DropBox onDrop={onDrop} />
                <ShowImage image={image} name={imageName} temp={temp} setLink={setLink} />
                {link &&
                    <div style={{ textAlign: 'center', marginTop: 50 }}>
                        <button type="button" className="btn" onClick={() => { window.open(link, "_blank") }}>Go To Link</button>
                    </div>
                }

            </div>

            <Divider sx={{ mt: 5, mb: 5 }} />
            <div className="searchContainer">
                <Search />
            </div>


        </div>
    )
}