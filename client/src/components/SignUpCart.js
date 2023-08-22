
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { GlobalContext } from '../context/GlobalWrapper';
//import { useHistory } from 'react-router-dom'; 

export default function SignUpCart() {
    const { SignUp, errors } = useContext(GlobalContext); // Importez la fonction SignUp du contexte
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
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
    const handleSubmit = async () => {
        try {
            await SignUp(formData);
            // Redirigez l'utilisateur vers la page Login.js après une inscription réussie
            //history.push('/login');
        } catch (error) {
            // Gérez l'erreur ici (par exemple, affichez un message d'erreur à l'utilisateur)
        }
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Create your account </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="firstName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input type="text" value={formData.firstName}
                                onChange={handleInputChange} />
                            {errors && errors.firstName && (
                                <Text color="red.500">{errors.firstName[0]}</Text>
                            )}
                        </FormControl>
                        <FormControl id="lastName">
                            <FormLabel>Last Name</FormLabel>
                            <Input type="text" value={formData.lastName}
                                onChange={handleInputChange} />
                            {errors && errors.lastName && (
                                <Text color="red.500">{errors.lastName[0]}</Text>
                            )}
                        </FormControl>

                        <FormControl id="age" isRequired>
                            <FormLabel>Age</FormLabel>
                            <Input type="number" value={formData.age}
                                onChange={handleInputChange} />
                            {errors && errors.age && (
                                <Text color="red.500">{errors.age[0]}</Text>
                            )}
                        </FormControl>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" placeholder={'abc@gmail.com'} value={formData.email}
                                onChange={handleInputChange} />
                            {errors && errors.email && (
                                <Text color="red.500">{errors.email[0]}</Text>
                            )}
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} value={formData.password}
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
                                <Text color="red.500">{errors.password[0]}</Text>
                            )}
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }} onClick={handleSubmit}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>

                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}