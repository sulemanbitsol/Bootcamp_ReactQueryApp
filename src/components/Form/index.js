import React, { useState } from 'react'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap'

const Form = ({handleSubmit, isLoading}) => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    company: "",
  })

  const handleChange = (event) => {
    setUserData(prevData => ({ ...prevData, [event.target.name]: event.target.value }))
  }

  const onSubmit = ()=> {
    handleSubmit(userData)
  }



  return (
    <Form onSubmit={onSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">
                Full Name
              </Label>
              <Input
                id="exampleEmail"
                name="name"
                placeholder="with a placeholder"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">
                Age
              </Label>
              <Input
                id="examplePassword"
                name="age"
                placeholder="password placeholder"
                type="number"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">
            Company
          </Label>
          <Input
            id="exampleAddress"
            name="company"
            placeholder="Enter Company Name"
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">
          {isLoading ? "Posting" : "Add User"}
        </Button>
      </Form>
  )
}

export default Form