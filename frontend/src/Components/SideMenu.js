import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupIcon from '@material-ui/icons/Group';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SpaIcon from '@material-ui/icons/Spa';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AdjustIcon from '@material-ui/icons/Adjust';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';  

const SideMenu = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const drawerContent = (
    <List style={{ width: '200px', padding: '10px' }}>
      <ListItem button>
        <h4 style={{ color: 'black', fontWeight: 'bold', marginBottom: 0 }}>
          <BubbleChartIcon />
          <span style={{ marginLeft: '10px' }}>Salesway</span>
        </h4>
      </ListItem>
      <ListItem button>
        <SettingsIcon style={{ color: 'grey' }} />
        <ListItemText primary="Settings" style={{ color: 'grey', marginLeft: '10px' }} />
      </ListItem>
      <ListItem button>
        <GroupIcon style={{ color: 'grey' }} />
        <ListItemText primary="Team" style={{ color: 'grey', marginLeft: '10px' }} />
      </ListItem>
      <ListItem button>
        <span style={{ color: 'grey', fontSize: '15px' }}>Menu</span>
      </ListItem>
      <ListItem button style={{ backgroundColor: "#EDE4FF", borderRadius: '10px' }}>
        <DashboardIcon style={{ color: 'grey' }} />
        <ListItemText primary="Dashboard" style={{ color: 'grey', marginLeft: '10px' }} />
      </ListItem>
      <ListItem button>
        <EqualizerIcon style={{ color: 'grey' }} />
        <ListItemText primary="Campaigns" style={{ color: 'grey', marginLeft: '10px' }} />
      </ListItem>
      <ListItem button>
        <SpaIcon style={{ color: 'grey' }} />
        <ListItemText primary="Flows" style={{ color: 'grey', marginLeft: '10px' }} />
      </ListItem>
      <ListItem button>
        <AdjustIcon style={{ color: 'grey' }} />
        <ListItemText primary="Integration" style={{ color: 'grey', marginLeft: '10px' }} />
      </ListItem>
      <ListItem button>
        <AccessibilityIcon style={{ color: 'grey' }} />
        <ListItemText primary="Customers" style={{ color: 'grey', marginLeft: '10px' }} />
      </ListItem>
      <ListItem button style={{ marginTop: '100px' }}>
        <AccountCircleIcon style={{ color: 'grey' }} />
        <ListItemText primary="Mihika" style={{ color: 'grey', marginLeft: '10px' }} />
      </ListItem>
    </List>
  );

  return (
    <div>
      {isMobile && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        anchor="left"
        open={isMobile ? open : true}
        onClose={isMobile ? handleDrawerToggle : null}
        style={{ borderRadius: '20px', border: 'none' }}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default SideMenu;
