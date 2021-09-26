import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { CssBaseline } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import geoBackground from '../../images/geoBackground.jpg'

const useStyles = makeStyles((theme) => ({
  navlinks: {
    fontSize: '20px',
  },
  link: {
    marginLeft: '20px',
    textDecoration: 'none',
    color: '#344feb',
    '&:hover': {
      color: 'purple',
    },
  },
}))

function NavBar() {
  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <div style={{ backgroundImage: `url(${geoBackground})`, backgroundSize: 'cover' }}>
        <AppBar position="static" style={{ width: '100%', height: '50px', background: 'transparent' }}>
          <Toolbar>
            <Typography variant="h6" component="div" color="#344feb" sx={{ flexGrow: 1 }}>
              Andrew Ton
            </Typography>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/documents" className={classes.link}>
              Documents
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  )
}

export default NavBar
