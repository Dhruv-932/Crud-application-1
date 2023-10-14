import { useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  styled,
  Typography,
  Button,
} from "@mui/material";

import { addUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 10% auto 0 auto;
  padding: 20px;
  background-color: #fff5e0; 
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  color: #333;

  & > div {
    margin-top: 20px;
  }
`;

const Heading = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333; 
`;

const defaultValue = {
  name: "",
  userName: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Heading variant="h4">Add User</Heading>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="userName" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl style={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          onClick={() => addUserDetails()}
          style={{
            backgroundColor: "#219C90",
            color: "white" ,
          }}
        >
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
