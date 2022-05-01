import React, { useContext } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { NamesContext } from '../store/NamesContext'

const Name = (props) => {
  const nameCtx = useContext(NamesContext)
  return (
    <Card className="my-3 p-3">
        <Row>
            <Col>{props.name.name}</Col>
            <Col className="text-end"><Button variant="danger" onClick={() => nameCtx.deleteName(props.name)}>Delete</Button></Col>
        </Row>
    </Card>
  )
}

export default Name