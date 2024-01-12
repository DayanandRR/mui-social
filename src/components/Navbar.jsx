import styled from '@emotion/styled'
import { AppBar,  Avatar,  Badge,  Box,   Menu,   MenuItem,   Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import InputBase from '@mui/material/InputBase';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search=styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
 
}));
const Icons=styled(Box)(({theme})=>({
  display:"none",
alignItems:"center",
gap:"20px",
[theme.breakpoints.up("sm")]:{
  display:"flex"
 }}));

const UserBox=styled(Box)(({theme})=>({
  display:"flex",
alignItems:"center",
gap:"10px",
[theme.breakpoints.up("sm")]:{
  display:"none"
 }}));


export const Navbar = () => {
 const [open,setOpen]=useState(false);
  return (
    <AppBar   position='sticky'>
     <StyledToolbar>
      <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>
        SOCIAL    
      </Typography>
      <PetsIcon sx={{display:{xs:"block",sm:"none"}}}/>
      <Search><InputBase placeholder='Search'/></Search>
      <Icons>
      
      <Badge badgeContent={4} color="primary">
  <MailIcon color="action" />
</Badge>
      <Badge badgeContent={4} color="primary">
<NotificationsIcon/>
</Badge>
<Avatar onClick={e=>setOpen(true)} alt="Bird" sx={{width:30,height:30}} src="https://images.pexels.com/photos/19781449/pexels-photo-19781449/free-photo-of-a-black-and-white-photo-of-a-bird-sitting-on-a-branch.jpeg" />

</Icons>
<UserBox onClick={e=>setOpen(true)}>
  <Avatar alt="Bird" sx={{width:30,height:30}} src="https://images.pexels.com/photos/19781449/pexels-photo-19781449/free-photo-of-a-black-and-white-photo-of-a-bird-sitting-on-a-branch.jpeg" />
  <Typography variant='span'>John</Typography>
  </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
        onClose={e=>setOpen(false)}
     
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
    
  )
}
