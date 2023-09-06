import { createContext, useState } from 'react'
import axios from 'axios';
import { useToast, useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
export const GlobalContext = createContext();
export default function Wrapper({ children }) {
    const handleRefresh = () => {
        window.location.reload();
      };
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const FetchUsers = () => {
        axios
            .get('/api/users')
            .then((res) => {

                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };
    const Search = (query) => {
        axios
            
            .post(`/api/users/search?key=${query}`)
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };
    const Delete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            axios
                .delete(`/api/users/${id}`)
                .then((_res) => {
                    setUsers(users.filter((user) => user._id !== id));
                    FetchUsers();
                    toast({
                        title: 'User successfully deleted!',
                        status: 'success',
                        duration: 4000,
                        isClosable: true,
                    });
                })
                .catch((err) => {
                    console.log(err.response.data);
                });
        }
    };

    const Add = (form, setForm) => {
        axios
            .post('/api/users', form)
            .then(res => {
                setUsers([res.data, ...users])
                toast({
                    title: 'User Added!',
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
                setErrors({});
                setForm({});
                onClose();
            })
            .catch((err) => {
                setErrors(err.response.data.error);
            })
    }
    const FindOne = async (id) => {
        await axios
            .get(`/api/users/${id}`)
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                setErrors(err.response.data.error);
            }
            )
    };

    const Update = (form, setForm, id) => {
        axios.put(`/api/users/${id}`, form)
            .then(res => {
                toast({
                    title: 'User Updated !!',
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
                setErrors({});
                setForm({});
                onClose();
                FetchUsers();
            })
            .catch((err) => {
                setErrors(err.response.data.error);
            })
    }
    // Exemple dans votre fonction SignUp après avoir reçu le token
    const SignUp = (formData) => {
        axios
            .post('/api/auth/signup', formData)
            .then((res) => {
                const { token } = res.data;
                localStorage.setItem('token', token); // Stocker le token dans le localStorage
                toast({
                    title: 'Inscription réussie!',
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                });
                // Rediriger vers la page de connexion ou autre
              
            })
            .catch((err) => {
                setErrors(err.response.data.error);
            })
    };

    // Exemple dans votre fonction Login après avoir reçu le token
    const Login = (formData) => {
        axios
            .post('/api/auth/login', formData)
            .then((res) => {
                const { token } = res.data;
                localStorage.setItem('token', token); // Stocker le token dans le localStorage
                toast({
                    title: 'Connexion réussie!',
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                });
                // Rediriger vers le tableau de bord ou autre
                navigate('/dashboard');
                handleRefresh();
            })
            .catch((err) => {
                console.error('Erreur lors de la connexion:', err.response.data);
                toast({
                    title: 'Email or password invalid!',
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                });
            });
    };



    return (
        <GlobalContext.Provider value={{ FetchUsers, SignUp, Login, Search, Delete, users, onOpen, isOpen, onClose, errors, setErrors, Add, FindOne, Update, user, setUser }}>
            {children}
        </GlobalContext.Provider>
    )
}