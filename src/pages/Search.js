





import { useState } from "react";

import TextField from "@mui/material/TextField";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

import React from "react";
import { PILLS } from '../data/pills';

export default function Search() {





    const colorsValues = Object.values(PILLS.color)
    const colorsKeys = Object.keys(PILLS.color)
    const [imprint, setImprint] = useState("")
    const [color, setColor] = useState("Any Color")
    const [shape, setShape] = useState("Round")

    const shapeKeys = Object.keys(PILLS.shape)
    const [url, setURL] = useState("")

    function handleSearch() {
        const updatedImprint = imprint.split(" ").join("+")
        const updatedColor = PILLS.color[color]
        const updatedShape = PILLS.shape[shape]

        const generatedURL = `https://www.drugs.com/imprints.php?imprint=${updatedImprint}&color=${updatedColor}&shape=${updatedShape}`
        setURL(generatedURL)

        window.open(
            generatedURL,
            '_blank' // <- This is what makes it open in a new window.
        );

    }

    return (

        <Box mb={15} >
            <p className='label-text'>Pill Search Options</p>

            <Box display={'flex'} justifyContent={'space-between'} flexDirection={"column"}
                rowGap={3}
            >

                <TextField fullWidth id="outlined-basic" label="Imprint" variant="outlined" onChange={(e) => { setImprint(e.target.value) }} />

                <Select
                    labelId="select-shape"
                    id="select-shape"
                    value={shape}
                    label="Shape"
                    fullWidth
                    onChange={(e) => { setShape(e.target.value) }}>

                    {shapeKeys.map((i) =>
                        <MenuItem value={i}>{i}</MenuItem>
                    )}
                </Select>

                <Select
                    labelId="select-label"
                    id="select-color"
                    value={color}
                    label="Color"
                    fullWidth
                    onChange={(e) => { setColor(e.target.value) }}>

                    {colorsKeys.map((i, indx) =>
                        <MenuItem value={i}>{i}</MenuItem>
                    )}
                </Select>
            </Box>
            <br /><br /><br />
            <Box display={"flex"} justifyContent="center">
                <Button variant="outlined" onClick={() => { handleSearch() }} style={{ width: "50%" }}>Search</Button>
            </Box>

        </Box >
    )
}