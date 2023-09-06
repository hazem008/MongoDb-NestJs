import {
    Button,
    InputGroup,
    Flex,
    Text,
    useColorModeValue,
    FormControl,
    InputRightElement,
    FormLabel,
    Heading,
    Input,
    Stack,
    Checkbox,
    Box
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalWrapper';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Login() {
    const { Login, errors } = useContext(GlobalContext);
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleLogin = async () => {
        try {
            await Login(formData);
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };

    return (
        <><Navbar />
            <Flex mt={'-8'}
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bgImage={'bg.png'}
                backgroundSize="cover"
                backgroundPosition="center"
                height={'100vh'}
                flexDirection="column" // Pour centrer le contenu verticalement
            >
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={16}
                    mt={'auto'}
                >
                    <Stack align={'center'} p={'2'}>
                        <Heading fontSize={'3xl'} mb={10} align={'center'}>Sign in to your account</Heading>
                    </Stack>

                    <Stack spacing={4} mt={'auto'}>


                        <FormControl id="email" isRequired>
                            <FormLabel fontSize={'lg'}>Email address</FormLabel>
                            <Input fontSize={'lg'} type="email" value={formData.email} onChange={handleInputChange} />
                            {errors && errors.email && (
                                <Text fontSize="sm" color="red.500">{errors.email[0]}</Text>
                            )}
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel fontSize={'lg'}>Password</FormLabel>
                            <InputGroup>
                                <Input fontSize={'lg'} type={showPassword ? 'text' : 'password'} value={formData.password}
                                    onChange={handleInputChange} />

                                <InputRightElement h={'full'}>

                                    <Button
                                        variant={'ghost'}
                                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {errors && errors.password && (
                                <Text fontSize="sm" color="red.500">{errors.password[0]}</Text>
                            )}
                        </FormControl>
                        <Stack spacing={6} mt={'4'}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={'blue.400'}>Forgot password?</Text>
                            </Stack>

                            <Button fontSize={'lg'} colorScheme={'blue'} variant={'solid'} onClick={handleLogin}>
                                Sign in
                            </Button>
                            <Stack pt={2}>
                                <Text fontSize={'sm'} align={'center'}>
                                    Don't have an account?{" "}
                                    <Link to="/signUp" style={{ textDecoration: 'underline', color: 'royalblue', marginLeft: '10px' }}>
                                        Create new
                                    </Link>
                                </Text>


                            </Stack>
                        </Stack>


                    </Stack>
                </Box>
               <Footer/>
            </Flex></>

    )
}
