import React, { useContext, useRef } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import { NamesContext } from '../store/NamesContext'

const NameForm = () => {
    const nameCtx = useContext(NamesContext)

    const input = useRef('')
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (input.current.value !== '') {
            nameCtx.addName(input.current.value)
            input.current.value = ''
        }
    }

  return (
    <Form onSubmit={onSubmitHandler}>
        <InputGroup>
            <FormControl type="text" ref={input}/>
            <Button type="submit" variant="primary">Primary</Button>
        </InputGroup>
    </Form>
  )
}

export default NameForm