import * as React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useHistory, Link } from 'react-router-dom'
import { screenBreakpoint, customTheme } from '../../theme'

const theme = customTheme[screenBreakpoint]

const useStyles = makeStyles((theme) => ({
  navBar: {
    width: '100%',
    flexDirection: 'column',
  },
  aboutLink: {
    fontWeight: 500,
    color: 'white',
    margin: '1rem 0.9rem 1rem 3rem',
    float: 'left',
    fontSize: '1.85rem',
    textDecoration: 'none',
  },
  fragmentContainer: {
    flexGrow: 1,
    height: '100%',
    display: 'inline-flex',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  fragmentLink: {
    fontSize: '1.5rem',
    color: '#cccccc',
    textDecoration: 'none',
    marginRight: '1.25rem',
    '&:hover': {
      color: 'white',
    },
  },
  documentsLink: {
    height: '100%',
    display: 'inline-flex',
    flexWrap: 'wrap',
    margin: '0px 20px 0px 0px',
    alignContent: 'center',
    fontSize: '1.5rem',
    color: '#cccccc',
    float: 'right',
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
    },
  },
}))

function NavBar() {
  const classes = useStyles()
  const history = useHistory()

  return (
    <span>
      <CssBaseline />
      <AppBar position="sticky" sx={{ backgroundColor: '#2d3748' }}>
        <Toolbar>
          <Typography
            variant="h4"
            sx={{ ...theme.header2, margin: '1rem 0.9rem 1rem 2rem' }}
            onClick={() => {
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve(history.push('/portfolio-website/'))
                }, 100)
              }).then(() => (window.location.hash = '#about'))
            }}
            className={classes.aboutLink}
          >
            Andrew Ton
          </Typography>
          <nav className={classes.fragmentContainer}>
            <Typography
              variant="h5"
              sx={{ ...theme.header3, marginRight: '1.25rem' }}
              onClick={() => {
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(history.push('/portfolio-website/'))
                  }, 100)
                }).then(() => (window.location.hash = '#projects'))
              }}
              className={classes.fragmentLink}
            >
              Past Work
            </Typography>
            <Typography
              variant="h5"
              sx={{ ...theme.header3, marginRight: '1.25rem' }}
              onClick={() => {
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(history.push('/portfolio-website/'))
                  }, 100)
                }).then(() => (window.location.hash = '#skills'))
              }}
              className={classes.fragmentLink}
            >
              Skills
            </Typography>
            <Typography
              variant="h5"
              sx={{ ...theme.header3, marginRight: '1.25rem' }}
              onClick={() => {
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(history.push('/portfolio-website/'))
                  }, 100)
                }).then(() => (window.location.hash = '#contact'))
              }}
              className={classes.fragmentLink}
            >
              Contact
            </Typography>
          </nav>
          <a href="https://www.linkedin.com/in/andrew-ton-072328196/">
            <Typography
              variant="h5"
              sx={{
                ...theme.header3,
                marginRight: '1rem',
                flexWrap: 'wrap',
                color: '#cccccc',
                float: 'right',
                textDecoration: 'none',
                '&:hover': {
                  color: 'white',
                },
              }}
            >
              LinkedIn
            </Typography>
          </a>
          <Link to="/portfolio-website/documents">
            <Typography
              variant="h5"
              sx={{
                ...theme.header3,
                marginRight: '1rem',
                flexWrap: 'wrap',
                color: '#cccccc',
                float: 'right',
                textDecoration: 'none',
                '&:hover': {
                  color: 'white',
                },
              }}
            >
              Documents
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </span>
  )
}

export default NavBar
