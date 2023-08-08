import React, { useContext } from 'react'
import { Tr, Td, Box, Button, Avatar } from '@chakra-ui/react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { GlobalContext } from '../context/GlobalWrapper';


const Row = ({ id, firstName, lastName, age, email, password }) => {
    const fullName = `${firstName} ${lastName}`;
    const {Delete, onOpen, FindOne} = useContext(GlobalContext);

    return (
        <Tr>
            <Td>
                <Avatar background={"beige"} textColor={"black"} name={fullName}  />
            </Td>
            <Td>{firstName}</Td>
            <Td>{lastName}</Td>
            <Td>{age}</Td>
            <Td>{email}</Td>
            <Td>{password}</Td>

            <Td>
                <Box display="flex" gap="1">
                    <Button colorScheme={"blue"} onClick={()=>{
                            onOpen();
                            FindOne(id);
                        }}>
                        <AiFillEdit/>
                    </Button>
                    <Button colorScheme={"red"}  onClick={() => Delete(id)}>
                        <AiFillDelete />
                    </Button>
                </Box>
                
            </Td>    
        </Tr>);
};

export default Row;