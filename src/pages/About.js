import React from "react";
import Box from '@mui/material/Box';
import { Typography, Container } from "@mui/material";
export default function About() {
    return (

        <Container maxWidth={"md"} style={{ transition: "1000ms" }}>

            <Box mt={5} mb={7} display={'flex'} justifyContent='space-between'>
                <Box >
                    <Typography variant="overline" sx={{ fontSize: "20px" }}>Lauren Kim</Typography><br /><br />

                    <Typography variant="overline">👉 XXth Year at XX School</Typography><br />
                    <Typography variant="overline">👉 Loves to (hobby) </Typography><br />
                    <Typography variant="overline">👉 Loves to (hobby2)</Typography><br />

                </Box>
                <Box mt={1}>
                    <img
                        alt="profile"
                        style={{ width: 150, height: 150 }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6OSkMVt7i1BRqfbWDG0qhrM0SMhF0cXOfg&usqp=CAU"></img>
                </Box>
            </Box>



            <Box mb={7}>
                <Typography variant="overline" style={{ fontSize: "20px" }}>Project Description</Typography>
                <Box className="aboutContainer">
                    <Typography variant="overline">The website intends to identify the pill’s imprint, color, and shape and predict the correct pill name using image recognition. Many people, especially seniors, struggle to identify pills because of their small size and similar colors. Although there are many pill-identifying websites, the users need to input all the information manually. Therefore, the website aims to be a great tool by detecting the pill's characteristics using just the image. The website is a tool that directs the user to the pill identifier page of the website “drugs.com”. The accuracy of the identified pill may vary, so it is important to cross-check any results.</Typography>
                </Box>
            </Box>


            <Box mb={7}>
                <Typography variant="overline" style={{ fontSize: "20px" }}>Who Am I</Typography>
                <Box className="aboutContainer">
                    <Typography variant="overline">I am Lauren and I am a student at an international school in Seoul, South Korea. Ever since high school, I really liked chemistry. I was intrigued by the intricacy of the interactions between the elements. Naturally, connecting my interest to everyday life, I was drawn to pharmaceuticals. At that point, not just for the chemistry but also because I was enthralled by the fact that it makes people’s lives better. So, I wanted to contribute to this with programming which was my second passion. While pills are taken to improve people’s health, they can also be very detrimental if there is a mistake. I noticed many accidents involving misusage of the pharmaceuticals. Minorities like elderlies and people with disabilities are more vulnerable as they tend to take more pills than normal people and because it is more difficult for them to distinguish the small and similar-looking shapes. To address this issue, I searched several pill-identifying websites. However, I found the difficulty in using these programs because they required people to actually type the imprints in order to find the pill. I thought programming can make this process way easier with image recognition because instead of typing in the imprints, people can just take the picture of their pills. Although image recognition is not perfect, I hope that my program could make people’s lives better and healthier. I want to continue these types of projects that could tackle issues within our everyday lives.  </Typography>
                </Box>
            </Box>

            <Box mb={7}>
                <Typography variant="overline" style={{ fontSize: "20px" }}>Start of Coding</Typography>
                <Box className="aboutContainer">
                    <Typography variant="overline">Since the project was mainly programming based, I will share my brief journey into programming. I first got into it through an elective course about Java in my freshman year of high school. I knew nothing about programming but I just took it because it sounded cool. The Java class gave me a glimpse of what coding is and what it can do. I still remember how excited I was when I pressed the ‘run’ button and it returned a page that I designed. Since then, I wanted to have more grasp of the subject. I attended several boot camps, one of them being a data science boot camp. Because I like learning different things, I have various interests other than programming and I did not want to give up on them. However, it was so captivating to me how versatile and interdisciplinary data science can be. I was able to use my programming skills in relation to other subjects of interest like chemistry and biology. I was also fascinated by how data analysis and machine learning can bring science research to the next level. This fascination has led me to continue coding and participate in a data science internship and even start this project.
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}