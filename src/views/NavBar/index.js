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
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },
  navBar: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  aboutLink: {
    fontWeight: 500,
    color: 'white',
    margin: '1rem 0.5rem 1rem 3rem',
    float: 'left',
    fontSize: '1.25rem',
    textDecoration: 'none',
  },
  fragmentContainer: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1.3rem 0.5rem 1rem 1rem',
    borderColor: '#4a5568',
    borderBottomLeftRadius: '100',
    borderLeft: '1',
    float: 'left',
  },
  fragmentLink: {
    fontSize: '0.9rem',
    color: '#cccccc',
    textDecoration: 'none',
    marginRight: '1.25rem',
    '&:hover': {
      color: 'white',
    },
  },
  documentsLink: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    color: '#cccccc',
    margin: '1.3rem 0.5rem 1rem 1rem',
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
