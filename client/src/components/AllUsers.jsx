import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  Button,
} from "@mui/material";
import { getUsers, deleteUser} from "../services/api.js";

import {Link} from 'react-router-dom';





const StyledTable = styled(Table)`
width: 80%;
margin:2% auto 0 auto;
`;





const StyledRow = styled(TableRow)`

background: black;
& > th { 
    font-size: 20px;
    color:white;
}
`;




const Tbody = styled(TableRow)`
  & > td {
    font-size: 16px;
  }
`;





const AllUsers = () => {


  const [users, setUsers] = useState([]);





  useEffect(() => {
    getAllUsers();
  }, []);






  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
    
  };


  const deleteUserDetails = async(id)=> {

      await deleteUser(id);
      getAllUsers() ;


    
  }






  return (
    <StyledTable>
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
        {users.map((user,i) => (
          <Tbody key={i}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.userName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: "5%" }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit 
              </Button>
              <Button variant="contained" color="secondary" onClick={()=>deleteUserDetails(user._id)}>
                Delete
              </Button>
            </TableCell>
          </Tbody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
