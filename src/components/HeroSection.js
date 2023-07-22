import React from 'react';
import { Box, Heading, Text, Button, Flex, Center, Image, ButtonGroup, Link } from '@chakra-ui/react';
import { Logo } from '../Logo';
import img from '../logo.svg'

const HeroSection = () => {
    return (
        <Center flex="1" bg="blue.900" color="white" py={12}>

            <Flex flexDirection="row">
                <Center>
                    <Box maxW="lg" mx="auto" textAlign="left">
                        <Heading as="h2" size='4xl' mb={4}>
                            Welcome to
                            Revive
                        </Heading>
                        <Text fontSize="xl" mb={8}>
                            Refresh, recharge, and relax effortlessly.
                        </Text>
                        <Flex justify="left">
                            <ButtonGroup gap='3' size='lg'>
                                <Link href='/dashboard'>
                                    <Button colorScheme="pink" borderRadius={0} _hover={{ bg: 'pink.100', color: 'pink.700' }}>
                                        Let's Revive
                                    </Button>
                                </Link>
                                <a href="#learn-more">
                                    <Button colorScheme="green" borderRadius={0} variant='outline'>
                                        Learn More
                                    </Button>
                                </a>
                            </ButtonGroup>
                        </Flex>
                    </Box>
                </Center>

                <Box maxW="lg">
                    <Center>
                        <Logo />
                    </Center>

                </Box>
            </Flex>

        </Center>
    );
};

export default HeroSection;
