import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import HamburgerMenu from './HamburgerMenu';


const Header = () => {
    return (
        <Box bg="green.600" p={4} color="white" position="relative" overflow="hidden">
            <Flex justify="space-between" alignItems="center">
                <Heading as="h1" size="xl">
                    Revive
                </Heading>
                <HamburgerMenu />
                {/* <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        borderRadius={0}
                        transition='all 0.1s'
                        bg="white"
                        color="black"
                        _hover={{ bg: 'gray.400', color: 'white'}}
                        _expanded={{ bg: 'blue.400', color: 'white' }}
                        _focus={{ boxShadow: 'outline' }}
                    >
                    </MenuButton>
                    <MenuList 
                        borderRadius={0}
                    >
                        <MenuItem color = "black">Download</MenuItem>
                        <MenuItem color = "black">Create a Copy</MenuItem>
                        <MenuItem color = "black">Mark as Draft</MenuItem>
                        <MenuItem color = "black"> Delete</MenuItem>
                        <MenuItem color = "black">Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu> */}
            </Flex>
        </Box>
    );
};

export default Header;