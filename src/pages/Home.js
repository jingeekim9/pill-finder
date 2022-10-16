import React, { useState, useCallback, useEffect } from "react";
import ShowImage from './ShowImage';

import DropBox from './DropBox';
import Search from "./Search";
import { Box, Divider, Typography, Container } from "@mui/material";

export default function Home() {
    const [image, setImage] = useState("");
    const [imageName, setImageName] = useState("");
    const [temp, setTemp] = useState("");
    const [link, setLink] = useState(null);

    const [isLoading, setIsLoading] = useState(false)

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



    useEffect(() => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)

        }, 2200);

    }, [])

    if (isLoading) {
        return (

            <Box width={'100vw'} height={"100vh"} backgroundColor={"#e4d0f2"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection="column" >
                <img
                    alt="img"
                    style={{ width: "500px", height: "500px", marginTop: "-300px" }}
                    src="https://media2.giphy.com/media/2ux0WPoTrYS82F8si2/giphy.gif?cid=790b7611e30fea56d0af482ab7a73a69da6b981e88841d40&rid=giphy.gif&ct=s"></img>
                <Typography variant="overline" sx={{ mt: -15, color: "#8230b8" }}>Find Your Pill</Typography>
            </Box>
        )
    } else {

        return (


            <Container maxWidth='md' style={{ transition: "1000ms" }}>

                <Box mt={5} mb={5}>
                    <Typography variant="overline" sx={{ fontSize: "20px" }}>PILL FINDER</Typography><br /><br />

                    <Typography variant="overline">👉 Pill Finder is a simple online service that helps you find detailed information about your pill. </Typography><br />
                    <Typography variant="overline">👉 Take a picture of your pill and upload below to classify the pill. </Typography><br />
                    <Typography variant="overline">👉 To learn more about the pill in text, use the Pill Search Options!</Typography><br />

                </Box>


                <div >
                    <DropBox onDrop={onDrop} />
                    <ShowImage image={image} name={imageName} temp={temp} setLink={setLink} />
                    {link &&
                        <div style={{ textAlign: 'center', marginTop: 50 }}>
                            <button type="button" className="btn" onClick={() => { window.open(link, "_blank") }}>Go To Link</button>
                        </div>
                    }

                </div>

                <Divider sx={{ mt: 5, mb: 5 }} />
                <div>
                    <Search />
                </div>




                <Box mb={7}>
                    <Typography variant="overline" style={{ fontSize: "20px" }}>Project Description</Typography>
                    <Box className="aboutContainer">
                        <Typography variant="overline">The website intends to identify the pill’s imprint, color, and shape and predict the correct pill name using image recognition. Many people, especially seniors, struggle to identify pills because of their small size and similar colors. Although there are many pill-identifying websites, the users need to input all the information manually. Therefore, the website aims to be a great tool by detecting the pill's characteristics using just the image. The website is a tool that directs the user to the pill identifier page of the website “drugs.com”. The accuracy of the identified pill may vary, so it is important to cross-check any results.</Typography>
                    </Box>
                </Box>




            </Container>
        )
    }
}