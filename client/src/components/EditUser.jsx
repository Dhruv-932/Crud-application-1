import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  styled,
  Typography,
  Button,
} from "@mui/material";

import { editUser, getUser } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

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

const StyledButton = styled(Button)`
  background-color: #219c90;
  color: white;

  &:hover {
    background-color: #219c90;
  }
`;

const FadedInputLabel = styled(InputLabel)`
  color: #666; 
`;

const defaultValue = {
  name: "",
  userName: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/all");
  };

  return (
    <Container>
      <Heading variant="h4">Edit User</Heading>
      <FormControl>
        <FadedInputLabel>Name</FadedInputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <FadedInputLabel>UserName</FadedInputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="userName"
          value={user.userName}
        />
      </FormControl>
      <FormControl>
        <FadedInputLabel>Email</FadedInputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <FadedInputLabel>Phone</FadedInputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <StyledButton variant="contained" onClick={() => editUserDetails()}>
          Edit User
        </StyledButton>
      </FormControl>
    </Container>
  );
};

export default EditUser;
