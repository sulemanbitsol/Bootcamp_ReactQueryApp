import React, { useState } from 'react';
import {useMutation, useQuery, useQueryClient } from 'react-query';
import axios from "axios";
import { Container } from 'reactstrap';

import { getUsers, updateUser } from '../../apis/user.api';
import { StripedTable } from '../../components/Tables';
import ModalDialog from "../../components/Modal";
import AddUser from "../AddUser";
import Form from '../../components/Form';

const LandingPage = () => {
  const queryClient = useQueryClient();

  const [isShowModal, setShowModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})
  const [modalTitle, setModalTitle] = useState("")

  const fetchUsers = async () => {
    const res = await axios.get(getUsers())
    return res.data
  }

  const openEditModal = user => {
    setSelectedUser(user);
    setModalTitle("Edit User")
    setShowModal(true);
  }
  
  const openDeleteModal = user => {
    setSelectedUser(user);
    setModalTitle("Delete User")
    setShowModal(true);
  }
  
  const onCloseModal = () => {
    setSelectedUser({});
    setModalTitle("")
    setShowModal(false);
  }
  const addUser = async user => {
    const res = await axios.put(updateUser(user.id), user)
    return res
  }

    const { mutate, isLoading: submitting } = useMutation(addUser, {
      onSuccess: data => {
        console.log(data);
        const message = "success"
        alert(message)
        // navigate("/")
      },
      onError: () => {
        alert("there was an error")
      },
      onSettled: () => {
        queryClient.invalidateQueries('create')
      }
  })

  const onConfirmDelete = () => {
    
  }


  const { isLoading, error, data } =  useQuery("userList", fetchUsers)

  if(isLoading) return "Loading..."

  if (error) return 'An error has occurred: ' + error.message
 
  return (
    <Container className="my-5">
    <div className="d-flex flex-column">
      <StripedTable users={data} openEditModal={openEditModal} />
      <ModalDialog isOpen={isShowModal} handleClose={onCloseModal}>
        <Form />
      </ModalDialog>
    </div>
    </Container>
  )
}

export default LandingPage