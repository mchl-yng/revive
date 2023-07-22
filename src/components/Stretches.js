import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, Center, Button, ButtonGroup } from '@chakra-ui/react';

const Stretches = ({ onStretchButtonClick }) => {
    const [selectedStretch, setSelectedStretch] = useState(null);
    const apiKey = '8kKN98gsVxEW18SJc4xmug==0kKSoBmsnnXCXxZy';

    const handleStretchButtonClick = () => {
        onStretchButtonClick();
      };

    useEffect(() => {
        fetchStretches(); // Call the fetchStretches function when the component mounts
    }, []);

    const fetchStretches = () => {
        const type = 'stretching';
        const difficulty = 'beginner';

        fetch(`https://api.api-ninjas.com/v1/exercises?type=${type}&difficulty=${difficulty}`, {
            headers: {
                'X-Api-Key': apiKey,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    setSelectedStretch(data[randomIndex]);
                } else {
                    setSelectedStretch(null); // Set selectedStretch to null if there are no stretches available
                }
            })
            .catch((error) => console.error('Request failed:', error));
    };

    return (
            <Box mx="auto" textAlign="left">
                {selectedStretch?.name ? ( 
                    <>
                        <Heading as="h2" size='2xl' mb={4}>
                            {selectedStretch.name}
                        </Heading>
                        <Text fontSize="xl" mb={8}>
                            {selectedStretch.instructions}
                        </Text>
                    </>
                ) : (
                    <Heading as="h2" size='4xl' mb={4}>

                    </Heading>
                )}
                <ButtonGroup>
                    <Button onClick={handleStretchButtonClick} colorScheme="green">
                        I did it!
                    </Button>
                    <Button onClick={fetchStretches} colorScheme="pink" >
                        New Stretch
                    </Button>
                </ButtonGroup>
            </Box>
    );
};

export default Stretches;