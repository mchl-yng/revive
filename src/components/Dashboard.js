import React, { useState, useEffect } from 'react';
import Header from "./Header";
import {
    Box, Button, Text, Flex, Heading, ButtonGroup, AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Stretches from './Stretches';
import Quotes from './Quotes';


const Dashboard = () => {

    useEffect(() => {
        document.title = 'Dashboard - Revive';
      }, []);

    const handleStretchButtonClick = () => {
        setLogs((prevLogs) => [
            ...prevLogs,
            { time: getCurrentTime(), emotion: "Stretch completed" }
        ]);
    };

    const handleQuoteButtonClick = () => {
        setLogs((prevLogs) => [
            ...prevLogs,
            { time: getCurrentTime(), emotion: "Reflection completed" }
        ]);
    };

    const handleBreakButtonClick = () => {
        setLogs((prevLogs) => [
            ...prevLogs,
            { time: getCurrentTime(), emotion: "Break completed" }
        ]);
    };

    const getCurrentTime = () => {
        const currentTime = new Date();
        let hours = currentTime.getHours().toString();
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        let day = 'A.M.';

        if (currentTime.getHours() === 0) {
            hours = '12';
        } else if (currentTime.getHours() > 12) {
            hours = (currentTime.getHours() - 12).toString();
            day = 'P.M.';
        }

        return `${hours}:${minutes} ${day}`;
    };

    const [currentTime, setCurrentTime] = useState(getCurrentTime());
    const [showButtons, setShowButtons] = useState(true);
    const [message, setMessage] = useState('');
    const [logs, setLogs] = useState([]);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

    const handleOpenAlertDialog = () => {
        setIsAlertDialogOpen(true);
    };

    const handleCloseAlertDialog = () => {
        setIsAlertDialogOpen(false);
        handleBreakButtonClick();
    };

    useEffect(() => {
        const alertIntervalId = setInterval(() => {
            handleOpenAlertDialog();
        }, 20 * 60 * 1000);

        return () => clearInterval(alertIntervalId);
    }, []);


    const handleButtonClick = (buttonText) => {
        setShowButtons(false);
        if (buttonText === 'Good') {
            setMessage('Feeling good! Keep it up!');
        } else if (buttonText === 'Okay') {
            setMessage('It\'s okay, take your time.');
        } else if (buttonText === 'Bad') {
            setMessage('Sorry to hear that. Consider reaching out for support.');
        }
        setLogs((prevLogs) => [...prevLogs, { time: getCurrentTime(), emotion: buttonText }]);

    };

    return (
        <Box display="flex" flexDirection="column" minH="100vh" bgColor='white'>
            <Header />
            <Flex
                justifyContent="space-between"
                align="stretch"
                flexDirection='row'
                p={8}
                px='10vw'
                gap={10}
            >
                <Box flex={1} p={10} bgColor='blackAlpha.200' borderRadius={10}>
                    <Heading size="3xl">
                        It is {currentTime}
                    </Heading>
                    {showButtons && (
                        <Box>
                            <Text fontSize='2xl' as='i'>
                                How are you feeling right now?
                            </Text>
                            <ButtonGroup gap={2} py={2} variant='solid' flex='1'>
                                <Button
                                    colorScheme="green"
                                    onClick={() => handleButtonClick('Good')}
                                >
                                    Good
                                </Button>
                                <Button
                                    colorScheme="orange"
                                    onClick={() => handleButtonClick('Okay')}
                                >
                                    Okay
                                </Button>
                                <Button
                                    colorScheme="red"
                                    onClick={() => handleButtonClick('Bad')}
                                >
                                    Bad
                                </Button>
                            </ButtonGroup>
                        </Box>
                    )}
                    <AnimatePresence>
                        {!showButtons && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <Text fontSize='2xl' as='i'>
                                    {message}
                                </Text>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Box>
                <Box flex={1} p={10} bgColor='blackAlpha.200' borderRadius={10}>
                    <Text fontSize="xl" as='b'>My progress:</Text>
                    <Box mt={4} maxHeight="120px" overflowY="auto">
                        {logs.map((log, index) => (
                            <Text key={index} fontSize="lg">
                                {log.time} - {log.emotion}
                            </Text>
                        ))}
                    </Box>
                </Box>
            </Flex>
            <Flex
                justifyContent="space-between"
                align="stretch"
                flexDirection='row'
                px='10vw'
                gap={10}
            >
                <Box bgColor='blackAlpha.200' width='100vw' p={10} borderRadius={10}>
                    <Stretches onStretchButtonClick={handleStretchButtonClick} />
                </Box>
            </Flex>
            <Flex
                justifyContent="space-between"
                align="stretch"
                flexDirection='row'
                p={8}
                px='10vw'
                gap={10}
            >
                <Box bgColor='blackAlpha.200' width='100vw' p={10} borderRadius={10}>
                    <Quotes onQuoteButtonClick={handleQuoteButtonClick} />
                </Box>
            </Flex>


            <AlertDialog isOpen={isAlertDialogOpen} onClose={handleCloseAlertDialog}>
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="2xl" fontWeight="bold">
                        Give your eyes a break!
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        Look at an object at least 20 feet away for 20 seconds! This would also be a great time to incorporate some stretching and movement.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button colorScheme="green" onClick={handleCloseAlertDialog}>
                            Got it!
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Box>
    );
};

export default Dashboard;
