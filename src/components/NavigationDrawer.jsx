import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from '../assets/images/Logo.png'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import icon5 from '../assets/images/icon5.png'
import icon6 from '../assets/images/icon6.png'
import icon7 from '../assets/images/icon7.png'
import icon8 from '../assets/images/icon8.png'
import icon9 from '../assets/images/icon9.png'
import icon10 from '../assets/images/icon10.png'
import icon11 from '../assets/images/icon11.png'

// const drawerWidth = 240;
const drawerWidth = "10%";


const NavigationDrawer = () => {
  return (
    <div>
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      
      </AppBar>
      <Drawer
        sx={{
          width: '100px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '80px',
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <img src={logo} className='w-[30%] block mx-auto'/> */}
        {/* <Toolbar /> */}
        {/* <Divider /> */}
        <img src={logo} className='w-[40%] mt-[30px] block mx-auto'/>    
        <List style={{marginTop:'10px'}}>
        <img src={icon1} className='w-[30%] mt-[20%] block mx-auto'/>
        <img src={icon2} className='w-[30%] mt-5 block mx-auto'/>
        <img src={icon3} className='w-[30%] mt-5 block mx-auto'/>
        <img src={icon4} className='w-[30%] mt-5 block mx-auto'/>
        <img src={icon5} className='w-[30%] mt-5 block mx-auto'/>
        <img src={icon6} className='w-[30%] mt-5 block mx-auto'/>
        <img src={icon7} className='w-[30%] mt-5 block mx-auto'/>
        <img src={icon8} className='w-[30%] mt-5 block mx-auto'/>
        <img src={icon9} className='w-[30%] mt-5 block mx-auto'/>
        <img src={icon10} className='w-[30%] mt-5 block mx-auto'/>
        <img src={icon11} className='w-[30%] mt-5 block mx-auto'/>
        </List>
       
      </Drawer>
     
    </Box>
    </div>
  )
}

export default NavigationDrawer;



