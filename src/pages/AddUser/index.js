import axios from "axios";
import React, { useState } from 'react';
import {
  useMutation,
  useQueryClient
} from "react-query";
import { useNavigate } from "react-router";
import { Container } from "reactstrap";

import { postUser } from '../../apis/user.api';
import Form from "../../components/Form";

const AddUser = () => {
  const queryClient = useQueryClient();
  
  const navigate = useNavigate()

  const addUser = async user => {
    const res = await axios.post(postUser(), user)
    return res
  }

    const { mutate, isLoading } = useMutation(addUser, {
      onSuccess: data => {
        console.log(data);
        const message = "success"
        alert(message)
        navigate("/")
      },
      onError: () => {
        alert("there was an error")
      },
      onSettled: () => {
        queryClient.invalidateQueries('create')
      }
  })

  const handleSubmit = (event, values) => {
    event.preventDefault()
    mutate(values)
    console.log("submittedData: ", values);
  }

  return (
    <Container className="my-4">
      <Form handleSubmit={handleSubmit} isLoading={isLoading}  />
    </Container>
  )

}

export default AddUser