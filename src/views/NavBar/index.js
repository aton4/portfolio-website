import * as React from 'react'
import { CssBaseline } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useHistory, Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#2d3748',
    position: 'sticky',
    zIndex: 10,
    display: 'flex',
  },
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
    <header className={classes.root}>
      <CssBaseline />
      <div className={classes.navBar}>
        <text onClick={() => history.push('/#about')} className={classes.aboutLink}>
          Andrew Ton
        </text>
        <nav className={classes.fragmentContainer}>
          <text onClick={() => history.push('/#work')} className={classes.fragmentLink}>
            Past Work
          </text>
          <text onClick={() => history.push('/#skills')} className={classes.fragmentLink}>
            Skills
          </text>
          <text onClick={() => history.push('/#contact')} className={classes.fragmentLink}>
            Contact
          </text>
        </nav>
        <Link to="/documents" className={classes.documentsLink}>
          Documents
        </Link>
      </div>
    </header>
  )
}

export default NavBar
