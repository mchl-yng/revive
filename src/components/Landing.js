import React, { useState, useEffect } from 'react';
import Header from "./Header";
import HeroSection from "./HeroSection";
import Showcase from './Showcase';
import { Box, Button, Link, Flex, Heading, useTheme } from '@chakra-ui/react';

const Landing = () => {

    useEffect(() => {
        document.title = 'Revive';
      }, []);

    const [headerText, setHeaderText] = useState("refreshing");
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText(false); // Start the fade-out animation by setting showText to false
            setTimeout(() => {
                setHeaderText((prevText) => {
                    const textVariations = ["refreshing", "recharging", "relaxing"];
                    const currentIndex = textVariations.indexOf(prevText);
                    const nextIndex = (currentIndex + 1) % textVariations.length;
                    setShowText(true); // Show the text again before changing to the next variation
                    return textVariations[nextIndex];
                });
            }, 200); // Wait for 0.2 seconds before changing the headerText and starting fade-in
        }, 3000); // Change text every 3 seconds (3000 milliseconds)

        return () => clearInterval(interval);
    }, [headerText]);

    const theme = useTheme();


    return (
        <Box>
            <Box display="flex" flexDirection="column" minH="100vh">
                <Header />
                <HeroSection />
            </Box>

            <Box id='learn-more' bg="blue.700">
                <Showcase
                    bigText="Log your emotions"
                    littleText="Nurture self-awareness and emotional intelligence."
                    image="https://i.imgur.com/1RUb2JW.png"
                    isTextOnLeft={true}
                    textColor='blue.100'
                />
            </Box>
            <Box bg="green.700">
                <Showcase
                    bigText="Maintain balance"
                    littleText="Harmonize mindful movement and revitalizing breaks."
                    image="https://i.imgur.com/nYiUU8S.png"
                    isTextOnLeft={false}
                    textColor='green.100'
                />
            </Box>
            <Box bg="blue.700">
                <Showcase
                    bigText="Be inspired"
                    littleText="Ignite motivation through guidance and wisdom."
                    image="https://i.imgur.com/CL0YlyU.png"
                    isTextOnLeft={true}
                    textColor='blue.100'
                />
            </Box>
            <Flex
                bg='blue.900'
                minH='40vh'
                justifyContent="space-between"
                alignItems="center"
                px='12vw'
            >
                <Heading color='white' size="4xl" textAlign='left'>
                    Start{" "}
                    <span
                        style={{
                            opacity: showText ? 1 : 0,
                            transition: "opacity 0.2s ease-out",
                            color: headerText === "refreshing" ? theme.colors.purple[300] : headerText === "recharging" ? theme.colors.green[200] : theme.colors.teal[300],
                        }}
                    >
                        {headerText}
                    </span>
                    <br />with Revive
                </Heading>
                <Link href='/dashboard'>
                    <Button
                        borderRadius={0}
                        h='90px'
                        w='300px'
                        fontSize='4xl'
                        colorScheme="pink"
                        _hover={{ bg: 'pink.100', color: 'pink.700' }}
                    >
                        Let's Revive
                    </Button>
                </Link>

            </Flex>
        </Box>


    );
};

export default Landing;