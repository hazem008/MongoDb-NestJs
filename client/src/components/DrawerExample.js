import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Stack,
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalWrapper';
import InputsGroup from './InputsGroup';


export default function DrawerExample() {
    const { isOpen, onClose, Add, errors, user, setErrors, Update } = useContext(GlobalContext);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
      });;
    const onChangeHandler = (e) => {
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value,
            })
    }
    const onAdd = () => {
        if (!form.password) {
            // Gérer l'erreur ou afficher un message indiquant que le champ password est requis.
            console.log("Le champ password est requis !");
            return;
          }
       Add(form, setForm); 
    }
    const onUpdate = () => {
        
        Update(form, setForm, form._id);
    }
    useEffect(() => {
        setForm(user);
    }, [user])
    return (
        <>

            <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton onClick={() => {
                        onClose();
                        setErrors({});
                        setForm({});
                    }}/>
                    <DrawerHeader>Create Or Update User</DrawerHeader>

                    <DrawerBody>
                        <Stack spacing={"24px"}>
                            <InputsGroup name="firstName" onChangeHandler={onChangeHandler} value={form?.firstName} errors={errors?.firstName}/>
                            <InputsGroup name="lastName" onChangeHandler={onChangeHandler} value={form?.lastName} errors={errors?.lastName}/>
                            <InputsGroup name="age" onChangeHandler={onChangeHandler} value={form?.age} errors={errors?.age}/>
                            <InputsGroup name="email" onChangeHandler={onChangeHandler} value={form?.email} errors={errors?.email}/>
                            <InputsGroup name="password" onChangeHandler={onChangeHandler} value={form?.password} errors={errors?.password}/>

                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={() => {
                        onClose();
                        setErrors({});
                        setForm({});
                    }}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={() => form._id ? onUpdate() : onAdd()}>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}