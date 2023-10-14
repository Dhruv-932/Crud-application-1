import {AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';
const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color:white;
text-weight:bold;
text-decoration:none;

`;

const NavBar=()=>{

    return (
            <AppBar position='static' style={{background:'black'}}>
                <Toolbar>
                    <Tabs to='/'>CRUD Application</Tabs>
                    <Tabs to='/all'>All users</Tabs>
                    <Tabs to='/add'>Add users</Tabs>
                </Toolbar>
            </AppBar>
    )
}
export default NavBar;