import React from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'

const InputsGroup = ({ name, onChangeHandler, value, errors }) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <FormControl isInvalid={errors}>
      <FormLabel >{formattedName}</FormLabel>
      <Input type='text' name={name} onChange={onChangeHandler} value={value} />
      {
        errors && errors?.map((err) => {
          return <FormErrorMessage>{err}</FormErrorMessage>
        })
      }
    </FormControl>

  )
}

export default InputsGroup;