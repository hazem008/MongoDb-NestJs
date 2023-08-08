import React from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'

const InputsGroup = ({ name, onChangeHandler, value, errors }) => {

  return (
    <FormControl isInvalid={errors}>
      <FormLabel>{name}</FormLabel>
      <Input type='text' name={name} onChange={onChangeHandler} value={value}/>
      {
        errors && errors?.map((err) => {
          return <FormErrorMessage>{err}</FormErrorMessage>
        })
      }
    </FormControl>
    
)
}

export default InputsGroup;