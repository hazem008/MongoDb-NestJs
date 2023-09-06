import React from 'react';
import {
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// Importez vos composants de page
import SignUp from './SignUp';
import Login from './Login';

const Links = ['SignUp', 'Login'];

const NavLink = (props) => {
    const { children } = props;
    const linkColor = useColorModeValue('gray.500', 'white'); // Couleur du lien en mode clair / foncé
    const linkHoverColor = useColorModeValue('white.700', 'gray.300'); // Couleur du lien au survol

    return (
        <Box
            as={Link}
            to={'/' + children.toLowerCase()}
            px={2}
            py={1}
            rounded={'md'}
            color={linkColor}
            _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            style={{ textDecoration: 'none' }}>
            {children}
        </Box>
    );
};

export default function Navbar1() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg="gray.900" px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'} flex={1} justifyContent="flex-end"> {/* Utilisez justifyContent pour aligner les liens à droite */}
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

            <Box p={4}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                </Routes>
            </Box>
        </>
    );
}
