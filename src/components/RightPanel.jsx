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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const drawerWidth = 440;

const RightPanel = () => {
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
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="right"
      >

      <List className='ml-[5%]'>
        <div className='mt-[5%] font-roboto ml-[5%]'>
            <div>
       <h1 className='font-roboto font-style2 '>Today's highlights (14)</h1>
       <p className='mt-2 font-style1 text-[#676666] text-xs'>19th March 2024</p>
        </div>
        <div className='flex justify-between pr-[5%]  mt-[5%]'>
        <Card variant="outlined">
        <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Income
      </Typography>
      <Typography variant="h6" component="div" sx={{ color: '#148714' }}>
       1000000 CAD
      </Typography>
      <Typography variant="body2">
        2 payments recieved
        <br />
 
      </Typography>
    </CardContent>
 
        </Card>
        <Card variant="outlined">
        <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Expenses
      </Typography>
      <Typography variant="h6" component="div" sx={{ color: '#D04141' }}>
      50000 CAD
      </Typography>

      <Typography variant="body2">
        5 payments paid
        <br />
 
      </Typography>
    </CardContent>
 
        </Card>
        </div>
        </div>

        <div className='mt-[8%] font-roboto  ml-[5%]'>
            <div>
       <h1 className='font-roboto font-style2 '>Completed Activities (14)</h1>

        </div>
        <div className=' pr-[5%]  mt-[5%]'>
        <Card variant="outlined">
        <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Income
      </Typography>

    </CardContent>
    <Divider/>
        <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Income
      </Typography>
 
    </CardContent>
    <Divider/>
        <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Income
      </Typography>
   
    </CardContent>
    <Divider/>
        <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Income
      </Typography>
 
    </CardContent>
 
        </Card>
        </div>
        </div>
        <div className='mt-[4%] font-roboto  ml-[5%]'>
            <div>
       <h1 className='font-roboto font-style2 '>Scheduled Activities (14)</h1>

        </div>
        <div className=' pr-[5%]  mt-[5%]'>
        <Card variant="outlined">
        <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Income
      </Typography>

    </CardContent>
    <Divider/>
        <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Income
      </Typography>
 
    </CardContent>
    <Divider/>
        <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Income
      </Typography>
   
    </CardContent>
    <Divider/>
        <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Income
      </Typography>
 
    </CardContent>
 
        </Card>
        </div>
        </div>
        
      </List>
       
      </Drawer>
     
    </Box>
   </div>
  );
};

export default RightPanel;