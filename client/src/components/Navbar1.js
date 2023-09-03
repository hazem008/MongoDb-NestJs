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
    Menu,
    useDisclosure,
    useColorModeValue,
    Stack,
    MenuButton,
    Avatar,
    MenuList,
    MenuItem,
    MenuDivider,
    Button,

} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// Importez vos composants de page
import NotFound from './NotFound';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import Dashboard from './Dashboard';




const Links = ['Dashboard', 'Users', 'About', 'Contact'];

const NavLink = (props) => {
    const { children } = props;

    return (
        <Box
            as={Link}
            to={'/' + children.toLowerCase()}
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}>
            {children}
        </Box>
    );
};

export default function Navbar1() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                        <img src="esprit.png" alt="Logo" width={100} height={40} />
                        </Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={'hazem.png'}
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>LogOut</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
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
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
                </Routes>
            </Box>

            </>
    );
}