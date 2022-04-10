import React, { MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { appRoutes } from '../../navigation/appRoutes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PageObject {
  label: string;
  path: string;
}

const pages: PageObject[] = [
  {
    label: 'Регисттрация участника',
    path: appRoutes.participantSignUp(),
  },
  {
    label: 'Вход участника',
    path: appRoutes.participantSignIn(),
  },
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const HeaderNavigationBar = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const handleNavigateToPage = (path: string): void => {
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuItem
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            onClick={() => navigate(appRoutes.landingPage())}
          >
            <Typography variant="h6" noWrap component="div">
              LOGO
            </Typography>
          </MenuItem>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <MenuItem
                  key={page.label}
                  onClick={() => handleNavigateToPage(page.path)}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MenuItem
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            onClick={() => navigate(appRoutes.landingPage())}
          >
            <Typography variant="h6" noWrap component="div">
              LOGO
            </Typography>
          </MenuItem>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              justifyContent: 'end',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => handleNavigateToPage(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
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
    </AppBar>
  );
};
export default HeaderNavigationBar;
