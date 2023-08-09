import { createContext, useState } from 'react'
import axios from 'axios';
import { useToast, useDisclosure } from '@chakra-ui/react'
export const GlobalContext = createContext();

export default function Wrapper({ children }) {
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
            // eslint-disable-next-line no-template-curly-in-string
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
                setUsers([ res.data,...users])
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
    return (
        <GlobalContext.Provider value={{ FetchUsers, Search, Delete, users, onOpen, isOpen, onClose, errors, setErrors, Add, FindOne, Update, user, setUser }}>
            {children}
        </GlobalContext.Provider>
    )
}