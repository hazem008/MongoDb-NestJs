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
} from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { GlobalContext } from '../context/GlobalWrapper';
import Navbar from './Navbar';
import Footer from './Footer';
export default function SignUp() {
    const { SignUp, errors } = useContext(GlobalContext); // Importez la fonction SignUp du contexte
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        password: '',
    });

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            password: '',
        });
    };

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
            resetForm();
            // Redirigez l'utilisateur vers la page Login.js après une inscription réussie
        } catch (error) {
            // Gérez l'erreur ici (par exemple, affichez un message d'erreur à l'utilisateur)
        }
    };

    return (
        <><Navbar /><Flex mt={'-8'}
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
                flex={1}
                textAlign="center"
                p={4}
                position="absolute" // Position absolue pour le texte
                top={200}
                left={50}
                bg="rgba(0, 0, 0, 0.5)" // Fond semi-transparent                bottom={0}
                right="62%" // Déplacez le texte à gauche de l'écran
                color="white" // Couleur du texte
                width="30%"
                height="12%"
            >
                <Text fontSize="xl">Welcome to our platform</Text>
                <Text fontSize="lg">
                    Join us to enjoy amazing features and benefits!
                </Text>
            </Box>
            <Box
                flex={1}
                textAlign="center"
                p={8}
                position="absolute"
                top={"300"}
                left={"55"}
                right="62%"
                color="white"
            >

                <Text fontSize="sm" width="80%">Discover our platform and take advantage of its exceptional features. Whether you're looking for information, networking opportunities or quality resources, our platform offers you all this and much more. Sign up today to become part of our dynamic community and start exploring the many opportunities available to you.</Text>
            </Box>

            <Box
                flex={1}
                textAlign="center"
                p={4}
                position="absolute" // Position absolue pour le texte
                top={500}
                left={50}
                bg="rgba(0, 0, 0, 0.5)" // Fond semi-transparent                bottom={0}
                right="62%" // Déplacez le texte à gauche de l'écran
                color="white" // Couleur du texte
                width="30%"
                height="12%"
            >
                <Text fontSize="xl">Let's get you set up</Text>
                <Text fontSize="lg">
                    It should only take a few minutes to create your account
                </Text>
            </Box>


            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={10}
                mt={'auto'}
            >

                <Stack align={'center'} p={'2'}>
                    <Heading fontSize={'4xl'}>Create your account</Heading>
                </Stack>

                <Stack spacing={4} mt={'10'}>
                    <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" value={formData.firstName} onChange={handleInputChange} />
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
                    {/* Ajoutez d'autres champs de formulaire ici */}
                </Stack>

                <Stack spacing={10} pt={2}>
                    <Button
                        loadingText="Submitting"
                        size="lg"
                        mt={'7'}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={handleSubmit}
                    >
                        Sign up
                    </Button>
                </Stack>

            </Box>
            {/* Footer */}

            <Footer/>
        </Flex></>

    );
}
