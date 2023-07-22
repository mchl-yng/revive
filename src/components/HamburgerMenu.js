import React, { useState } from 'react';
import { Box, IconButton, Drawer, DrawerOverlay, DrawerContent } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <IconButton
        aria-label="Hamburger Menu"
        icon={<HamburgerIcon />}
        pos="absolute"
        top="1rem"
        right="1rem"
        onClick={toggleMenu}
        borderRadius={0}
        _hover={{bg:'black', color:'white'}}
      />
      <Drawer placement="right" onClose={toggleMenu} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent w="25%" bg="gray.200">
          {/* Add the menu content here */}
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default HamburgerMenu;
