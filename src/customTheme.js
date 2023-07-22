import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    styles: {
        global: {
            'html, body': {
                scrollBehavior: 'smooth',
            },
        },
    },
});

export default customTheme;