import React from "react";
import Box from '@mui/material/Box';
import { Divider } from "@mui/material";

export default function Footer() {
    return (
        <>
            <Divider />
            <Box sx={{ backgroundColor: "white", height: "200px", width: "100%" }}>
                <p style={{ color: "#02e0b4", textAlign: "center", paddingTop: "50px" }}>Lauren Kim</p >

                <p style={{ color: "#02e0b4", textAlign: "center" }}>Pill Finder 2022</p>


            </Box>
        </>
    )
}