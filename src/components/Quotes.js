import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Center, Button, ButtonGroup } from '@chakra-ui/react';

const Quotes = ({ onQuoteButtonClick }) => {
    const [quote, setQuote] = useState(null);
    const apiKey = '8kKN98gsVxEW18SJc4xmug==0kKSoBmsnnXCXxZy';

    const handleQuoteButtonClick = () => {
        onQuoteButtonClick();
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    const fetchQuotes = () => {
        fetch(`https://api.api-ninjas.com/v1/quotes?category=inspirational`, {
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
                setQuote(data[0]);
            })
            .catch((error) => console.error('Request failed:', error));
    };

    return (
        <Box mx="auto" textAlign="left">
            {quote?.quote ? (
                <>
                    <Heading as="h2" size='lg' mb={4}>
                        "{quote.quote}"
                    </Heading>
                    <Text fontSize="xl" mb={8}>
                        by {quote.author}
                    </Text>
                </>
            ) : (
                <Heading as="h2" size='4xl' mb={4}>

                </Heading>
            )}
            <ButtonGroup>
                <Button onClick={handleQuoteButtonClick} colorScheme="green">
                    I reflected!
                </Button>
                <Button onClick={fetchQuotes} colorScheme="pink" >
                    New Quote
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default Quotes;
