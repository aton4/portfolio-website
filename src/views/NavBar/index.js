import * as React from 'react'
import { CssBaseline, AppBar, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useHistory, Link } from 'react-router-dom'

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
// <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
function NavBar() {
  const classes = useStyles()
  const history = useHistory()

  return (
    <navigationBar>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <text onClick={() => history.push('/portfolio-website/#about')} className={classes.aboutLink}>
            Andrew Ton
          </text>
          <nav className={classes.fragmentContainer}>
            <text onClick={() => history.push('/portfolio-website/#projects')} className={classes.fragmentLink}>
              Past Work
            </text>
            <text onClick={() => history.push('/portfolio-website/#skills')} className={classes.fragmentLink}>
              Skills
            </text>
            <text onClick={() => history.push('/portfolio-website/#contact')} className={classes.fragmentLink}>
              Contact
            </text>
          </nav>
          <Link to="/portfolio-website/documents" className={classes.documentsLink}>
            Documents
          </Link>
        </Toolbar>
      </AppBar>
    </navigationBar>
  )
}

export default NavBar
