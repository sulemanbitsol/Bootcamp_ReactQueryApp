import React from 'react'
import { Table } from "reactstrap";


const StripedTable = ({ users, openEditModal, openDeleteModal }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            Name
          </th>
          <th>
            Age
          </th>
          <th>
            Company
          </th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <th scope="row">
              {index + 1}
            </th>
            <td>
              {user.name}
            </td>
            <td>
              {user.age}
            </td>
            <td>
              {user.company}
            </td>
            <td>
              <div className="d-flex flex-row gap-3 align-items-center justify-content-between">
                <button className="btn btn-primary" onClick={() => openEditModal(user)}>Edit</button>
                <button className="btn btn-danger" onClick={()=> openDeleteModal(user)}>Delete</button>
              </div>
            </td>
          </tr>
        ))
        }
      </tbody>
    </Table>
  )
}

export default StripedTable

