import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

const pages = ['Dashbord', 'Libary', "Let's Start"];
const notificationsData =[{name:'Dave Wood clapped on your blog',time:'10 minutes ago',description:'Dave Wood clapped on your blog A heading with a solid red bottom border'},{name:'Dave Wood clapped on your blog',time:'10 minutes ago',description:'Dave Wood clapped on your blog A heading with a solid red bottom border'},{name:'Dave Wood clapped on your blog',time:'10 minutes ago',description:'Dave Wood clapped on your blog A heading with a solid red bottom border'},{name:'Dave Wood clapped on your blog',time:'10 minutes ago',description:'Dave Wood clapped on your blog A heading with a solid red bottom border'},{name:'Dave Wood clapped on your blog',time:'10 minutes ago',description:'Dave Wood clapped on your blog A heading with a solid red bottom border'},];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function ViewAllNotifications() {

  // 1. npm install @mui/material @emotion/react @emotion/styled
  // 2.npm install @mui/material @mui/styled-engine-sc styled-components
 // 3.npm install @mui/icons-material

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <Box mb='40px'  >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ mr:'7rem',display: { xs: 'none', md: 'block' } }}>
        <img alt="Logo" src="https://res.cloudinary.com/dlpvqt7fp/image/upload/v1669278072/Internship%20Task/WhatsApp_Image_2022-11-24_at_12.01.12_PM_gorkxv.jpg" sx={{  mr: '10px',display: { xs: 'none', md: 'flex' } }} />
        </Box>
        

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="gray"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
           noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'gray',
              textDecoration: 'none',
            }}
          >
          <img alt="Logo" src="https://res.cloudinary.com/dlpvqt7fp/image/upload/v1669278072/Internship%20Task/WhatsApp_Image_2022-11-24_at_12.01.12_PM_gorkxv.jpg" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },gap:5 }}>
            {pages.map((page) => (
              <Typography
              variant="h6"
              noWrap
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'gray', display: 'block', "&:hover":{ color: 'blue'} ,cursor:'pointer'}}
              >
                {page}
              </Typography>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Stack direction={{ xs: 'row', sm: 'row' }}>
              <Stack sx={{mt:'0px',mr:'16px'}} direction={{ xs: 'row', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
               <SearchIcon />
               <NotificationsIcon />
               <MailIcon />
               </Stack>
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{width:'170%',height:'25px'}}/>
              </IconButton>
               </Stack>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </Box>

     {/* Notification Box Sections */}

    <Box sx={{width:{md:'56%',sm:'100%'},height:{md:'30px',sm:'auto'},m:'auto',display:{sm:'flex',md:'flex',xs:'flex'},justifyContent: 'space-between',mb:'20px'}}
  >
    <Typography variant="h5" color="#224498" width="30%" >Notification (3)</Typography>
    <Box width="40%" sx={{display:{sm:'flex',xs:'flex'},font:'18px Raleway semibold',height:'32px',gap:'10px'}}>
        <button style={{borderRadius:'20px',marginRight:'10px',border:'1px solid gray',color:"#224498",backgroundColor:"#FFFFFF",width:"34%"}}>Clear All</button>
        <button style={{borderRadius:'20px',border:'1px solid gray',color:"#224498",backgroundColor:"#FFFFFF",width:"50%"}}>Mark all Read</button>
    </Box>
  </Box>

  <Box sx={{display:{ xs: 'block', sm: 'block',md:'flex' },justifyContent:{md:'space-evenly'}}}>
  {/* Notification CheckBox Sections Type */}
 <Box  sx={{backgroundColor:'#dbdbdb',height:{md:'380px',xs:'auto'},borderRadius:'20px',position:'sticky',
 display:{xs:'flex',md:'inline-block'},width:{md:'220px',xs:'320px'},m:{md:'-1rem',sm:'auto'}}}>
 <Box>
  <FormGroup sx={{padding:{md:'3rem',xs:'2rem'},mt:'-2rem'}}>
  <Typography variant="p"  color="#707070" width="100%" >Notification Type</Typography>
  <FormControlLabel control={<Checkbox  />} label="Claps" />
  <FormControlLabel  control={<Checkbox />} label="Comment" />
  <FormControlLabel  control={<Checkbox />} label="Shares" />
  </FormGroup>
  </Box>
  <Box>
  <FormGroup sx={{padding:'3rem',mt:{md:'-95px',}}}>
  <Typography variant="p"  color="#707070" width="100%" >Post Type :</Typography>
  <FormControlLabel control={<Checkbox  />} label="Blog" />
  <FormControlLabel  control={<Checkbox />} label="Essay" />
  <FormControlLabel  control={<Checkbox />} label="Poem" />
  <FormControlLabel  control={<Checkbox />} label="Card" />
  </FormGroup>
  </Box>
</Box>
   {/* Notification Message Sections */}
   <Box  sx={{height:'500px',borderRadius:'10px',display:{xs:'none',sm:'block',md:'block'},width:{md:'700px',sm:'650px'},m:{md:'0px',sm:'auto'}}}>
    {notificationsData.map(el=>{
       return <Box sx={{borderBottom:'1.5px solid #dbdbdb',height:'auto',borderRadius:'10px',borderBottomLeftRadius:'6px',borderBottomRightRadius:'6px',mb:'24px'}}>
        <Box sx={{display:{md:'flex',sm:'flex'},justifyContent:{md:'space-between',sm:'space-between'},padding:'6px'}}>   
        <Typography variant="h5"  color="#49AECD" sx={{width:{md:"80%",sm:'60%'},font:'16px Raleway semibold',mt:'16px'}}>{el.name}</Typography>
        <Typography variant="p"  color="#707070" sx={{width:{md:'18%',sm:'20%'},font:'14px Raleway semibold'}} >{el.time}</Typography>
        </Box>
        <Box sx={{display:{md:'flex',sm:'flex'},justifyContent:'space-between',padding:'6px'}}>   
        <Typography variant="p"  color="#7070707" sx={{width:{md:"60%"},font:'12px Raleway regular'}}>{el.description}</Typography>
         <Box  sx={{width:{md:'18%',sm:'20%'}}}><button style={{borderRadius:'15px',border:'1px solid gray',font:'12px Raleway regular',color:'#A2a2a2'}}>Mark Read</button></Box>
        </Box>
    </Box>
    })}
   </Box>

      {/* Cart Sections   */}
   <Box  sx={{border:'1px solid #dbdbdb',height:'810px',textAlign:'center',borderRadius:'10px',backgroundImage: 'url("https://imgs.search.brave.com/wNJhF05TjUhBSeYXf5y6qsshGMOchQResIpXRopM_dg/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly93d3cu/d2FsbHBhcGVydGlw/LmNvbS93bWltZ3Mv/OC04MjE2NF9zb290/aGluZy1iYWNrZ3Jv/dW5kLmpwZw")',display:{xs:'none',sm:'none',md:'block'},width:{md:'190px',sm:'150px'}}}>
   <Button sx={{color:'white',backgroundColor:'tomato',"&:hover":{backgroundColor: 'tomato'},mb:'-75rem'}}>Learn More</Button>
   </Box>
   </Box>
  </>
  );
}
export default ViewAllNotifications;
