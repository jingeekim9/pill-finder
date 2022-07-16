import React from "react";
import Box from '@mui/material/Box';
export default function About() {
    return (
        <Box style={{ minHeight: "60vh" }} display={"flex"} justifyContent={"center"} width={"50%"}
            ml={"25%"} mr={"25%"} mt={5} flexDirection={"column"}>

            <p className="label-text" style={{ fontSize: "30px" }}>About</p>
            <Box className="aboutContainer">
                <p>The website intends to identify the pill’s imprint, color, and shape and predict the correct pill name using image recognition. Many people, especially seniors, struggle to identify pills because of their small size and similar colors. Although there are many pill-identifying websites, the users need to input all the information manually. Therefore, the website aims to be a great tool by detecting the pill's characteristics using just the image. The website is a tool that directs the user to the pill identifier page of the website “drugs.com”. The accuracy of the identified pill may vary, so it is important to cross-check any results.</p>
            </Box>
        </Box>
    )
}