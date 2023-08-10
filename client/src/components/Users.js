import React, { useContext, useEffect, useState } from 'react';
import { Box, Container, FormControl, Button, Input, Text, TableContainer, Th, Tr, Table, Thead, Tbody } from '@chakra-ui/react';
import { GlobalContext } from '../context/GlobalWrapper';
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import Row from './Row';
import DrawerExample from './DrawerExample';

function Users() {
    const { FetchUsers, Search, users, onOpen } = useContext(GlobalContext);
    const [query, setQuery] = useState('');

    useEffect(() => {
        FetchUsers();
    }, []);

    const SearchHandler = () => {
        Search(query);
    };

    const onchangeHandler = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="App">

            <Container maxW={'full'} p="4" fontSize={'18px'}>
                <Box rounded="lg" boxShadow="base" p="4">
                    <Box mt="2" gap={'2'} mb="4" display={'flex'}>
                        <FormControl>
                            <Input type="text" onChange={onchangeHandler} />
                        </FormControl>
                        <Button leftIcon={<AiOutlineSearch />} colorScheme='blue' variant='outline' maxW="300px" minW="150px" onClick={() => SearchHandler()}>
                            Searsh
                        </Button>
                    </Box>
                </Box>
                <Box mt="5" rounded="lg" boxShadow="base">
                    <Box p="4" display={'flex'} justifyContent="space-between">
                        <Text fontSize="xl" fontWeight="bold" color={'blackAlpha.900'}>All Users</Text>
                        <Button colorScheme='blue' variant='outline' maxW="300px" minW="150px" leftIcon={<AiOutlinePlus fontSize={'20px'} />} onClick={onOpen}>Add User
                        </Button>
                    </Box>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Avatar</Th>
                                    <Th>First Name</Th>
                                    <Th>last Name</Th>
                                    <Th>Age</Th>
                                    <Th>Email</Th>
                                    <Th>Password</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    users?.map(({ _id, firstName, lastName, age, email, password }) => {
                                        return (<Row id={_id} firstName={firstName} lastName={lastName} age={age} email={email} password={password} />
                                        );
                                    })}
                            </Tbody>

                        </Table>
                    </TableContainer>

                </Box>
                <DrawerExample />
            </Container>
        </div >
    );

}
export default Users;