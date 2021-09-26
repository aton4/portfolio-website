import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { CssBaseline } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  navlinks: {
    fontSize: '20px',
  },
  link: {
    marginLeft: '20px',
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: 'yellow',
      borderBottom: '1px solid white',
    },
  },
}))

function NavBar() {
  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" style={{ width: '100%', height: '50px', backgroundColor: '#6666ff' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
    </Box>
  )
}

export default NavBar
