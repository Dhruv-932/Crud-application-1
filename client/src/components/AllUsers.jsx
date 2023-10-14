import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  Button,
} from "@mui/material";
import { getUsers, deleteUser } from "../services/api.js";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 80%;
  margin: 2% auto 0 auto;
`;

const StyledRow = styled(TableRow)`
  background: #f5e8b7;
  & > th {
    font-size: 20px;
    color: #6a9c89;
  }
`;

const Tbody = styled(TableRow)`
  & > td {
    font-size: 16px;
  }
`;

const EditButton = styled(Button)`
  margin-right: 5%;
  background-color: #219c90;
  color: white;

  &:hover {
    background-color: #0e6b53;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #ff6f61;
  color: white;

  &:hover {
    background-color: #d63c35;
  }
`;

const styles = {
  tableHead: {
    marginTop: "160px",
  },
};

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <StyledTable style={styles.tableHead}>
      <TableHead>
        <StyledRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </StyledRow>
      </TableHead>
      <TableBody>
        {users.map((user, i) => (
          <Tbody key={i}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.userName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <EditButton
                variant="contained"
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </EditButton>
              <DeleteButton
                variant="contained"
                onClick={() => deleteUserDetails(user._id)}
              >
                Delete
              </DeleteButton>
            </TableCell>
          </Tbody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
